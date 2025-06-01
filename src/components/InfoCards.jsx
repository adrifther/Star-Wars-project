import './InfoCards.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const InfoCards = ({ person }) => {
  const [peopleData, setPeopleData] = useState([]);
  const [peopleInfo, setPeopleInfo] = useState([]);
  const [peopleDesc, setPeopleDesc] = useState([]);

  const getPeopleData = () => {
    fetch(`https://swapi.tech/api/people/${person.uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setPeopleData(data.result.properties);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPeopleInfo = () => {
    fetch(`https://starwars-databank-server.vercel.app/api/v1/characters/name/${person.name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setPeopleInfo(data[0].image);
        setPeopleDesc(data[0].description);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPeopleData();
    getPeopleInfo();
  }, [peopleData, peopleInfo, peopleDesc]);

  console.log('people info', peopleInfo);
  return (
    <>
      {peopleInfo.length > 0 && (
        <div className="info shadow rounded container-fluid rounded p-2">
          <img src={peopleInfo} className="rounded" alt="..." />
          <div className="body">
            <p className="text fs-2">{person.name}</p>
            <p className="text fs-5">id: {person.uid}</p>
            <p className="text fs-5">Info 2</p>
            <p className="text fs-5">Info 3</p>
          </div>
          <div className="buton d-flex flex-row">
            <Link to={`/people/${person.uid}`}>
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
      )}
    </>
  );
};
