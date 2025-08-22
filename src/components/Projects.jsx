import React from 'react'
import data from '../data/portfolio_shared_data.json'
import ProjectCard from './ProjectCard'

export default function Projects(){
  return (
    <section id="projects" className="section projects">
      <h2>Projets</h2>
      <div className="projects__grid">
        {data.projects.map((p)=> (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}