import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData();
    const {title}=service;
    return (
        <div>
        <h2 className='text-center text-3xl'>Book Service: {title} </h2>
        <form  className="card-body card ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"  name="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due amount</span>
                    </label>
                    <input type="text" className="input input-bordered" />
                </div>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
            </div>
        </form>
        <div className="card-body">

        </div>
    </div>
    );
};

export default CheckOut;