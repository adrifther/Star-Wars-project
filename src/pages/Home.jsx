import { InfoCards } from "../components/InfoCards.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../components/InfoCards.css"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();
	const [peopleList, setPeopleList] = useState([]);
	const [planetList, setPlanetList] = useState([]);
	const [vehicleList, setVehicleList] = useState([]);


	// Helper para saber si un ítem ya está en favoritos (por uid y categoría)
	const isFavorite = (uid, category) => {
		return (
			Array.isArray(store.favorites) &&
			store.favorites.some((fav) => fav.uid === uid && fav.category === category)
		);
	};

	const toggleFavorite = (item, category) => {
		if (isFavorite(item.uid, category)) {
			dispatch({
				type: "remove_favorite",
				payload: { uid: item.uid, category },
			});
		} else {
			dispatch({
				type: "add_favorite",
				payload: { uid: item.uid, name: item.name, category },
			});
		}
	};


	const getPeopleList = () => {
		fetch('https://www.swapi.tech/api/people?page=1&limit=60', {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				// console.log(resp.ok);
				// console.log(resp.status);
				return resp.json();
			})
			.then(data => {
				setPeopleList(data.results);
				// console.log(data.results);
			})
			.catch(error => {

				// console.log(error);
			})
	}


	const getPlanetList = () => {
		fetch('https://www.swapi.tech/api/planets?page=1&limit=60', {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				// console.log(resp.ok);
				// console.log(resp.status);
				return resp.json();
			})
			.then(data => {
				setPlanetList(data.results);
				// console.log(data.results);
			})
			.catch(error => {

				// console.log(error);
			})
	}


	const getVehicleList = () => {
		fetch('https://www.swapi.tech/api/vehicles?page=1&limit=60', {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				// console.log(resp.ok);
				// console.log(resp.status);
				return resp.json();
			})
			.then(data => {
				setVehicleList(data.results);
				// console.log(data.results);
			})
			.catch(error => {

				// console.log(error);
			})
	}


	useEffect(() => {
		getPeopleList();
		getPlanetList();
		getVehicleList();
	},
		[])


	return (
		<div className="text-start m-3">
			<h1>People</h1>
			<div className="overflow-x-auto d-flex flex-row gap-3 p-3">



				{peopleList.map((person, index) => {
					return (
							<div className="shadow rounded">
								<InfoCards name={person.name} />
								<div className="buton d-flex flex-row">
									<Link to={`/people/${person.uid}`} key={person.uid}>
										<button className="btn btn-outline-primary">Learn More!</button>
									</Link>
									<button
										className="btn btn-outline-warning"
										onClick={()=>toggleFavorite(person, 'people')}
									>
										{isFavorite(person.uid, 'people') ? (
											<i className="fa-solid fa-heart"></i>
										) : (
											<i className="fa-regular fa-heart"></i>
										)
										}
									</button>
								</div>
							</div>
					)
				})
				}





			</div>
			<h1>Vehicles</h1>
			<div className="overflow-x-auto d-flex flex-row gap-3 p-3">
				{vehicleList.map((vehicle, index) => {
					return (
							<div className="shadow rounded">
								<InfoCards name={vehicle.name} key={vehicle.uid}/>
								<div className="buton d-flex flex-row">
									<Link to={`/vehicles/${vehicle.uid}`}>
										<button className="btn btn-outline-primary">Learn More!</button>
									</Link>
									<button 
									onClick={()=>toggleFavorite(person.uid, 'vehicle')}
									className="btn btn-outline-warning">
										{isFavorite(vehicle.uid,'vehicles') ? 
										(<i className="fa-solid fa-heart"></i>)
										:
										(<i className="fa-regular fa-heart"></i>)
									}
									</button>
								</div>
							</div>
					)
				})
				}
			</div>
			<h1>Planets</h1>
			<div className="overflow-x-auto d-flex flex-row gap-3 p-3">
				{planetList.map((planet, index) => {
					return (
							<div className="shadow rounded">
								<InfoCards name={planet.name} key={planet.uid}/>
								<div className="buton d-flex flex-row">
									<Link to={`/planets/${planet.uid}`}>
										<button className="btn btn-outline-primary">Learn More!</button>
									</Link>
									<button 
										onClick={()=>toggleFavorite(planet.uid, 'planet')}
										className="btn btn-outline-warning">
										{isFavorite(planet.uid,'planets') ? 
											(<i className="fa-solid fa-heart"></i>)
											:
											(<i className="fa-regular fa-heart"></i>)
										}
									</button>
								</div>
							</div>
					)
				})
				}
			</div>
		</div>
	);
}; 