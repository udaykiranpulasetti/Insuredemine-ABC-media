import React from "react";
import "../Nav/nav.css";
import { Link } from "react-router-dom";

const Nav = ({
  login,
  setLogin,
  privateUser,
  setPrivateUser,
  setUser,
  user,
}) => {
  return (
    <div className="navbar">
      <nav className="fixed-top navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
        <a class="navbar-brand mb-0 h1" href="#">ABC</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="items collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <Link to="/Home">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/Home">
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/About">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/About">
                    About
                  </a>
                </li>
              </Link>
              {privateUser && (
                <Link to="/Gallary">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/Gallary">
                      Gallary
                    </a>
                  </li>
                </Link>
              )}
            </ul>
          </div>

          {privateUser && (
            <h3>
              Hey,{" "}
              <span style={{ color: "violet", fontWeight: "700" }}>
                {user}😃
              </span>
            </h3>
          )}
          <Link to="/Login">
            <button
          
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setLogin((prev) => !prev);
                setUser("");
                setPrivateUser(false);
              }}
            >
              {!login ? "Login" : "Logout"}
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
