import React from "react";
import {Link} from "react-router-dom";
import Menu2 from "./Menu2";

function Wallet()
{
    return (<>
    <Menu2/>
        <div className="container marginupsmall">
        <div class="card w-100 ">
  <div class="card-body">
    <h5 class="card-title text-center display-5">Wallet Details and Transactions</h5>
    <p class="card-text">Balance:</p>
  <p class="card-text"> WithDraw:</p>
  <p class="card-text"> Deposited:</p>
  <p class="card-text"> Monthly Transactions:</p>
  
    <Link class="btn btn-primary btn btn-outline-light ">Do A Payment</Link>
  </div>
</div>
</div>
</>
    )
}
export  default Wallet; 