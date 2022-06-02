import React from "react";
import "../styles/Navbar.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="flex-between">
      <header>Fausto Lopez</header>
      <nav className="navbar">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#aboutme"
              onClick={() => handlePageChange("Aboutme")}
              className={
                currentPage === "About me" ? "nav-link active" : "nav-link"
              }
            >
              About me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavTabs;
