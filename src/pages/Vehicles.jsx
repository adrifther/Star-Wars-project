import "../css/learn-more.css"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const Vehicles = () => {

  const { theId } = useParams();
  const [vehicleData, setVehicleData] = useState([]);
  const [descriptionData, setDescriptionData] = useState([]);
  
	const getVehicleData = () => {
		fetch(`https://swapi.tech/api/vehicles/${theId}`,{
			 method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        return resp.json(); 
    })
    .then(data => {
        setVehicleData(data.result.properties);
        setDescriptionData(data.result.description)
    })
    .catch(error => {
       
        console.log(error);
		})
	}

  	useEffect(() => {
  getVehicleData();
},
 [])

return (

<>
<div className="container">
<div className="heading d-flex flex-row p-2">
  <img src="https://cdn.unotv.com/images/2025/02/perrito-reza-y-luego-come-jpg-134917-1024x576.jpg" alt="" className="rounded"/>
  <div className="description text-center">
    <h1>{vehicleData.name}</h1>
    <p>{descriptionData}</p>
  </div>
</div>
<div className="info d-flex flex-row p-2 text-center text-danger">
  <div className="infosmall d-flex flex-column">
    <div className="mb-3">model</div>
    <div>{vehicleData.model}</div>
  </div>
  <div>
    <div className="mb-3">passengers</div>
    <div>{vehicleData.passengers}</div>
  </div>
  <div>
    <div className="mb-3">manufacturer</div>
    <div>{vehicleData.manufacturer}</div>
  </div>
  <div>
    <div className="mb-3">cargo capacity</div>
    <div>{vehicleData.cargo_capacity}</div>
  </div>
  <div>
    <div className="mb-3">consumables</div>
    <div>{vehicleData.consumables}</div>
  </div>
  <div>
    <div className="mb-3">vehicle class</div>
    <div>{vehicleData.vehicle_class}</div>
  </div>
</div>
</div>
</>
)
}
