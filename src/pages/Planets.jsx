import "../css/learn-more.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Planets = () => {

  const { theId } = useParams();  // ← aquí obtienes el parámetro de la URL
  const [planetData, setPlanetData] = useState([]);

  

	const getPlanetData = () => {
		fetch(`https://swapi.tech/api/planets/${theId}`,{
			 method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); 
        console.log(resp.status); 
        return resp.json(); 
    })
    .then(data => {
         setPlanetData(data);
        console.log(data); 
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
    <p>Lorem Ipsum</p>
  </div>
</div>
<div className="info d-flex flex-row p-2 text-center text-danger">
  <div className="infosmall d-flex flex-column">
    <div className="mb-3">info1</div>
    <div>desc1</div>
  </div>
  <div>
    <div className="mb-3">info2</div>
    <div>desc2</div>
  </div>
  <div>
    <div className="mb-3">info3</div>
    <div>desc3</div>
  </div>
  <div>
    <div className="mb-3">info4</div>
    <div>desc4</div>
  </div>
  <div>
    <div className="mb-3">info5</div>
    <div>desc5</div>
  </div>
  <div>
    <div className="mb-3">info6</div>
    <div>desc6</div>
  </div>
</div>
</div>
</>
)
}
