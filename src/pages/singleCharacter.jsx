import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

import { fetchInfoCharacter, favorites, fetchInfoPlanet } from "../store.js"
import peopleData from "../assets/json/people.json"

export const SingleCharacter = () => {
    const { store, dispatch } = useGlobalReducer()
    const { idCharacter } = useParams()

    useEffect(() => {
        fetchInfoCharacter(dispatch, idCharacter)
        planeta()
    }, [])

    const planeta = async () => {
        const homeworldId = store?.character?.homeworld ? store?.character?.homeworld.match(/\/(\d+)\/$/)[1] : null;
        if (homeworldId !== null) {
            try {
                await fetchInfoPlanet(dispatch, homeworldId);
            } catch (error) {
                console.error("Error al obtener el planeta:", error);
            }
        }
    }

    const isFavorite = store.favoritos?.includes(store.character.name) || false
    const peopleImage = peopleData.people.find(p => p.id === Number(idCharacter - 1))?.image

    return (
        <div className="text-center mt-3 container" style={{ background: "black" }}>
            <h1>{store.character.name}</h1>

            <div className="card mb-3 border-info p-2" style={{ background: "black" }}>
                <div className="d-flex justify-content-end">
                    <button
                        className={isFavorite ? "btn btn-danger" : "btn btn-outline-warning"}
                        onClick={() => favorites(dispatch, store.character.name, store)}
                    >
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={peopleImage} className="img-fluid rounded-3" alt={store.character.name} />
                    </div>
                    <div className="col-md-8" style={{ display: "flex", alignItems: "center", color: "white" }}>
                        <div className="card-body">
                            <h3 className="card-title mb-5">
                                Info about <u>{store.character.name}</u>
                            </h3>
                            <div className="container text-center">
                                <div className="row fs-4">
                                    <div className="col border-end border-info">

                                        Birth year
                                        <p><strong>{store.character.birth_year}</strong></p>
                                    </div>
                                    <div className="col border-end border-info">
                                        Eye color
                                        <p><strong>{store.character.eye_color}</strong></p>
                                    </div>
                                    <div className="col border-end border-info">
                                        Gender
                                        <p><strong>{store.character.gender}</strong></p>
                                    </div>
                                    <div className="col border-end border-info">
                                        Hair color
                                        <p><strong>{store.character.hair_color}</strong></p>
                                    </div>

                                </div>
                                <div className="row fs-4 mt-3">
                                    <div className="col border-end border-info">
                                        Height
                                        <p><strong>{store.character.height}</strong></p>
                                    </div>
                                    <div className="col border-end border-info">
                                        Mass
                                        <p><strong>{store.character.mass}</strong></p>
                                    </div>
                                    <div className="col border-end border-info">
                                        Skin Color
                                        <p><strong>{store.character.skin_color}</strong></p>
                                    </div>
                                    <div className="col border-end border-info">
                                        Homeworld
                                        <p><strong>{store?.planet?.name}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}