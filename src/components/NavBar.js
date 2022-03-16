import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Tienda de Musica
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto">
              <a class="nav-link" href="#">
                Vinilos
              </a>
              <a class="nav-link" href="#">
                Cd's
              </a>
              <a class="nav-link" href="#">
                Cassettes
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
