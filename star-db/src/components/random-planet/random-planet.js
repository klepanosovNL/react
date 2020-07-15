import React, {Component} from "react";
import "./random-planet.css"
import SwapiService from "../../sevices/swapi-services";

export default class RandomPlanet extends Component {
    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    }

    swapiService = new SwapiService()

    constructor() {
        super();
        this.updatedPlanet()
    }
    updatedPlanet() {
        const id = Math.floor(Math.random()* 25) + 2
        this.swapiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter,
                })
            })
    }

    render() {
        const {population, rotationPeriod, diameter, name, id} = this.state

        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}