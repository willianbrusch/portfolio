import "./header.css";
import { useState } from "react";
import Modal from "react-modal";
import { BsCloudMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlack, setIsBlack] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function isEvening() {
    setIsBlack(true);
  }

  return (
    <header className="header">
      {/* <img
        src="https://avatars.githubusercontent.com/u/53385347?v=4"
        style={{
          border: "1px solid rgb(245, 245, 245)",
          borderRadius: "50px",
          width: "35px",
          height: "35px",
        }}
      ></img> */}

      <nav className="nav">
        <a href="#">Sobre</a>
        <a href="#">Experiência</a>
        <a href="#">Contato</a>
        {/* <p>|</p> */}
        {/* <p style={{ color: "black" }}>|</p> */}
        {/* <a href="#" onClick={() => setIsBlack(!isBlack)}>
          {isBlack ? <BsCloudMoon size={18} /> : <BsSun size={18} />}
        </a> */}
      </nav>
      <nav className="nav">
        <a href="#" onClick={() => setIsBlack(!isBlack)}>
          {isBlack ? <BsCloudMoon size={18} /> : <BsSun size={18} />}
        </a>
      </nav>

      <div className="modal-container">
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <div className="menu">
            <ul>
              <li className="close-btn" onClick={() => setIsOpen(false)}>
                x
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Experiência</a>
              </li>
              <li>
                <a href="#">Projetos</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
        </Modal>
        {/* <button onClick={openModal}>Menu</button> */}
      </div>

      {/* <div
        style={{
          border: "1px solid rgb(245, 245, 245)",
          boxShadow:
            "0 10px 15px -3px rgba(39, 39, 42, 0.05),0 4px 6px -2px rgba(39, 39, 42, 0.05)",
          borderRadius: "20px",
          width: "40px",
          height: "30px",
          color: "black",
        }}
      >
        <CiCloudMoon size="medium" />
      </div> */}
    </header>
  );
}

export default Header;
