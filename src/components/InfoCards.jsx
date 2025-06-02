import './InfoCards.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const InfoCards = ({ element }) => {
  // const [peopleData, setPeopleData] = useState([]);
  // const [peopleInfo, setPeopleInfo] = useState([]);
  // const [peopleDesc, setPeopleDesc] = useState([]);

  // const getPeopleData = () => {
  //   fetch(`https://swapi.tech/api/people/${element.uid}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((resp) => {
  //       return resp.json();
  //     })
  //     .then((data) => {
  //       setPeopleData(data.result.properties);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const getPeopleInfo = () => {
  //   fetch(`https://starwars-databank-server.vercel.app/api/v1/characters/name/${element.name}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((resp) => {
  //       return resp.json();
  //     })
  //     .then((data) => {
  //       setPeopleInfo(data[0].image);
  //       setPeopleDesc(data[0].description);
  //       // console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getPeopleData();
  //   getPeopleInfo();
  // }, []);

  // console.log('peopleData', peopleData);
  return (
    <>
      <div className="info shadow rounded container-fluid rounded p-2">
        {/* <img src={peopleInfo} className="rounded" alt="..." /> */}
        <div className="body">
          <p className="text fs-2">{element.name}</p>
          {/* <p className="text fs-5">id: {element.uid}</p>
            <p className="text fs-5">Gender: {peopleData.gender}</p>
            <p className="text fs-5">Eye Color: {peopleData.eye_color}</p> */}
        </div>
        <div className="buton d-flex flex-row">
          <Link to={`/people/${element.uid}`}>
            <button className="btn btn-outline-primary">Learn More!</button>
          </Link>
          <button
            className="btn btn-outline-warning"
            // onClick={() => toggleFavorite(person, 'people')}
          >
            {/* {isFavorite(person.uid, 'people') ? ( */}
            <i className="fa-solid fa-heart"></i>
            {/* ) : ( */}
            {/* <i className="fa-regular fa-heart"></i> */}
            {/* )} */}
          </button>
        </div>
      </div>
    </>
  );
};
