import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { fetchInfoPlanet, favorites } from "../store"
import planetsData from "../assets/json/planets.json"

export const SinglePlanet = () => {
    const { store, dispatch } = useGlobalReducer()
    const { idPlanet } = useParams()

    useEffect(() => {
        fetchInfoPlanet(dispatch, idPlanet)
    }, [])

    const isFavorite = store.favoritos?.includes(store.planet.name) || false
    const planetImage = planetsData.planets.find(p => p.id === Number(idPlanet - 1))?.image

    return (
        <div className="text-center mt-3 container" style={{ background: "black" }}>
            <h1>{store.planet.name}</h1>

            <div className="card mb-3 border-info p-2" style={{ background: "black" }}>
            <div className="d-flex justify-content-end">
                <button
                    className={isFavorite ? "btn btn-danger" : "btn btn-outline-warning"}
                    onClick={() => favorites(dispatch, store.planet.name, store)}
                >
                    <i className="fa fa-heart"></i>
                </button>
            </div>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={planetImage} className="img-fluid rounded-start" alt={store.planet.name} />
                    </div>
                    <div className="col-md-8" style={{ display: "flex", alignItems: "center", color: "white" }}>
                        <div className="card-body">
                            <h3 className="card-title mb-5">
                                Info about <u>{store.planet.name}</u>
                            </h3>
                            <div className="container text-center">
                                <div className="row fs-4">
                                    <div className="col border-end border-info">
                                        Climate
                                        <p><strong>{store.planet.climate}</strong></p>
                                    </div>
                                    <div className="col border-end border-info">
                                        Diameter
                                        <p><strong>{store.planet.diameter}</strong></p>
                                    </div>
                                    <div className="col border-end border-info">
                                        Gravity
                                        <p><strong>{store.planet.gravity}</strong></p>
                                    </div>
                                    <div className="col border-end border-info">
                                        Orbital period
                                        <p><strong>{store.planet.orbital_period}</strong></p>
                                    </div>

                                </div>
                                <div className="row fs-4 mt-3">
                                    <div className="col border-end border-info">
                                        Rotation period
                                        <p><strong>{store.planet.rotation_period}</strong></p>
                                    </div>
                                    <div className="col border-end border-info">
                                        Population
                                        <p><strong>{store.planet.population}</strong></p>
                                    </div>
                                    <div className="col border-end border-info">
                                        Surface water
                                        <p><strong>{store.planet.surface_water}</strong></p>
                                    </div>
                                    <div className="col border-end border-info">
                                        Terrain
                                        <p><strong>{store.planet.terrain}</strong></p>
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