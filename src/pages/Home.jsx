import { InfoCards } from "../components/InfoCards.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import "../components/InfoCards.css"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()



	return (
		<div className="text-start m-3">
			<h1>People</h1>
			<div className="overflow-x-auto d-flex flex-row gap-3 p-3">
				<div className="shadow rounded">
					<InfoCards />
					<div className="buton d-flex flex-row">
						<Link to="/people">
							<button className="btn btn-outline-primary">Learn More!</button>
						</Link>
						<button className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
					</div>
				</div>
			</div>
			<h1>Vehicles</h1>
			<div className="overflow-x-auto d-flex flex-row gap-3 p-3">
				<div className="shadow rounded">
					<InfoCards />
					<div className="buton d-flex flex-row">
						<Link to="/vehicles">
							<button className="btn btn-outline-primary">Learn More!</button>
						</Link>
						<button className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
					</div>
				</div>
			</div>
			<h1>Planets</h1>
			<div className="overflow-x-auto d-flex flex-row gap-3 p-3">
				<div className="shadow rounded">
					<InfoCards />
					<div className="buton d-flex flex-row">
						<Link to="/planets">
							<button className="btn btn-outline-primary">Learn More!</button>
						</Link>
						<button className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
					</div>
				</div>
			</div>
		</div>
	);
}; 