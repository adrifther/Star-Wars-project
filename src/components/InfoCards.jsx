import './InfoCards.css';

export const InfoCards = ({ element, children }) => {
  return (
    <>
      {element.image ? (
        <div className="Card info shadow rounded container-fluid rounded p-2">
          <img src={element.image} className="rounded" alt="..." />
          <div className="body">
            <p className="text fs-2">{element.name}</p>
            <p className="text fs-5">ID: {element.uid}</p>
            <p className="text fs-5">Info 1: {element.gender}</p>
            <p className="text fs-5">Info 2: {element.eye_color}</p>
          </div>
          <div className="buton d-flex flex-row">
            <div className="d-flex justify-content-between w-75 p-2">{children}</div>
          </div>
        </div>
      ) : (
        <div className="Card info shadow rounded container-fluid rounded p-2">
          <img
            src={'https://wallpapers.com/images/featured/logo-de-star-wars-xcw4lfbj6xjx2qvm.jpg'}
            className="rounded"
            alt="..."
          />
          <div className="body">
            <p className="text fs-2">{element.name}</p>
            <p className="text fs-5">ID: {element.uid}</p>
            <p className="text fs-5">Info 1: {element.gender}</p>
            <p className="text fs-5">Info 2: {element.eye_color}</p>
          </div>
          <div className="buton d-flex flex-row">
            <div className="d-flex justify-content-between w-75 p-2">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
