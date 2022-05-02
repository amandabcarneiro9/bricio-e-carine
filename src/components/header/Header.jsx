import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Hamburger from "hamburger-react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={`header ${isOpen ? "--menu-opened" : ""}`}>
      <Hamburger toggled={isOpen} toggle={setOpen} size={60} />

      <h2>C & F</h2>
      <div className="__nav-links">
        {/* <Link to="/">bla</Link> */}
        <div className="__link">photos</div>
        <div className="__link">lista de presentes</div>
        <div className="__link">confirme sua presença</div>
        <div className="__link">mapa</div>
      </div>
    </header>
  );
}
