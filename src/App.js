import React from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from './views/Splash.js'
import View from './views/View.js'
import routes from "./Routes"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <Switch>
        {
              routes.map(({ exact, path, Component }) => {
                    return (
                          <Route
                            exact={exact}
                            path={path}
                            key={path}
                            component={Component}
                          />
                    )
              })
        }
    </Switch>

  );
}

export default App;
