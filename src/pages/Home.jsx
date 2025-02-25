import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// Planets
import { fetchPlanets } from "../store.js";
import { CardPlanet } from "../components/CardPlanet.jsx";

// Characters
import { fetchCharacters } from "../store.js";
import { CardPeople } from "../components/CardPeople.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()


	useEffect(() => {
		fetchPlanets(dispatch)
		fetchCharacters(dispatch)
	}, []);


	return (
		<div className="text-center mt-2 container">
			<h1>Star Wars</h1>

			<br />

			<h2>Characters</h2>
			<div className="d-flex flex-row overflow-scroll">
				{store.people.map((people, id) => (
					<CardPeople
						key={id}
						id={id}
						people={people}
					/>
				))}
			</div>

			<br />

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