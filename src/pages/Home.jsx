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

      // 1. Agregar imágenes y descripciones a personajes
      const fetchCaracterImg = await Promise.all(
        character.map(async (character) => {
          try {
            const characterData = await ApiService.getPeopleDetailsByName(character.name);
            return {
              ...character,
              image: characterData?.image || '',
              description: characterData?.description || '',
            };
          } catch (error) {
            console.warn(`No se encontró info adicional para: ${character.name}`);
            return character;
          }
        })
      );

      dispatch({ type: 'update_character_list', payload: fetchCaracterImg });

      // 2. Agregar detalles por UID a personajes
      const fetchCharacterDetails = await Promise.all(
        character.map(async (character) => {
          try {
            const characterData = await ApiService.getPeopleDetailsById(character.uid);
            return {
              ...character,
              gender: characterData.gender,
              eye_color: characterData.eye_color,
              skin_color: character.skin_color,
              hair_color: characterData.hair_color,
              height: characterData.height,
              mass: characterData.mass,
              homeworld: characterData.homeworld,
            };
          } catch (error) {
            return character;
          }
        })
      );

      dispatch({ type: 'update_character_list', payload: fetchCharacterDetails });

      // 3. Agregar imágenes y descripciones a planetas
      const fetchPlanetImg = await Promise.all(
        planets.map(async (planet) => {
          try {
            const planetData = await ApiService.getPlanetsDetailsByName(planet.name);
            return {
              ...planet,
              image: planetData?.image || '',
              description: planetData?.description || '',
            };
          } catch (error) {
            return planet;
          }
        })
      );

      dispatch({ type: 'update_planet_list', payload: fetchPlanetImg });

      // 4. Agregar detalles por UID a planetas
      const fetchPlanetDetails = await Promise.all(
        planets.map(async (planet) => {
          try {
            const planetData = await ApiService.getPlanetById(planet.uid);
            return {
              ...planet,
              climate: planetData.climate,
              terrain: planetData.terrain,
              population: planet.population,
              diameter: planetData.diameter,
              rotation_period: planetData.rotation_period,
              orbital_period: planetData.orbital_period,
              gravity: planetData.gravity,
              surface_water: planetData.surface_water,
            };
          } catch (error) {
            console.warn(`No se encontró info adicional para: ${planet.name}`);
            return planet;
          }
        })
      );

      dispatch({ type: 'update_planet_list', payload: fetchPlanetDetails });

    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  };

  fetchAll();
  console.log('Character fetched', store.characterList);
  console.log('Planet fetched', store.planetList);
  console.log('Vehicle fetched', store.vehicleList);
}, []);

  // useEffect(() => {
  //   const fetchCharacter = async () => {
  //     for (const character of store.characterList) {
  //       try {
  //         const characterData = await ApiService.getPeopleDetailsByName(character.name);
  //         dispatch({
  //           type: 'update_character_list_item',
  //           payload: {
  //             name: character.name,
  //             image: characterData.image,
  //             description: characterData.description,
  //           },
  //         });
  //       } catch (error) {
  //         console.error(`Error fetching character details for ${character.name}:`, error);
  //       }
  //     }
  //   };

  //   fetchCharacter();
  //   console.log('Character fetched', store.characterList);
  // }, [store.characterList]);

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
      <h1>Vehicles</h1>
      <div className="overflow-x-auto d-flex flex-row gap-3 p-3">
        {store.vehicleList.map((vehicle, index) => {
          return (
            <div
              className="info shadow rounded d-flex flex-column justify-content-between"
              key={vehicle.uid}
            >
              {/* <InfoCards name={vehicle.name} /> */}
              <div className="buton d-flex flex-row">
                <Link to={`/vehicles/${vehicle.uid}`}>
                  <button className="btn btn-outline-primary">Learn More!</button>
                </Link>
                <button
                  onClick={() => toggleFavorite(person.uid, 'vehicle')}
                  className="btn btn-outline-warning"
                >
                  {isFavorite(vehicle.uid, 'vehicles') ? (
                    <i className="fa-solid fa-heart"></i>
                  ) : (
                    <i className="fa-regular fa-heart"></i>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h1>Planets</h1>
      <div className="overflow-x-auto d-flex flex-row gap-3 p-3">
        {store.planetList.map((planet, index) => {
          return (
            <div
              className="info shadow rounded d-flex flex-column justify-content-between"
              key={planet.uid}
            >
              {/* <InfoCards name={planet.name} /> */}
              <div className="buton d-flex flex-row">
                <Link to={`/planets/${planet.uid}`}>
                  <button className="btn btn-outline-primary">Learn More!</button>
                </Link>
                <button
                  onClick={() => toggleFavorite(planet.uid, 'planet')}
                  className="btn btn-outline-warning"
                >
                  {isFavorite(planet.uid, 'planets') ? (
                    <i className="fa-solid fa-heart"></i>
                  ) : (
                    <i className="fa-regular fa-heart"></i>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
