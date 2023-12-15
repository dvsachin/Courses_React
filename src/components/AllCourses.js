import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses = () => {

    useEffect(()=> {
        document.title="All Courses";
    },[])

    // function to call server - Get call /courses to view all courses
    const getAllCoursesFromServer=()=> {
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                // Success
                console.log(response.data);
                setCourses(response.data);
                toast.success("All courses has been loaded",{position:"bottom-left"});
            },
            (error)=> {
                // Exception
                console.log(error);
                toast.error("something went wrong", {position:"bottom-left"});
            }
        )
    }

    // calling loading course function
    useEffect(()=> {
      getAllCoursesFromServer();
    },[])

    const[courses,setCourses]=useState([ 
        {id:301,title:"Java ", description:"It is a Java course for absolute beginners"},
        {id:302,title:"Python ", description:"Python is a simple programming language  and this course for school kids"},
        {id:303,title:"C++ ", description:"C++ course for advance core programmers"}
    ])

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=> c.id != id));
    }
    return(
        <div>
            <h4>All Courses</h4>
            <p>List of courses are as follows: </p>
            {
                courses.length > 0 
                ? courses.map( (course) => (<Course key={course.id} course={course} update={updateCourses} />) ) 
                : "No Courses"
            }
        </div>
    )
}

export default AllCourses;