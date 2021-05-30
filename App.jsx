import React from "react";
import AboutUs from "./AboutUs";
import Home from "./Home.jsx";
import login from "./Login";
import Signup from "./Signup";
import Wallet from "./Wallet";
import DashBoard from "./DashBoard";
import Profile from "./Profile";
import Submitwork from "./Submitwork";
import Findwork from "./Findwork";


import ContactUs from "./ContactUs";
import { BrowserRouter,Route,Switch} from "react-router-dom";
import Heading from "./Heading";


function App()
{
    return (
        <BrowserRouter>
        <>
        <Heading/>
    <Switch>
    
    <Route  exact path="/" component={Home}/>
    <Route exact path="/about" component={AboutUs}/>
    <Route exact path="/contact" component={ContactUs}/>
    <Route exact path="/Login" component={login}/>
    <Route exact path="/Signup" component={Signup}/>
    <Route  exact path="/dashboard" component={DashBoard}/>
    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/Wallet" component={Wallet}/>
    <Route exact path="/Submitwork" component={Submitwork}/>
    <Route exact path="/Findwork" component={Findwork}/>
    </Switch>
    </>
    </BrowserRouter>
    )
}
export  default App; 