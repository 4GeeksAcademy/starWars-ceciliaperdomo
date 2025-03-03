import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// Imagenes de planetas
import peopleData from "../assets/json/people.json";

// Agrega a favoritos
import { favorites } from "../store.js";

export const CardPeople = ({ id, people }) => {
    const { store, dispatch } = useGlobalReducer()
    const peopleImage = peopleData.people.find(p => p.id === id)?.image || "https://via.placeholder.com/300";

    const isFavorite = store.favoritos?.includes(people.name) || false;     //para poner el corazon de color

    return (
        <div
            className="card"
            style={{ width: "18rem", flex: "none", margin: "10px" }}>

            <img src={peopleImage}
                className="card-img-top"
                alt={people.name}
                style={{ height: "25rem" }}
            />

            <div className="card-body d-flex flex-column justify-content-center">
                <div className="align-items-center text-center" style={{ height: "150px" }}>
                    <h5 className="card-title">{people.name}</h5>
                    <p className="card-text">Gender: <strong>{people.gender}</strong></p>
                    <p className="card-text">Eye color: <strong>{people.eye_color}</strong></p>
                </div>
                <div className="d-flex justify-content-between">
                    <Link to={`/character/${id + 1}`} className="btn btn-outline-primary">
                        Más info
                    </Link>
                    <button
                        className={isFavorite ? "btn btn-danger" : "btn btn-outline-warning"}
                        onClick={() => favorites(dispatch, people.name, store)}
                    >
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}