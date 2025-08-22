import React from "react";
import ThemeToggle from "./ThemeToggle";
import shared from "../data/portfolio_shared_data.json"; // <-- import du JSON

export default function Header() {
  const { name, title } = shared.profile; // <-- récupère les infos
  return (
    <header className="header" id="home" aria-label="En-tête">
      <div className="header__inner">
        <div>
          <p className="kicker">{title || "Développeuse Front-End"}</p>
          <h1>{name}</h1> 
          <p className="subtitle">React • Redux • Accessibilité • SEO</p>
          <div className="actions">
            <a className="btn" href="#projects">Voir mes projets</a>
            <a className="btn btn--ghost" href="#contact">Me contacter</a>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
