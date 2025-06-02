import '../css/learn-more.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const People = () => {
  const { theId } = useParams();

  const getPeopleData = () => {
    fetch(`https://swapi.tech/api/people/${theId}`, {
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
    fetch(`https://starwars-databank-server.vercel.app/api/v1/characters/name/${peopleData.name}`, {
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPeopleData();
    getPeopleInfo();
  }, [peopleData, peopleInfo, peopleDesc]);

  return (
    <>
      <div className="container">
        <div className="heading d-flex flex-row p-2">
          <img src={`${peopleInfo}`} alt="" className="rounded" />
          <div className="description text-center p-4">
            <h1>{peopleData.name}</h1>
            <p>{peopleDesc}</p>
          </div>
        </div>
        <div className="info d-flex flex-row p-2 text-center text-danger">
          <div className="infosmall d-flex flex-column">
            <div className="mb-3">Gender</div>
            <div>{peopleData.gender}</div>
          </div>
          <div>
            <div className="mb-3">Skin Color</div>
            <div>{peopleData.skin_color}</div>
          </div>
          <div>
            <div className="mb-3">Hair Color</div>
            <div>{peopleData.hair_color}</div>
          </div>
          <div>
            <div className="mb-3">Height</div>
            <div>{peopleData.height}</div>
          </div>
          <div>
            <div className="mb-3">Eye Color</div>
            <div>{peopleData.eye_color}</div>
          </div>
          <div>
            <div className="mb-3">Mass</div>
            <div>{peopleData.mass}</div>
          </div>
        </div>
      </div>
    </>
  );
};
