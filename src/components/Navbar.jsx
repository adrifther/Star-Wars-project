import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt="" style={{width: '50px' , height: '28px'}}/></span>
				</Link>
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites <i className="fa-regular fa-heart"></i>
  </button>
  <ul class="dropdown-menu">
    <li></li>
  </ul>
</div>
			</div>
		</nav>
	);
};