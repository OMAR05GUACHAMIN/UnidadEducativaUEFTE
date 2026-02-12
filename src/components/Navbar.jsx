import { Link } from "react-router-dom";
import logo1 from "../assets/images/logo1.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container">

        {/* Logo + nombre */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src={logo1}
            alt="Logo UE Técnico Ecuador"
            className="navbar-logo"
          />
          <span>UEFTE</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">¿Quiénes Somos?</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/oferta-academica">Oferta Académica</Link>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Autoridades
              </span>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/autoridades/rectora">Rectora</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/autoridades/vicerrector">Vicerrector</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/autoridades/inspectora">Inspectora</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/noticias">Noticias</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
