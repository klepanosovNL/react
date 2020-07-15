export default class SwapiService {
    _apiBase = 'https://swapi.dev/api'

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            // eslint-disable-next-line no-useless-concat
            throw new Error(`Could not fetch ${url}` + ` received ${res.status}`)
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`)
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}`)
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`)
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet)
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformPlanet);
    }

    getStarship(id) {
        const starship = this.getResource(`/starships/${id}`)
        return this._transformPlanet(starship)
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1]
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}

const swapi = new SwapiService();
swapi.getPerson(3).then((person) => {

    console.log(person.name);
})