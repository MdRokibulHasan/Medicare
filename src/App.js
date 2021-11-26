import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Services from '../src/Components/Services/Services'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Sheare/Header/Header';
import Doctors from './Components/Doctors/Doctors';
import NotFound from './Components/NotFound/NotFound';
import Departments from './Components/Departments/Departments';
import About from './Components/About/About';
import Contract from './Components/Contract/Contract';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import Details from './Components/Details/Details';
import DoctorDetails from './Components/DoctorDetails/DoctorDetails';
import DepartmentDetails from './Components/DepartmentDetails/DepartmentDetails';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



function App() {

  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route exact path="/home" >
            <Home></Home>
          </Route>
          <Route exact path="/services" >
            <Services></Services>
          </Route>
          <Route path="/about" >
            <About></About>
          </Route>
          <Route path="/doctor" >
            <Doctors></Doctors>
          </Route>
          <Route path="/depertment" >
            <Departments></Departments>
          </Route>
          <Route path="/contract" >
            <Contract></Contract>
          </Route>
          <Route path="/login" >
            <LogIn></LogIn>
          </Route>
          <Route path="/register" >
            <Register></Register>
          </Route>
          <PrivateRoute path="/details/:id" >
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path="/doctordetails/:id" >
            <DoctorDetails></DoctorDetails>
          </PrivateRoute>
          <PrivateRoute path="/departmentdetails/:id" >
            <DepartmentDetails></DepartmentDetails>
          </PrivateRoute>
          <Route path="*" >
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
