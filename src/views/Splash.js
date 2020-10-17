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
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-success">
              <div class="container">
                  <div class="navbar-header">
                      <a asp-area="" href="/" class="navbar-brand">Instagram</a>
                      <a asp-area="" href="View" class="navbar-brand">TikTok</a>
                  </div>
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
