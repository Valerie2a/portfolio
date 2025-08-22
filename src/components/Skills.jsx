import React from 'react'
import shared from '../data/portfolio_shared_data.json'

export default function Skills(){
  return (
    <section id="skills" className="section skills">
      <h2>Compétences</h2>
      <ul className="skills__grid">
        {shared.skills.map((s)=> (
          <li key={s.name} className="skill" aria-label={s.name}>
            <div className="skill__meta">
              {s.icon && (
                <img className="skill__icon" src={s.icon} alt="" aria-hidden="true" loading="lazy" />
              )}
              <span className="skill__name">{s.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}