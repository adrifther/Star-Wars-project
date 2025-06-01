import { InfoCards } from '../components/InfoCards.jsx';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../components/InfoCards.css';
import { getAllPeople, getAllPlanets, getAllVehicles } from '../services/ApiService.js';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [peopleList, setPeopleList] = useState([]);
  const [planetList, setPlanetList] = useState([]);
  const [vehicleList, setVehicleList] = useState([]);

  const isFavorite = (uid, category) => {
    return (
      Array.isArray(store.favorites) &&
      store.favorites.some((fav) => fav.uid === uid && fav.category === category)
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

  //   const getPeopleList = () => {
  //     fetch('https://www.swapi.tech/api/people?page=1&limit=60', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then((resp) => {
  //         return resp.json();
  //       })
  //       .then((data) => {
  //         setPeopleList(data.results);
  //       })
  //       .catch((error) => {});
  //   };

  //   const getPlanetList = () => {
  //     fetch('https://www.swapi.tech/api/planets?page=1&limit=60', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then((resp) => {
  //         return resp.json();
  //       })
  //       .then((data) => {
  //         setPlanetList(data.results);
  //       })
  //       .catch((error) => {});
  //   };

  //   const getVehicleList = () => {
  //     fetch('https://www.swapi.tech/api/vehicles?page=1&limit=60', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then((resp) => {
  //         return resp.json();
  //       })
  //       .then((data) => {
  //         setVehicleList(data.results);
  //       })
  //       .catch((error) => {});
  //   };

  useEffect(() => {
    const fetchPeopleList = async () => {
      try {
        const people = await getAllPeople();
        setPeopleList(people);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPeopleList();
  }, []);

  useEffect(() => {
    const fetchPlanetList = async () => {
      try {
        const planet = await getAllPlanets();
        setPlanetList(planet);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchVehicleList = async () => {
      try {
        const vehicles = await getAllVehicles();
        setVehicleList(vehicles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVehicleList();
    fetchPlanetList();
  }, []);

  console.log('planetList', planetList);
  console.log('vehicleList', vehicleList);

  return (
    <div className="text-start m-3">
      <h1>People</h1>
      <div className="overflow-x-auto d-flex flex-row gap-3 p-3">
        {peopleList.map((person, index) => {
          return (
            // <div
            //   className="info shadow rounded d-flex flex-column justify-content-between"
            //   key={person.uid}
            // >
            <InfoCards person={person} />
            //   <div className="buton d-flex flex-row">
            //     <Link to={`/people/${person.uid}`}>
            //       <button className="btn btn-outline-primary">Learn More!</button>
            //     </Link>
            //     <button
            //       className="btn btn-outline-warning"
            //       onClick={() => toggleFavorite(person, 'people')}
            //     >
            //       {isFavorite(person.uid, 'people') ? (
            //         <i className="fa-solid fa-heart"></i>
            //       ) : (
            //         <i className="fa-regular fa-heart"></i>
            //       )}
            //     </button>
            //   </div>
            // </div>
          );
        })}
      </div>
      <h1>Vehicles</h1>
      <div className="overflow-x-auto d-flex flex-row gap-3 p-3">
        {vehicleList.map((vehicle, index) => {
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
        {planetList.map((planet, index) => {
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
