import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import { fetchPlanets } from "../store.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()


	useEffect(() => {
		fetchPlanets(dispatch)
	}, []);

	console.log(store.planets)

	return (
		<div className="text-center mt-2 container">
			<h1>Star Wars</h1>

			<h2>Planetas</h2>
		</div>
	);
}; 