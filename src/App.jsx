import React, { Suspense, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BubbleBackground from "./components/BubbleBackground";
import shared from "./data/portfolio_shared_data.json"; 
import { FaLinkedin, FaGithub } from "react-icons/fa";


export default function App() {
  useEffect(() => {
    const { name, title, summary } = shared.profile || {};

    // <title>
    if (name || title) {
      document.title = [name, title].filter(Boolean).join(" – ");
    }

    // <meta name="description">
    const meta = document.querySelector("meta[name='description']");
    if (meta) meta.setAttribute("content", summary || "");
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = summary || "";
      document.head.appendChild(m);
    }

    // Open Graph (optionnel mais utile pour partage LinkedIn/X)
    const setOG = (prop, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property='${prop}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", prop);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setOG("og:title", [name, title].filter(Boolean).join(" – "));
    setOG("og:description", summary || "");
  }, []);

  const { name } = shared.profile || {};

  return (
    <div className="app">
      <BubbleBackground />
      <Header />
      <main>
        <About />
        <Skills />
        <Suspense fallback={<p>Chargement des projets…</p>}>
          <Projects />
        </Suspense>
        <Contact />
      </main>
     <footer className="footer">
  © {new Date().getFullYear()} • {shared.profile.name}
      <div className="footer__socials">
        <a href={shared.profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href={shared.profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
    </div>
  );
}
