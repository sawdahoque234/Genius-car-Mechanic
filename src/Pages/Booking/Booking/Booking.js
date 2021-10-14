import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {serviceid} = useParams();
    return (
        <div className="py-3 my-5 mx-5">
            <h2>this is booking:{serviceid}</h2>
        </div>
    );
};

export default Booking;