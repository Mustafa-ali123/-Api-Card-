import React from 'react';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (

    <>
      <nav data-bs-theme="dark" class="navbar fixed-top navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-bottom-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">FRUITES</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse underline navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-2">
                <Link className="nav-link active " to="/">Home</Link>

              </li>
              <li class="nav-item mx-2">
                <Link className="nav-link active" to="/">About</Link>

              </li>
              <li class="nav-item mx-2">
                <Link className="nav-link active" to="/">Contact</Link>

              </li>
              <li class="nav-item mx-2">
                <Link className="nav-link active" to="/">Login</Link>

              </li> <li class="nav-item mx-2">
                <Link className="nav-link active" to="/">Service</Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
