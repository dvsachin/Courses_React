import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menu = () => {
    return(
        <div>
            <ListGroup>
            <Link className="list-group-item list-group-item-action"
            action
            to="/"
            tag="a">
            Home
            </Link>

            <Link className="list-group-item list-group-item-action"
            action
            to="/add-course"
            tag="a">
            Add Courses
            </Link>

            <Link className="list-group-item list-group-item-action"
            action
            to="/view-courses"
            tag="a">
            View Courses
            </Link>

            {/* <Link className="list-group-item list-group-item-action"
            action
            to="#!"
            tag="a">
            About Us 
            </Link>

            <Link className="list-group-item list-group-item-action"
            action
            to="#!"
            tag="a">
            Contact info!
            </Link> */}

            </ListGroup>
        </div>
    )
}


export default Menu;