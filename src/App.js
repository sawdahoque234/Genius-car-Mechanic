import './App.css';
import Home from './Pages/Home/Home/Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Notfound from './Notfound/Notfound';
import Booking from './Pages/Booking/Booking/Booking';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute
            path="/booking/:serviceid">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          
          <Route path="*">
            <Notfound></Notfound>


          </Route>
        </Switch>
        
      </BrowserRouter>
      </AuthProvider>

  );
}

export default App;
