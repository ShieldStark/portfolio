import navi from "./Navigation.css"

const Navigation=()=>{
    return(
        <nav>
			<a class="logo"></a>
			<ul>
				<li><a class="active">Home</a></li>
				<li><a>About</a></li>
				<li><a>Contacts</a></li>
				<li><a>Education</a></li>
			</ul>
		</nav>
    );
};
export default Navigation;
