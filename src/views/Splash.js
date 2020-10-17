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
            Hello from splash! <br/>
            <Link to="/view">View</Link>
        </div>
    )
}
    
export default Splash