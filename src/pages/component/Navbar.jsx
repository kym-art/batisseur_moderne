import { Link } from "react-router-dom";
import "../../style/componentcss/navbar.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar({ currentpage }) {
  const [hide, sethide] = useState(true);
  const [fixe, setFixe] = useState(false);

  useEffect(() => {
    const header = document.getElementById("header");
    const headerofset = header.offsetTop;
    const handleScrool = () => {
      if (window.scrollY > headerofset) {
        setFixe(true);
      } else {
        setFixe(false);
      }
    };
    window.addEventListener("scroll", handleScrool);
    return () => window.removeEventListener("scroll", handleScrool);
  },[]);

  const handleclick = () => {
    sethide((prev) => !prev);
  };
  return (
    <div>
      <header id="header" className={`header ${fixe ? "fixe" : ""}`}>
        <section>
          <img src="/logo.png" alt="logo" height="80" width="180" />
        </section>

        <nav>
          <h1>Cabinet Architecturale et de construction LE BATISSEUR</h1>

          <div>
            <Link to="/" className="link">
              Accueil
            </Link>
            <Link to="/s" className="link">
              nos services
            </Link>
            <Link to="/r" className="link">
              Nos realisations
            </Link>
            <Link to="/p" className="link">
              A propos
            </Link>
          </div>
        </nav>

        <div className={`linkhide ${hide ? "hide" : ""}`}>
          <button className="btn btn-primary" onClick={handleclick}>
            fermer
          </button>
          <Link to="/" className="link1">
            Accueil
          </Link>
          <Link to="/s" className="link1">
            nos services
          </Link>
          <Link to="/r" className="link1">
            Nos realisations
          </Link>
          <Link to="/p" className="link1">
            A propos
          </Link>
        </div>

        <div>
          {currentpage}
          <button className="btn btn-primary" onClick={handleclick}>
            menu
          </button>
        </div>
      </header>
    </div>
  );
}
export default Navbar;
