import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/">
            {" "}
            <img
              src={require("../assets/img/disc-vinyl-icon.png")}
              className="img-fluid"
              id="img-icon"
              alt="icono "
            ></img>{" "}
          </Link>

          <Link class="navbar-brand m-2" to="/">
            Vinyl Store
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <Link to="/category/vinilo" class="nav-link ">
                  Vinilos
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/category/cd" class="nav-link">
                  CD's
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/category/cassette" class="nav-link">
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
