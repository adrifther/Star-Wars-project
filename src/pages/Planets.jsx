// src/pages/PlanetPage.jsx
import { useParams } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

export const Planets = () => {
  const { store } = useGlobalReducer();
  const { uid } = useParams();

  const planet = store.planetList.find((p) => p.uid === uid);

  if (!planet) {
    return <p className="m-3">Cargando planeta...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {planet.image && (
          <div className="col-md-4">
            <img src={planet.image} alt={planet.name} className="img-fluid rounded shadow" />
          </div>
        )}
        <div className="col-md-8">
          <h1>{planet.name}</h1>
          <p>{planet.description || 'Sin descripción disponible.'}</p>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Clima:</strong> {planet.climate}
            </li>
            <li className="list-group-item">
              <strong>Terreno:</strong> {planet.terrain}
            </li>
            <li className="list-group-item">
              <strong>Población:</strong> {planet.population}
            </li>
            <li className="list-group-item">
              <strong>Diámetro:</strong> {planet.diameter}
            </li>
            <li className="list-group-item">
              <strong>Periodo de rotación:</strong> {planet.rotation_period}
            </li>
            <li className="list-group-item">
              <strong>Periodo orbital:</strong> {planet.orbital_period}
            </li>
            <li className="list-group-item">
              <strong>Gravedad:</strong> {planet.gravity}
            </li>
            <li className="list-group-item">
              <strong>Agua superficial:</strong> {planet.surface_water}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
