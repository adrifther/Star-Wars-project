import { InfoCards } from "../components/InfoCards.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()



	return (
		<div className="text-start m-3">
			<h1>People</h1>
			<div className="overflow-x-auto d-flex flex-row gap-3 p-3">
				<ul>
					<li>
						<InfoCards />
					</li>
				</ul>
			</div>
<h1>Vehicles</h1>
			<div className="overflow-x-auto d-flex flex-row gap-3 p-3">
				<InfoCards />
			</div>
<h1>Planets</h1>
			<div className="overflow-x-auto d-flex flex-row gap-3 p-3">
				<InfoCards />
			</div>
		</div>
	);
}; 