import React from "react";
import { Alert } from "reactstrap";

function Header() {

    return(
        <div>
            <Alert color="info">
            <h4 className="alert-heading text-center" style={{margin:"-10px"}} >Welcome to Courses</h4>
            </Alert>
        </div>
    )

}

export default Header;