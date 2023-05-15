import React from "react";
import "./style.scss";

export const EpisodeSidelistItem = ({number, title, isCurrent}) => {
  return (
    <li className="neighbour__item">
      <span href="/" className={"neighbour__link" + (isCurrent ? "current" : "")}>
        {number} - {title}
      </span>
    </li>
  );
};
