// src/pages/PeoplePage.jsx
import { useParams } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

export const People = () => {
  const { store } = useGlobalReducer();
  const { uid } = useParams();

  const character = store.characterList.find((c) => c.uid === uid);

  if (!character) {
    return <p className="m-3">Cargando personaje...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {character.image && (
          <div className="col-md-4">
            <img src={character.image} alt={character.name} className="img-fluid rounded shadow" />
          </div>
        )}
        <div className="col-md-8">
          <h1>{character.name}</h1>
          <p>{character.description || 'Sin descripción disponible.'}</p>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Género:</strong> {character.gender}
            </li>
            <li className="list-group-item">
              <strong>Color de ojos:</strong> {character.eye_color}
            </li>
            <li className="list-group-item">
              <strong>Color de piel:</strong> {character.skin_color}
            </li>
            <li className="list-group-item">
              <strong>Color de cabello:</strong> {character.hair_color}
            </li>
            <li className="list-group-item">
              <strong>Altura:</strong> {character.height}
            </li>
            <li className="list-group-item">
              <strong>Masa:</strong> {character.mass}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
