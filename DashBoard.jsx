import React,{useContext} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Menu2 from "./Menu2";
import {Cont} from "./Signup";
function DashBoard()
{

return(
<>
<Menu2/>
<Cont.Consumer>
  {
    function (ename)
    {
      <h1>This is Name {ename}</h1>
    }
  }
</Cont.Consumer>
  

      
<div className="container marginupsmall">
<div class="row row-cols-1 row-cols-md-2 g-4 ">
  <div class="col">
    <div class="card">
      <img src="images/profile.jpg" class="card-img-top" alt="card1"/>
      <div class="card-body">
        <h5 class="card-title">Profile Details</h5>
        <p class="card-text">
        
  <p class="card-text">Name:</p>
  <p class="card-text"> Rate/Hr:</p>
  <p class="card-text"> Ratings:</p>
  <p class="card-text"> Reviews:</p>
  <p class="card-text">Skills:</p>
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="images/Transaction.jpg" class="card-img-top" alt="card2"/>
      <div class="card-body">
        <h5 class="card-title">Transaction</h5>
        <p class="card-text">completed</p>
    <p class="card-text">Balance:</p>
  <p class="card-text"> WithDraw:</p>
  <p class="card-text"> Deposited:</p>
  <p class="card-text">archeived:</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="images/analytics.jpg" class="card-img-top" alt="card3"/>
      <div class="card-body">
        <h5 class="card-title">Analytics</h5>
        <p class="card-text">work completed:</p>
  <p class="card-text"> pending:</p>
    </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="images/reviews.jpg" class="card-img-top" alt="card4"/>
      <div class="card-body">
        <h5 class="card-title">Ratings</h5>
        <p class="card-text">positive:</p>
  <p class="card-text"> Negative:</p>
  </div>
    </div>
  </div>
</div>
</div>

  

     
</>
)
}
  export default DashBoard;
 