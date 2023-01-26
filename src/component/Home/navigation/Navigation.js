import navi from "./Navigation.css"
import { Link } from "react-router-dom";
const Navigation=()=>{
    return(
        <nav>
			<a class="logo"></a>
			<ul>
				<li><Link to="/" class="active">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/contact">Contacts</Link></li>
				<li><Link to="/education">Education</Link></li>
			</ul>
		</nav>
    );
};
export default Navigation;
