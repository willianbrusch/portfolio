import "./header.css";
import { useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

function Header() {
  const [isDark, setIsDark] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <a href="#">Sobre</a>
        <a href="#">Experiência</a>
        <a href="#">Contato</a>
        {/* <p>|</p> */}
        {/* <p style={{ color: "black" }}>|</p> */}
        {/* <a onClick={() => setIsDark(!isDark)}>
          {isDark ? <BsMoonStars size={18} /> : <BsSun size={18} />}
        </a> */}
      </nav>

      <nav className="nav nav-button">
        <a href="#" onClick={() => setIsDark(!isDark)}>
          {isDark ? <BsMoonStars size={18} /> : <BsSun size={18} />}
        </a>
      </nav>
    </header>
  );
}

export default Header;
