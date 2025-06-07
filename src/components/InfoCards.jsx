import './InfoCards.css';

export const InfoCards = ({ element, children }) => {
  const getInfoLines = () => {
    
    if ('gender' in element) {
      
      return (
        <>
          <p className="text fs-5">Gender: {element.gender}</p>
          <p className="text fs-5">Eye Color: {element.eye_color}</p>
          <p className="text fs-5">Hair Color: {element.hair_color}</p>
        </>
      );
    } else if ('climate' in element) {
      
      return (
        <>
          <p className="text fs-5">Climate: {element.climate}</p>
          <p className="text fs-5">Population: {element.population}</p>
          <p className="text fs-5">Terrain: {element.terrain}</p>
        </>
      );
    } else if ('model' in element) {
      
      return (
        <>
          <p className="text fs-5">Model: {element.model}</p>
          <p className="text fs-5">Manufacturer: {element.manufacturer}</p>
          <p className="text fs-5">Crew: {element.crew}</p>
        </>
      );
    } else {
      return <p className="text fs-5">Unknown entity type</p>;
    }
  };

  return (
    <div className="Card info shadow rounded container-fluid p-2">
      <img
        src={
          element.image
            ? element.image
            : 'https://wallpapers.com/images/featured/logo-de-star-wars-xcw4lfbj6xjx2qvm.jpg'
        }
        className="rounded"
        alt={element.name}
      />
      <div className="body">
        <p className="text fs-2">{element.name}</p>
        <p className="text fs-5">ID: {element.uid}</p>
        {getInfoLines()}
      </div>
      <div className="buton d-flex flex-row">
        <div className="d-flex justify-content-between w-75 p-2">{children}</div>
      </div>
    </div>
  );
};
