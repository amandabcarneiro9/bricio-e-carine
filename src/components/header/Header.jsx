import React, { useState } from "react";
import "./Header.scss";
import Hamburger from "hamburger-react";
import Links from "../../sessions/links/Links";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <a className="__names" href="/">
        <h1>Carine & Fabrício</h1>
      </a>

      <div className="__nav-bar">
        <Hamburger toggled={isOpen} toggle={setOpen} size={60} />
        {isOpen && <div className="__close" onClick={close} />}
        <div className={`__menu ${isOpen ? "--menu-opened" : ""}`}>
          <a className="__initials" href="/">
            C & F
          </a>
          <Links onClose={close} />
        </div>
      </div>
    </header>
  );
}
