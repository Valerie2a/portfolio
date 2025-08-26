import React, { useState } from "react";
import Carousel from "./Carousel";
import Modal from "./Modal";

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  const hasImages = Array.isArray(project.images) && project.images.length > 0;
  const previewSrc = hasImages ? project.images[0] : project.image;

  return (
    <article className="project" aria-labelledby={`${project.slug}-title`}>
      {/* Aperçu cliquable */}
      <img
        src={previewSrc}
        alt={project.imageAlt}
        loading="lazy"
        className="project__preview"
        onClick={() => hasImages && setIsOpen(true)}
        style={{ cursor: hasImages ? "pointer" : "default" }}
      />

      <div className="project__body">
        <h3 id={`${project.slug}-title`}>{project.title}</h3>
        <p className="project__desc">{project.description}</p>

        {project.difficulty && (
          <p className="project__difficulty">
            <span className="project__difficulty-label">Difficultés & apprentissages :</span>{" "}
            {project.difficulty}
          </p>
        )}

        <ul className="project__tags">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project__links">
          {project.demo && (
            <a className="btn btn--sm" href={project.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
          {project.repo && (
            <a className="btn btn--sm btn--ghost" href={project.repo} target="_blank" rel="noreferrer">
              Code
            </a>
          )}
        </div>
      </div>

      {/* Modale plein écran avec carrousel */}
      {isOpen && hasImages && (
        <Modal onClose={() => setIsOpen(false)}>
          <Carousel images={project.images} alt={project.imageAlt} className="carousel--modal" />
        </Modal>
      )}
    </article>
  );
}

