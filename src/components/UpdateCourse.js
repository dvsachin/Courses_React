import React , { Fragment } from "react";
import { FormGroup, Form, Input, Button, Container } from "reactstrap";

const UpdateCourse = () => {
    return(
        <Fragment>
            <h4 className="text-center my-3">Edit Course Details</h4>
            <Form>
                <FormGroup>
                    <label htmlFor="userId">Course Id:   </label>
                    <Input type="text" placeholder="Enter ID Here" name="userId" id="userId" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="title">Title:   </label>
                    <Input type="text" placeholder="Enter Title Here" name="title" id="title" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="description">Description:   </label>
                    <Input type="textarea" placeholder="Enter Description Here" name="description" id="description" style={{height:"100px"}} />
                </FormGroup>
                <Container className="text-center">
                    <Button color="primary" style={{marginRight:"25px"}}> Add Course</Button>
                    <Button color="warning" outline > Clear</Button> 
                </Container>
                
            </Form>
        </Fragment>
    )
}

export default UpdateCourse;