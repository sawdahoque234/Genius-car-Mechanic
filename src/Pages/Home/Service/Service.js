import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { id,name, price, description, img } = service;
    return (
        <div className="service mt-5">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3 py-2">{description}</p>
            <Link to={`/booking/${id}`}>
            <button className="btn btn-success">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;