import axios from "axios";
import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from 'reactstrap'; 
import base_url from "../api/bootapi";
import { toast } from "react-toastify";



const Course = ({course, update}) => {
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                console.log(response);
                toast.success("Course is Deleted ", {position:"bottom-left"});
                update(id);
        },(error)=> {
                toast.error("something went wrong!", {position:"bottom-left"});
                console.log(error);
    
        });
    }; 


    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container>
                <Button color="warning" style={{marginRight: '20px'}}>Update</Button>
                <Button color="danger" onClick={ ()=> { deleteCourse(course.id) } }>Delete</Button>
                </Container>
               
            </CardBody>
        </Card>
    )
}

export default Course;