import axios from 'axios';

const BASE_URL = 'https://www.swapi.tech/api'
const URL_IMG = 'https://starwars-databank-server.vercel.app/api/v1/characters/name/';

const swapiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const imgService = axios.create({
  baseURL: URL_IMG,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllPeople = async () => {
    try{
        const response = await swapiService.get('/people?page=1&limit=60');
        return response.data.results;
    }
    catch(error) {
        console.error("Error fetching people data:", error);
        throw error;
    }
}
export const getAllPlanets = async () => {
    try{
        const response = await swapiService.get('/planets?page=1&limit=60');
        return response.data.results;
    }
    catch(error) {
        console.error("Error fetching planets data:", error);
        throw error;
    }
}

export const getAllVehicles = async () => {
    try{
        const response = await swapiService.get('/vehicles?page=1&limit=60');
        return response.data.results;
    }
    catch(error) {
        console.error("Error fetching vehicles data:", error);
        throw error;
    }
}   
// export const getAllPlanets = swapiService.get('/planets?page=1&limit=60');
// export const getAllVehicles = swapiService.get('/vehicles?page=1&limit=60');

export const getPersonById = (id) => swapiService.get(`/people/${id}`);
