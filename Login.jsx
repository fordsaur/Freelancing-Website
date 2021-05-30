import React,{ useState }  from "react";
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import "./index.css";
 import {Link } from "react-router-dom";
 import Menu from "./Menu";
function Login()
{
  const [fullname,Setfullname]=useState({
    fname:"",
    lname:"",
});

let name,value;

function  inputEvent(event)
{ 
    name=event.target.name;
    value=event.target.value;
    Setfullname({...fullname, [name]:value});
    console.log(event.target.value)
}

function Onsubmit(event)
{
    event.preventDefault(); 
      alert( "form Submitted");
    
}

    return(<>
    <Menu/>
    <h2 className="text-center display-3 marginupsmall" >Login Form</h2>
        <form className="container marginupsmall border border-secondary">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="fname"  onChange={inputEvent} value={fullname.fname} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password"  name="lname"  onChange={inputEvent} value={fullname.lname}  className="form-control" id="exampleInputPassword1"/>
        </div>
     
       <Link  to="/DashBoard"> <button type="submit" className="btn btn-primary"  >Submit</button>
      </Link>
      </form>
      </>
    
    )
}
export  default Login;