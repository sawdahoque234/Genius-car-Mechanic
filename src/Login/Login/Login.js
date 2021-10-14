import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {handleGoogleSignin} = useAuth();
    return (
        <div>
            <h2 className="py-3 my-5 mx-5">Please Login</h2>
            <button onClick={handleGoogleSignin} className="btn btn-danger mx-5">Google Sign In</button>
        </div>
    );
};

export default Login;