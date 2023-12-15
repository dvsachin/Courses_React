import React, { Fragment, useEffect, useState } from "react";
import { FormGroup, Form, Input, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse=()=> {
    useEffect(()=> {
        document.title="Add Course";
    },[])

const [course, setCourse]= useState({})

// form handler function
const handleForm=(e)=>{
    addDatatoServer(course);
    e.preventDefault();
    // console.log(course);
    
}

// function to Post data on Server
const addDatatoServer=(data)=>{
    axios.post(`${base_url}/courses`, data).then(
    (response)=>{
        console.log(response);
        toast.success("Course added Successfully", {position:"bottom-left"})
        setCourse({id:"", title:"",description:""});
    },(error)=>{
        console.log(error);
        toast.error("Something went wrong on Server", {position:"bottom-left"})
    }) 
};


    return(
        <Fragment>
            <h4 className="text-center my-3">Fill Course Details</h4>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor="userId">Course Id:   </label>
                    <Input type="text" placeholder="Enter ID Here" name="userId" id="userId" 
                    onChange={(e)=>{
                        setCourse({...course,id:e.target.value})
                    }}
                    required />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="title">Title:   </label>
                    <Input type="text" placeholder="Enter Title Here" name="title" id="title" 
                    onChange={(e)=>{
                        setCourse({...course,title:e.target.value})
                    }}
                    required />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="description">Description:   </label>
                    <Input type="textarea" placeholder="Enter Description Here" name="description" id="description" style={{height:"100px"}} 
                    onChange={(e)=>{
                        setCourse({...course,description:e.target.value})
                    }}
                    required />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="primary" style={{marginRight:"25px"}}> Add Course</Button>
                    <Button color="warning" outline type="reset" > Clear</Button> 
                </Container>
                
            </Form>
        </Fragment>
    )
}

export default AddCourse;