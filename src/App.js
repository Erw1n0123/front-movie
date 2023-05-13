import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import './App.css';
import FilmListPage from "./FilmListPage";
import FilmCreatePage from "./FilmCreatePage";
import FilmModPage from "./FilmModPage";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-transparent border border-dark border-3 p-1">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className={({isActive}) => "nav-link " + (isActive ? "border border-dark border-2" : "")}><span className="nav-link">Filmek</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/uj-film" className={({isActive}) => "nav-link " + (isActive ? "border border-dark border-2" : "")}><span className="nav-link">Új Film</span></NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
      <Route path="/" exact element={<FilmListPage />} />
      <Route path="/uj-film" exact element={<FilmCreatePage />} />
      <Route path="/mod-film/:filmId" exact element={<FilmModPage />} />
      </Routes>
    </Router>
  );
}

export default App;
