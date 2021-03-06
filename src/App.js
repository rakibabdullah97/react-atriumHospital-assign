import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Error from './Pages/Error/Error';
import Appointment from './Pages/Home/Appointment/Appointment';
import Details from './Pages/Home/Details/Details';
import Home from './Pages/Home/Home/Home';
import Status from './Pages/Home/Status/Status';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import Footer from './Pages/Sheared/Footer/Footer';
import Header from './Pages/Sheared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/details/:serviceId'>
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path='/appointment'>
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path='/status'>
              <Status></Status>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
