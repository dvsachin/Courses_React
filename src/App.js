import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses'; 
import AddCourse from './components/AddCourse';
import UpdateCourse from './components/UpdateCourse';
import Menu from './components/Menu';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {

  const notify = () => 
  // toast("Wow so easy!");
  toast.success("Completed", {position:'top-center'});


  return (
    <div>
      <Router>
      <ToastContainer /> 
      <Header/>
      <Container>
        <Row>
          <Col md={3}> <h4> <Menu/> </h4></Col>
          <Col md={9}>
            <Routes>
            <Route path="/" Component={Home} exact/>
            <Route path="/add-course" Component={AddCourse} exact />
            <Route path="/view-courses" Component={AllCourses} exact />
            </Routes>
          </Col>
        </Row>
      </Container>
      
      {/* <Header/>
      <Home/>
      <AllCourses/>
      <AddCourse/>
      <UpdateCourse/> */}

      
      

      {/* <h1>Simple App</h1>
      <Button color="primary" onClick={notify} >My React Button</Button>
      <br/><br/>*/}
     
      </Router>
     
    </div> 
      
  );
}



export default App;
