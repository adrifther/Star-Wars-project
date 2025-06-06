import axios from 'axios';

const BASE_URL = 'https://www.swapi.tech/api'
const PEOPLE_URL = 'https://starwars-databank-server.vercel.app/api/v1/characters/name/';
const PLANETS_URL = 'https://starwars-databank-server.vercel.app/api/v1/locations/name/';
const VEHICLES_URL = 'https://starwars-databank-server.vercel.app/api/v1/vehicles/name/';


const swapiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const peopleService = axios.create({
  baseURL: PEOPLE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const planetsService = axios.create({
  baseURL: PLANETS_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const vehiclesService = axios.create({
  baseURL: VEHICLES_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const getAllPeople = async () => {
    try{
        const response = await swapiService.get('/people?page=1&limit=10');
        return response.data.results;
    }
    catch(error) {
        console.error("Error fetching people data:", error);
        throw error;
    }
}

export const getAllPlanets = async () => {
    try{
        const response = await swapiService.get('/planets?page=1&limit=10');
        return response.data.results;
    }
    catch(error) {
        console.error("Error fetching planets data:", error);
        throw error;
    }
}

export const getAllVehicles = async () => {
    try{
        const response = await swapiService.get('/vehicles?page=1&limit=10');
        return response.data.results;
    }
    catch(error) {
        console.error("Error fetching vehicles data:", error);
        throw error;
    }
}

export const getPeopleDetailsById = async (id) => {
    try {
        const response = await swapiService.get(`/people/${id}`);
        return response.data.result.properties;
    }
    catch (error) {
        console.error(`Error fetching person with ID ${id}:`, error);
        throw error;
    }
}

export const getPlanetById = async (id) => {
    try {
        const response = await swapiService.get(`/planets/${id}`);
        return response.data.result;
    }
    catch (error) {
        console.error(`Error fetching planet with ID ${id}:`, error);
        throw error;
    }
}


export const getVehicleById = async (id) => {
    try {
        const response = await swapiService.get(`/vehicles/${id}`);
        return response.data.result.properties;
    }
    catch (error) {
        console.error(`Error fetching planet with ID ${id}:`, error);
        throw error;
    }
}

export const getPeopleDetailsByName = async (name) => {
    try {
        const response = await peopleService.get(name);
        return response.data[0];
    }
    catch (error) {
        console.error(`Error fetching details for ${name}:`, error);
        throw error;
    }
}

export const getPlanetsDetailsByName = async (name) => {
    try {
        const response = await planetsService.get(name);
        return response.data[0];
    }
    catch (error) {
        console.error(`Error fetching details for ${name}:`, error);
        throw error;
    }
}

export const getVehiclesDetailsByName = async (name) => {
    try {
        const response = await vehiclesService.get(name);
        return response.data[0];
    }
    catch (error) {
        console.error(`Error fetching details for ${name}:`, error);
        throw error;
    }
}

export default {
    getAllPeople,
    getAllPlanets,
    getAllVehicles,
    getPeopleDetailsById,
    getPlanetById,
    getVehicleById,
    getPeopleDetailsByName,
    getPlanetsDetailsByName,
    getVehiclesDetailsByName
};