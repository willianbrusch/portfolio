import "./header.css";

import { useTheme } from "../../context";

import { Link } from "react-scroll";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

function Header() {
  const { theme, handleChangeTheme } = useTheme();

  return (
    <header className="header">
      <nav className="nav">
        <Link to="about">Sobre</Link>
        <Link to="experience">Experiência</Link>
        <Link to="projects">Projetos</Link>
        {/* <p>|</p> */}
        {/* <p style={{ color: "black" }}>|</p> */}
        {/* <a onClick={() => setIsDark(!isDark)}>
          {isDark ? <BsMoonStars size={18} /> : <BsSun size={18} />}
        </a> */}
      </nav>

      <nav className="nav nav-button">
        <a href="#" onClick={() => handleChangeTheme()}>
          {theme == "dark" ? <BsMoonStars size={18} /> : <BsSun size={18} />}
        </a>
      </nav>
    </header>
  );
}

export default Header;
