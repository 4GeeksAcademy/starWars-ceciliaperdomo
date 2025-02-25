import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import { fetchPlanets } from "../store.js";
import { CardPlanet } from "../components/CardPlanet.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()


	useEffect(() => {
		fetchPlanets(dispatch)
	}, []);


	return (
		<div className="text-center mt-2 container">
			<h1>Star Wars</h1>

			<h2>Planets</h2>
			<div className="d-flex flex-row overflow-scroll">
			{store.planets.map((planet, id) => (
				<CardPlanet 
				key={id} 
				id={id}
				planet={planet} 
				/>
			))}
		</div>
		</div>
	);
}; 