import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Splash = () => {
    return (
        <div>
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <ul class="nav navbar-nav">
                  <li class="active"><a href="#">Instagram</a></li>
                  <li><a href="#">Tik Tok</a></li>
                </ul>
              </div>
            </nav>

            <div class="jumbotron text-center">
                <h1>Instagram</h1>
            </div>
                <Link to="/view">View</Link>
        </div>
    )
}

export default Splash
