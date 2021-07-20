import React from 'react'
import {Switch, Route} from 'react-router-dom'
import routes from "./routes"
// importing components from reactstrap which uses bootstrap css file imported in index.js as it is a parent of every component 
// import {Button} from 'reactstrap'

// importing components from component folder
   
const App = () => {
    return (
        <Switch>
            {/* mapping through routes array in which we have defined all the three methods of routes (path,exact,component) and gave them a 
                dynamically defined value in config folder. Here we are simply mapping through each route element and wrapping it inside <Route/> component
            */}
            {
                routes.map(route => <Route key={Math.random()}  {...route}/>)
            }
        </Switch>
    )
}

export default App
