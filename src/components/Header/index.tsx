/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import logo from "../../assets/img/logo.svg";
import { Container } from "./style";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  function openMenu() {
    const openOrNot = !isOpen;
    setIsOpen(openOrNot);
    document.body.classList.toggle("menu-expanded");
    const links = document.querySelectorAll("ul li a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        setIsOpen(openOrNot);
        document.body.classList.toggle("menu-expanded");
      });
    });
  }

  return (
    <Container>
      <nav className="navigation">
        <Link to="/">
          <img src={logo} alt="Logo do Pokemon" />
        </Link>
        <div className="menu">
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }}
                to="/pokedex"
              >
                Pokédex
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }}
                to="/creditos"
              >
                Créditos
              </NavLink>
            </li>
          </ul>
        </div>
        {isOpen ? (
          <button
            type="button"
            aria-expanded="true"
            aria-label="Fechar menu"
            onClick={openMenu}
            className="close-menu"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 10L10 30M10 10L30 30"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : (
          <button
            aria-expanded="false"
            aria-label="Abrir menu"
            onClick={openMenu}
            className="open-menu"
            type="button"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20H30"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 12H30"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 28L30 28"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </nav>
    </Container>
  );
}
