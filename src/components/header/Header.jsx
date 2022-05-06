import React, { useState } from "react";
import "./Header.scss";
import Hamburger from "hamburger-react";
import Links from "../../sessions/links/Links";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header">
      <a className="__names" href="/">
        <h1>Carine & Fabrício</h1>
      </a>

      <h3 className="__mention">
        " O amor se compõe de uma só alma que habita em dois corpos"
      </h3>

      <div className="__nav-bar">
        <Hamburger toggled={isOpen} toggle={setOpen} size={60} />
        <div className={`__menu ${isOpen ? "--menu-opened" : ""}`}>
          <h2 clas>C & F</h2>
          <Links />
        </div>
      </div>
    </header>
  );
}
