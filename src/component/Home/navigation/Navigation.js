import navi from "./Navigation.css"
import { Link } from "react-router-dom";
const Navigation=()=>{
    return(
        <nav>
			<a className={navi.logo}></a>
			<ul>
				<li><Link to="/portfolio/" className={navi.active}>Home</Link></li>
				<li><Link to="/portfolio/about/">About</Link></li>
				<li><Link to="/portfolio/contact/">Education</Link></li>
				<li><Link to="/portfolio/education/">Career</Link></li>
			</ul>
		</nav>
    );
};
export default Navigation;
