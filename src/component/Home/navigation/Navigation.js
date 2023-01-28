import navi from "./Navigation.css"
import { Link } from "react-router-dom";
const Navigation=()=>{
    return(
        <nav>
			<a className={navi.logo}></a>
			<ul>
				<li><Link to="/" className={navi.active}>Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/contact">Education</Link></li>
				<li><Link to="/education">Career</Link></li>
			</ul>
		</nav>
    );
};
export default Navigation;
