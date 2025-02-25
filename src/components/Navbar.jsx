import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/" style={{ textDecoration: "none" }}>
					<h1 className="navbar-brand mb-0 h1">
						Star Wars
					</h1>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-outline-info">
							<i className="fa fa-heart text-danger" /> My favorites
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};