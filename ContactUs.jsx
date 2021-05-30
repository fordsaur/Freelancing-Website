import React from "react";
import Menu from "./Menu";
import {Link} from "react-router-dom";
function ContactUs()
{
    return(
        <>
    <Menu/>
        <div class="card text-center">
        <div class="card-header">
          You Want Help! 
        </div>
        <div class="card-body">
          <h5 class="card-title">You Can Contact Us</h5>
          <p class="card-text">We are hire to Help You </p>
          <Link to="#" class="btn btn-primary">Go somewhere</Link>
        </div>
        <div class="card-footer text-muted">
          2 days ago
        </div>
      </div>
    </>
    )
}
export  default ContactUs;
