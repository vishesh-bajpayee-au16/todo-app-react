import { Link } from "react-router-dom"
import { PATHS } from "../../config"

const Footer = () => {
    return (
        <footer className="mt-2">
            <div className="text-center">
            Copyright&copy; All Rights Reserved
           <p> Created by <Link to={PATHS.home} className="text-black">Vishesh</Link>   </p>
            </div>
        </footer>
    )
}

export default Footer
