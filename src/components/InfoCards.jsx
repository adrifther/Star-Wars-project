import './InfoCards.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const InfoCards = ({ element }) => {
  return (
    <>
      {element.image && (
        <div className="info shadow rounded container-fluid rounded p-2">
          <img src={element.image} className="rounded" alt="..." />
          <div className="body">
            <p className="text fs-2">{element.name}</p>
            <p className="text fs-5">id: {element.uid}</p>
            <p className="text fs-5">Gender: {element.gender}</p>
            <p className="text fs-5">Eye Color: {element.eye_color}</p>
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
      )}
    </>
  );
};
