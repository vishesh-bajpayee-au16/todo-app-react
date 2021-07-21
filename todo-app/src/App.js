import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import Layout from "./containers/Layout";
// importing components from reactstrap which uses bootstrap css file imported in index.js as it is a parent of every component
// import {Button} from 'reactstrap'

// importing components from component folder

const App = () => {
  return (
    //   layout component wrapps the switch with all the routes, which enables us to have a same header and footer in all the routes
    <Layout>
      <Switch>
        {/* mapping through routes array in which we have defined all the three methods of routes (path,exact,component) and gave them a 
                dynamically defined value in config folder. Here we are simply mapping through each route element and wrapping it inside <Route/> component
            */}
        {routes.map((route) => (
          <Route key={Math.random()} {...route} />
        ))}
      </Switch>
    </Layout>
  );
};

export default App;
