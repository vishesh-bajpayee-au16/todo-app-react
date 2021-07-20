import {PATHS} from '../config'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Logout from '../containers/Logout'
import Profile from '../containers/Profile'
import Signup from '../containers/Signup'

// storing all the routes in one array with all the methods of routes for each route

/*
______________________________________________________________________________IMPORTANT
for the first method path, we are assigning the PATH provided in config folder 
for exact we assign it to be true for every route 
for component we import the component we would like to render
*/
const routes = [
    {path: PATHS.home,exact: true,component: Home},
    {path: PATHS.login,exact: true,component:Login},
    {path: PATHS.signup,exact: true,component:Signup},
    {path: PATHS.logout,exact: true,component:Logout},
    {path: PATHS.profile,exact: true,component:Profile},


]

export default routes