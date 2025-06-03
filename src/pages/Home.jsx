import { InfoCards } from '../components/InfoCards.jsx';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../components/InfoCards.css';
import ApiService from '../services/ApiService.js';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [character, planets, vehicles] = await Promise.all([
          ApiService.getAllPeople(),
          ApiService.getAllPlanets(),
          ApiService.getAllVehicles(),
        ]);

        dispatch({ type: 'update_character_list', payload: character });
        dispatch({ type: 'update_planet_list', payload: planets });
        dispatch({ type: 'update_vehicle_list', payload: vehicles });

        const completeCharacter = await Promise.all(
          character.map(async (char) => {
            let characterDetailsByName = {};
            let characterDetailsById = {};

            try {
              const nameData = await ApiService.getPeopleDetailsByName(char.name);
              if (nameData && typeof nameData === 'object') {
                characterDetailsByName = nameData;
              }
            } catch (e) {
              console.warn(`No image/desc for ${char.name}`);
            }

            try {
              characterDetailsById = await ApiService.getPeopleDetailsById(char.uid);
            } catch (e) {
              console.warn(`No extra info for ${char.name}`);
            }

            return {
              ...char,
              image: characterDetailsByName.image,
              description: characterDetailsByName.description || '',
              gender: characterDetailsById.gender || '',
              eye_color: characterDetailsById.eye_color || '',
              skin_color: characterDetailsById.skin_color || '',
              hair_color: characterDetailsById.hair_color || '',
              height: characterDetailsById.height || '',
              mass: characterDetailsById.mass || '',
              homeworld: characterDetailsById.homeworld || '',
            };
          })
        );

        const completePlanet = await Promise.all(
          planets.map(async (char) => {
            let planetDetailsByName = {};
            let planetDetailsById = {};

            try {
              const nameData = await ApiService.getPlanetsDetailsByName(char.name);
              if (nameData && typeof nameData === 'object') {
                planetDetailsByName = nameData;
              }
            } catch (e) {
              console.warn(`No image/desc for ${char.name}`);
            }

            try {
              planetDetailsById = await ApiService.getPlanetById(char.uid);
            } catch (e) {
              console.warn(`No extra info for ${char.name}`);
            }

            return {
              ...char,
              image: planetDetailsByName.image,
              description: planetDetailsByName.description || '',
              climate: planetDetailsById.climate,
              terrain: planetDetailsById.terrain,
              population: planetDetailsById.population,
              diameter: planetDetailsById.diameter,
              rotation_period: planetDetailsById.rotation_period,
              orbital_period: planetDetailsById.orbital_period,
              gravity: planetDetailsById.gravity,
              surface_water: planetDetailsById.surface_water,
            };
          })
        );

        const completeVehicle = await Promise.all(
          vehicles.map(async (car) => {
            let vehicleDetailsByName = {};
            let vehicleDetailsById = {};

            try {
              const nameData = await ApiService.getVehiclesDetailsByName(car.name);
              if (nameData && typeof nameData === 'object') {
                vehicleDetailsByName = nameData;
              }
            } catch (e) {
              console.warn(`No image/desc for ${car.name}`);
            }

            try {
              planetDetailsById = await ApiService.getVehicleById(car.uid);
            } catch (e) {
              console.warn(`No extra info for ${car.name}`);
            }

            return {
              ...car,
              image: vehicleDetailsByName.image,
              description: vehicleDetailsByName.description || '',
              model: vehicleDetailsById.model,
              manufacturer: vehicleDetailsById.manufacturer,
              cost_in_credits: vehicleDetailsById.cost_in_credits,
              max_atmosphering_speed: vehicleDetailsById.max_atmosphering_speed,
              crew: vehicleDetailsById.crew,
              passengers: vehicleDetailsById.passengers,
              cargo_capacity: vehicleDetailsById.cargo_capacity,
              consumables: vehicleDetailsById.consumables,
            };
          })
        );
        dispatch({ type: 'update_character_list', payload: completeCharacter });
        dispatch({ type: 'update_planet_list', payload: completePlanet });
        dispatch({ type: 'update_vehicle_list', payload: completeVehicle });
      } catch (error) {
        console.error('Error fetching lists:', error);
      }
    };

    fetchAll();
    console.log('character fetched', store.characterList);
    console.log('planet fetched', store.planetList);
    console.log('vehicle fetched', store.vehicleList);
  }, []);

  const isFavorite = (uid, category) => {
    return (
      Array.isArray(store.favoriteList) &&
      store.favoriteList.some((fav) => fav.uid === uid && fav.category === category)
    );
  };

  const toggleFavorite = (item, category) => {
    if (isFavorite(item.uid, category)) {
      dispatch({
        type: 'remove_favorite',
        payload: { uid: item.uid, category },
      });
    } else {
      dispatch({
        type: 'add_favorite',
        payload: { uid: item.uid, name: item.name, category },
      });
    }
  };

  return (
    <div className="text-start m-3">
      <h1>People</h1>
      <div className="overflow-x-auto d-flex flex-row gap-3 p-3">
        {store.characterList.map((person, index) => {
          return <InfoCards key={person.uid} element={person} />;
        })}
      </div>

      <h1>Planets</h1>
      <div className="overflow-x-auto d-flex flex-row gap-3 p-3">
        {store.planetList.map((planet, index) => {
          return <InfoCards key={planet.uid} element={planet} />;
        })}
      </div>
      <h1>Vehicles</h1>
      <div className="overflow-x-auto d-flex flex-row gap-3 p-3">
        {store.vehicleList.map((vehicle, index) => {
          return <InfoCards key={vehicle.uid} element={vehicle} />;
        })}
      </div>
    </div>
  );
};
