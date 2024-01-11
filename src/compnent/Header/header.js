import { NavLink } from "react-router-dom";
import "./style.css";
export const Navigation = () => {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <h1 className="navbar-brand">krishi kalyan</h1>
        <div className="nav-container">
          <NavLink to="/">Home</NavLink> ||
          <NavLink to="/FAQS">FAQS</NavLink> ||
          <NavLink to="/recomendation">Recomendation</NavLink>
        </div>
      </nav> */}

      <nav class="navbar navbar-expand-lg  ">
        <div class="container-fluid">
          <h1 class="navbar-brand">krishi kalyan</h1>
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
            class="collapse navbar-collapse nav-container"
            id="navbarSupportedContent"
          >
            <NavLink class=" nav-link" to="/">
              Home
            </NavLink>
            <NavLink class=" nav-link" to="/FAQS">
              FAQS
            </NavLink>
            <NavLink to="/recomendation">Recomendation</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
