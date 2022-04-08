import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            {" "}
            <img
              src={require("../assets/img/disc-vinyl-icon.png")}
              className="img-fluid"
              id="img-icon"
              alt="icono "
            ></img>{" "}
          </Link>

          <Link className="navbar-brand m-2" to="/">
            Vinyl Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/category/vinilo" class="nav-link ">
                  Vinilos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/cd" class="nav-link">
                  CD's
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/cassette" className="nav-link">
                  Cassettes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <CartWidget></CartWidget>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
