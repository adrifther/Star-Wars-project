import { Link } from "react-router-dom";
import "./InfoCards.css"

export const InfoCards = () => {

return (
<>
<div className="container-fluid rounded p-2 shadow" >
  <img src="https://cdn.unotv.com/images/2025/02/perrito-reza-y-luego-come-jpg-134917-1024x576.jpg" className="rounded" alt="..."/>
  <div className="body">
    <p className="text fs-2">Name</p>
    <p className="text fs-5">Info 1</p>
    <p className="text fs-5">Info 2</p>
    <p className="text fs-5">Info 3</p>
    <div className="buton d-flex flex-row">
<Link to="/Demo">
    <button className="btn btn-outline-primary">Learn More!</button>
</Link>
<button className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
    </div>
  </div>
</div>
</>
)
};
