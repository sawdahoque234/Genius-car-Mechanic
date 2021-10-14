import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route ,Redirect} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let { user, loading } = useAuth();
    if (loading) {
        return  <Spinner animation="grow" className="my-5 mt-5 mx-4" variant="info" />
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
          
          
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;