import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// Imagenes de planetas
import peopleData from "../assets/json/people.json";

// Agrega a favoritos
import { favorites } from "../store.js";

// importacion del css
import "./css/cardPeople.css"

export const CardPeople = ({ id, people }) => {
    const { store, dispatch } = useGlobalReducer()
    const peopleImage = peopleData.people.find(p => p.id === id)?.image || "https://via.placeholder.com/300";

    const isFavorite = store.favoritos?.includes(people.name) || false;     //para poner el corazon de color

    return (
        <div className="cardPeople">
            <div className="bg uwu"></div>
            <div className="bg"></div>
            <div className="content">
                <div className="img">
                    <img src={peopleImage}
                        className="card-img-top"
                        alt={people.name}
                    />
                </div>
                <div className="h1">
                    <strong>{people.name}</strong>
                    <br />
                    Gender: <strong>{people.gender}</strong>
                </div>
                <div className="p">
                    <p>
                        Eye color: <strong>{people.eye_color}</strong>
                        <br />
                        Hair color: <strong>{people.hair_color}</strong>
                    </p>
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