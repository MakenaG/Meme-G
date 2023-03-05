import logo from "../images/meme2.png";
import { DiGithubBadge } from "react-icons/di";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="https://github.com/MakenaG/Meme-G.git" className="github navbar-brand">
        <div className="logo-right">
          <img src={logo} alt="meme logo" className="logo-image" />
          <h1 className="logo-text">MemeG <DiGithubBadge /></h1>
        </div>
      </a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Actions</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <button className="dropdown-item" onClick={() => navigate("/Login")}>
                  Login
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => navigate("/GeneratedMemes")}>
                  View all Memes
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {pathname === "/" ? (
        <></>
      ) : (
        <button onClick={() => navigate("/")} className="btn btn-outline-primary">
          Home
        </button>
      )}
    </nav>
  );
};

export default NavBar;
