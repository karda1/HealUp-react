import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="navbar bg-body-tertiary fixed-top bg-opacity-50 glass-navbar">
      <div className="container-fluid container">
        <a className="navbar-brand" href="#">
          <img
            src="src/assets/react.svg"
            alt="Bootstrap"
            width="30"
            height="24"
          />
          HealUp
        </a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
