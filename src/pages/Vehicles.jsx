// src/pages/VehiclePage.jsx
import { useParams } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

export const Vehicles = () => {
  const { store } = useGlobalReducer();
  const { uid } = useParams();

  const vehicle = store.vehicleList.find((v) => v.uid === uid);

  if (!vehicle) {
    return <p className="m-3">Cargando vehículo...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {vehicle.image && (
          <div className="col-md-4">
            <img src={vehicle.image} alt={vehicle.name} className="img-fluid rounded shadow" />
          </div>
        )}
        <div className="col-md-8">
          <h1>{vehicle.name}</h1>
          <p>{vehicle.description || 'Sin descripción disponible.'}</p>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Modelo:</strong> {vehicle.model}
            </li>
            <li className="list-group-item">
              <strong>Fabricante:</strong> {vehicle.manufacturer}
            </li>
            <li className="list-group-item">
              <strong>Coste en créditos:</strong> {vehicle.cost_in_credits}
            </li>
            <li className="list-group-item">
              <strong>Velocidad máxima:</strong> {vehicle.max_atmosphering_speed}
            </li>
            <li className="list-group-item">
              <strong>Tripulación:</strong> {vehicle.crew}
            </li>
            <li className="list-group-item">
              <strong>Pasajeros:</strong> {vehicle.passengers}
            </li>
            <li className="list-group-item">
              <strong>Capacidad de carga:</strong> {vehicle.cargo_capacity}
            </li>
            <li className="list-group-item">
              <strong>Consumibles:</strong> {vehicle.consumables}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
