import React from "react";
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import "./index.css";
 import Menu2 from "./Menu2";

 import Bankgateway from "./BankGateway";
  const margin ={
      marginTop:"5px",
  }
function SubmitWork()
{
    return(<>
    <Menu2/>
    <h2 className="text-center display-3 marginupsmall" >SubmitWork Form</h2>
    <h4 className="text-center" style={{backgroundColor:"Yellow"}}>You are Submitting work As a Like Hiring Any Freelancer. To Do that Please Submit Payment Account Details Also.</h4>
        <form className="container marginupsmall border border-secondary">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Title</label>
          <input type="text" class="form-control" id="exampleInputTitle1" aria-describedby="Titlehelp" placeholder="Title"/>
          <div id="TitleHelp" class="form-text" ></div>
        </div>
        <div class="mb-3">
          <label for="certificates" class="form-label">Photo as sample</label>
          <input type="File" class="form-control" id="File"/>
        </div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">What is Work About in Details </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="It Should Be Of 300 words."></textarea>
</div>
<div>
<select class="form-select" aria-label="Default select example">
  <option selected>Select Category</option>
  <option value="1">Graphics Designing</option>
  <option value="2">Animation</option>
  <option value="3">Vedio Editor</option>
  <option value="4">Voice Transaction</option>
  <option value="2">Business</option>
  <option value="3">Other</option>
</select>
</div>
</form>
      </>
    
    )
}
export  default SubmitWork;