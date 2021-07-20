import {Link} from 'react-router-dom'
import HeaderLink from '../HeaderLink'
// importing LABELS and PATHS from config folder to assign the default values of link names and link routes in component, it can be changed in one file if needed by doing this
import {LABELS, PATHS} from "../../config"
const NavBar = () => {
    return (
       <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <Link to={PATHS.home} className="d-flex align-items-center text-dark text-decoration-none">
        
        <span className="fs-4">{LABELS.home}</span>
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <HeaderLink linkRoute={PATHS.login}  linkTitle={LABELS.login}/>
        <HeaderLink linkRoute={PATHS.signup} linkTitle= {LABELS.signup}/>
        <HeaderLink linkRoute={PATHS.profile} linkTitle= {LABELS.profile}/>
        <HeaderLink linkRoute={PATHS.logout} linkTitle= {LABELS.logout}/> 
      </nav>
    </div>
       </header>
    )
}

export default NavBar