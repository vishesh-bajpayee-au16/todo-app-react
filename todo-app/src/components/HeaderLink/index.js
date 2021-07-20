import React from 'react'
import {Link} from 'react-router-dom'
const HeaderLink = ({linkTitle, linkRoute}) => {
    return (
        <div>
             <Link className="me-3 py-2 text-dark text-decoration-none" to={linkRoute}>{linkTitle}</Link>
        </div>
    )
}

export default HeaderLink
