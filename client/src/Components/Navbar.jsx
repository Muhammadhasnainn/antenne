import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="d-flex align-items-center Navbar">
        <div className="d-flex justify-content-between align-items-center canvas">
        <Link to="/">
          <img
            src={logo}
            className="logo"
          ></img>
          </Link>
          <div className="d-flex align-items-center menu">
            {window.matchMedia("(min-width: 800px)").matches && (
              <>
                <Link to="/" className="nav-link">
                  Fa per te?
                </Link>
                <Link to={"/"} className="nav-link ms-3">
                  Come funziona
                </Link>
                <Link to={"/"} className="nav-link ms-3">
                  Chi siamo
                </Link>
              </>
            )}
            <button className="btn primary_btn ms-3 px-4">LAND</button>
            {window.matchMedia("(max-width: 800px").matches && (
              <AiOutlineMenu
                className="ms-3 text-white"
                size={30}
                cursor="pointer"
                onClick={() => setMenu(!menu)}
              />
            )}
          </div>
        </div>
      </nav>
      {menu && (
        <div className="resp_menu">
          <Link to="/" className="nav-link mt-5 p-2">
            Fa per te?
          </Link>
          <Link to={"/"} className="nav-link mt-2 p-2">
            Come funziona
          </Link>
          <Link to={"/"} className="nav-link mt-2 p-2">
            Chi siamo
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
