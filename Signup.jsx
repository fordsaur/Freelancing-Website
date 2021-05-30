import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import "./index.css";
 import Menu from "./Menu";
 

 const Cont = createContext();
function Signup()
{
  let info="Information";
  const [user,SetUser]= useState({name: "", password: "", photo: "", 
  emailaddress: "", AboutYoursBio: "", skills:"", Address1: "", Address2: "", city: "", Zip: "" });


   let  name,value;
  const handleinputs = (e)=>
  {
name=e.target.name;
value=e.target.value;
SetUser({...user, [name]:value});
  }

    return(<>
  <Menu/>
  
    <h2 className="text-center display-3 marginupsmall" >SignUp Form</h2>
        <form className="container marginupsmall border border-secondary">
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
          <input type="text"  name="name" defaultValue={user.name}  onChange={handleinputs} className="form-control"  id="exampleInputName1" aria-describedby="Namehelp" 
       placeholder="Your Full Name"/>
          <div  id="NameHelp" className="form-text" ></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password"  name="password" defaultValue={user.password}  onChange={handleinputs} className="form-control"  id="exampleInputPassword1"  
           placeholder="Minimum 8 digit"/>
        </div>
        <div className="mb-3">
          <label htmlFor="certificates" className="form-label">Photo</label>
          <input type="File"   name="photo" defaultValue={user.photo} onChange={handleinputs} className="form-control"  id="File" />
        </div>
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" name="emailaddress" defaultValue={user.emailaddress}  onChange={handleinputs} className="form-control"  id="exampleFormControlInput1"  
   placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">About  Your Bio</label>
  <textarea className="form-control" name="AboutYoursBio"  defaultValue={user.AboutYoursBio}  onChange={handleinputs} id="exampleFormControlTextarea1" rows="3" 
   placeholder="It Should Be Of 300 words."></textarea>
</div>
<form className="row g-3">
  
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" name="Address1" defaultValue={user.Address1} onChange={handleinputs} className="form-control"  id="inputAddress"  
     placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" name="Address2" defaultValue={user.Address2}  onChange={handleinputs} className="form-control"  id="inputAddress2" 
     placeholder="Apartment, studio, or floor"/>
  </div>
  <div>
  <label htmlFor="inputAddress2"   className="form-label">Enter Skills</label>
  <input className="form-control" name="skills" defaultValue={user.skills}  onChange={handleinputs} list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
  <datalist id="datalistOptions">
      <option value="Graphics Designer"></option>
  <option value="Vedio Editor"></option>
  <option value="3Business"></option>
  <option value="Ecommerce"></option>
  <option value="Programming"></option>
  <option value="Social Media"></option>
  <option value="Digital Marketing"></option>
  <option value="Audio Editor"></option>
</datalist>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" name="city" defaultValue={user.city}  onChange={handleinputs} className="form-control"   id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <input type="text" name="State" defaultValue={user.State}  onChange={handleinputs} className="form-control"   id="inputState"/>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text"  name="Zip" defaultValue={user.Zip} onChange={handleinputs} className="form-control"  
      id="inputZip"/>
  </div>
  
  <div className="col-12">
   <Link to="/Login"><button type="submit" className="btn btn-primary">Submit</button>
   </Link>
  </div>
</form>
</form>
      </>
    
    )
}
export  default Signup;
export { Cont };