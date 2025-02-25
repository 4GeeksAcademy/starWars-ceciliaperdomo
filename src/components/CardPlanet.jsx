import { Link } from "react-router-dom"

// Imagenes de planetas
import planetsData from "../assets/json/planets.json";

export const CardPlanet = ({ id, planet }) => {

    const planetImage = planetsData.planets.find(p => p.id === id)?.image || "https://via.placeholder.com/300";

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
                    <Link to="#" className="btn btn-outline-primary">
                        Más info
                    </Link>
                    <button className="btn btn-outline-warning">
                        Like
                    </button>
                </div>
            </div>
        </div>
    )
}