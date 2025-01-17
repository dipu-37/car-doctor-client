import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);
  console.log(bookings)

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => setBooking(data))
    axios.get(url,{withCredentials:true})
    .then(res =>{
      setBooking(res.data);
    })
  }, [url])

  const handleDelete = id => {
    const proceed = confirm('Are you sure you want to delete')
    if (proceed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0)
                {
                    alert('delete successfully');
                    const remaining = bookings.filter(booking=>booking._id !==id);
                    setBooking(remaining);
                }
                
            })
    }
}
const handleBookingConfirm = id => {
  fetch(`http://localhost:5000/bookings/${id}`, {
      method: 'PATCH',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({ status: 'confirm' })
  })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.modifiedCount > 0) {
              // update state
              const remaining = bookings.filter(booking => booking._id !== id);
              const updated = bookings.find(booking => booking._id === id);
              updated.status = 'confirm'
              const newBookings = [updated, ...remaining];
              setBooking(newBookings);
          }
      })
}


  return (
    <div>
      <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>service</th>
              <th>date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>

            {
              bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}handleBookingConfirm={handleBookingConfirm}></BookingRow>)
            }

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Bookings;