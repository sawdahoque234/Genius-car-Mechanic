import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <img src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NDA0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" width="50%" alt="" />
            <br /> <br />
            <Link to="/home"><button className="btn btn-danger">Go Back</button></Link>
        </div>
    );
};

export default Notfound;