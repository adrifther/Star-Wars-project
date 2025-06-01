import "../css/learn-more.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Planets = () => {

const { theId } = useParams();
const [planetData, setPlanetData] = useState([]);
const [descriptionData, setDescriptionData] = useState([]);

  const getPlanetData = () => {
    fetch(`https://swapi.tech/api/planets/${theId}`,{
       method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        return resp.json(); 
    })
    .then(data => {
        setPlanetData(data.result.properties);
        setDescriptionData(data.result.description)
    })
    .catch(error => {
       
        console.log(error);
    })
  }

    useEffect(() => {
  getPlanetData();
},
 [])

return (

<>
<div className="container">
<div className="heading d-flex flex-row p-2">
  <img src="https://cdn.unotv.com/images/2025/02/perrito-reza-y-luego-come-jpg-134917-1024x576.jpg" alt="" className="rounded"/>
  <div className="description text-center">
    <h1>{planetData.name}</h1>
    <p>{descriptionData}</p>
  </div>
</div>
<div className="info d-flex flex-row p-2 text-center text-danger">
  <div className="infosmall d-flex flex-column">
    <div className="mb-3">Climate</div>
    <div>{planetData.climate}</div>
  </div>
  <div>
    <div className="mb-3">Diameter</div>
    <div>{planetData.diameter}</div>
  </div>
  <div>
    <div className="mb-3">Terrain</div>
    <div>{planetData.terrain}</div>
  </div>
  <div>
    <div className="mb-3">Gravity</div>
    <div>{planetData.gravity}</div>
  </div>
  <div>
    <div className="mb-3">Orbital Period</div>
    <div>{planetData.orbital_period}</div>
  </div>
  <div>
    <div className="mb-3">Population</div>
    <div>{planetData.population}</div>
  </div>
</div>
</div>
</>
)
}
