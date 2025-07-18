import { FiGlobe, FiMenu } from "react-icons/fi";

function Navbar() {
  return (
    <div style={{ backgroundColor: "#b2aaaa52" }}>
      <nav className="navbar navbar-expand-lg shadow-sm py-3">
        <div className="container text-start">
          <a
            className="navbar-brand d-flex align-items-center text-white"
            href="/home"
          >
            <img
              src="/images/logo-removebg-preview.png"
              alt="Logo"
              height="40"
              loading="lazy"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FiMenu size={24} color="white" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link text-white" href="/Investments">
                  Investments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/RealEstate">
                  Real Estate
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/Careers">
                  Careers
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="/About"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                  <li>
                    <a className="dropdown-item" href="About Us">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Vision">
                      Vision
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item ms-3"></li>
            </ul>

            <button className="btn d-flex align-items-center text-light">
              <FiGlobe className="me-2 fs-5" />
              <span className="fs-5">AR</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
