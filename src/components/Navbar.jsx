import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<>
			<nav className="navbar navbar-dark">
				<div className="container">
					<Link to="/" style={{ textDecoration: "none" }}>
						<h1 className="navbar-brand mb-0 h1 pt-4">
							Star Wars
						</h1>
					</Link>
					<div className="dropdown pt-4">
						<button className="btn btn-outline-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<i className="fa fa-heart text-danger" /> My favorites
						</button>
						<ul className="dropdown-menu">
							{store.favoritos.length === 0 && <li><a className="dropdown-item" href="#">No favorites yet</a></li>}
							{store.favoritos.map((favorito, id) => (
								<li key={id}><a className="dropdown-item align-items-center" href="#">
									{favorito}
									<button className="btn btn-outline-danger float-end"
										onClick={() => dispatch({ type: 'remove_favorito', payload: favorito })}>
										<i className="fa fa-trash"></i>
									</button>
								</a></li>
							))}
						</ul>
					</div>

				</div>
			</nav>
			<hr className="border-info" />
		</>
	);
};