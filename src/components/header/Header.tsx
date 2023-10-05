import { useState } from "react";
import "./header.css";
import { RxMix } from "react-icons/rx";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header>
      <div>
        <a href="/" className="logo">
          <RxMix size={40} /> MONOGRAM
        </a>
      </div>
      <nav className={`nav ${navOpen && "nav-open"}`}>
        <button className="close-nav" onClick={() => setNavOpen(false)}>
          <AiOutlineClose size={25} />
        </button>
        <ul className="menu-list">
          <li>
            <a href="">How it works</a>
          </li>
          <li>
            <a href="">Workflow</a>
          </li>
          <li>
            <a href="">download</a>
          </li>
          <li>
            <a href="">blog</a>
          </li>
          <li>
            <a href="">support</a>
          </li>
          <li>
            <a href="">shop</a>
          </li>
        </ul>
      </nav>
      <div className="currency">
        <button className="open-nav" onClick={() => setNavOpen(true)}>
          <AiOutlineMenu size={25} />
        </button>
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gpb">GPB</option>
          <option value="gel">GEL</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
