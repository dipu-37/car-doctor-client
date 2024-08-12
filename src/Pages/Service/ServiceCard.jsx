import { Link } from "react-router-dom";

const ServiceCard = ({services}) => {
    const {title, img, price,_id } = services;
    return (
        <div className="card bg-base-100  shadow-xl ">
        <figure className="pt-10 px-10">
          <img
            src={img}
            alt="Shoes" 
            className="rounded-xl h-[196px]"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-orange-500">Price: ${price}</p>
          <div className="card-actions ">
            <Link to={`/bookservices/${_id}`}><button className="btn btn-warning">Book Services</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;