import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  const removeFavorite = (item) => {
    dispatch({ type: 'remove_favorite', payload: item });
  };

  return (
    <nav className="navbar navbar-light bg-transparent">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://wallpapers.com/images/featured/logo-de-star-wars-xcw4lfbj6xjx2qvm.jpg"
              alt="Star Wars Logo"
              style={{ width: '200px', height: '110px' }}
            />
          </span>
        </Link>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites <i className="fa-regular fa-heart"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favoriteList.length === 0 ? (
              <li className="dropdown-item text-muted">No favorites</li>
            ) : (
              store.favoriteList.map((item, index) => (
                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                  <Link to={`/${item.category}/${item.uid}`} className="text-decoration-none text-dark">
                    {item.name}
                  </Link>
                  <button
                    onClick={() => removeFavorite(item)}
                    className="btn btn-sm btn-outline-danger ms-2"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};