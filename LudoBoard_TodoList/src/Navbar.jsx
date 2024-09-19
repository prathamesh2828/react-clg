import React from "react";
import { useState } from "react";
const Navbar = ({ title, link }) => {
  let [mode, setMode] = useState("light");
  const handleMode = () => {
    if (mode === "light") setMode("dark");
    else {
      setMode("light");
    }
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${mode}`}
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{ color: mode === "dark" ? "white" : "black" }}
          >
            {title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: mode === "dark" ? "white" : "black" }}
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: mode === "dark" ? "white" : "black" }}
                >
                  AboutUs
                </a>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ color: mode === "dark" ? "white" : "black" }}
              >
                Search
              </button>
            </form>
            <div className=" form-check form-switch ">
              <input
                className="m-4 form-check-input"
                onClick={handleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            
          
            <button className="m-3 btn btn-primary">Login</button>
            <button className="m-3 btn btn-warning">SignUp</button>


            

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;