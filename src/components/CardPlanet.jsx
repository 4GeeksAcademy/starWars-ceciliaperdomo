import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// Imagenes de planetas
import planetsData from "../assets/json/planets.json";

// Agrega a favoritos
import { favorites } from "../store.js";

export const CardPlanet = ({ id, planet }) => {
    const { store, dispatch } = useGlobalReducer()
    const planetImage = planetsData.planets.find(p => p.id === id)?.image || "https://via.placeholder.com/300";

    const isFavorite = store.favorites?.includes(planet.name) || false;

    return (
        <div
            className="card"
            style={{ width: "18rem", flex: "none", margin: "10px" }}
        >
            <img src={planetImage}
                className="card-img-top"
                alt={planet.name}
            />
            <div className="card-body d-flex flex-column justify-content-center">
                <div className="align-items-center text-center" style={{ height: "150px" }}>
                    <h5 className="card-title">{planet.name}</h5>
                    <p className="card-text">Population: <strong>{planet.population}</strong></p>
                    <p className="card-text">Terrain: <strong>{planet.terrain}</strong></p>
                </div>
                <div className="d-flex justify-content-between">
                    <Link to={`/planet/${id + 1}`} className="btn btn-outline-primary">
                        Más info
                    </Link>
                    <button
                        className="btn btn-outline-warning"
                        onClick={() => favorites(dispatch, planet.name, store)}
                    >
                        <i className="fa fa-heart" style={{ color: isFavorite ? 'red' : 'black' }}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}