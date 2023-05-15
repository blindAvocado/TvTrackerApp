import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__list-item">
          <a href="/" className="header__item-link">
            Сериалы
          </a>
        </li>
        <li className="header__list-item">
          <a href="/" className="header__item-link">
            Списки
          </a>
        </li>
      </ul>
    </nav>
  );
};
