import React from 'react'
import avatar from '../assets/avatar.jpg'
import shared from '../data/portfolio_shared_data.json'

export default function About(){
  return (
    <section id="about" className="section about">
      <h2>À propos</h2>
      <div className="about__content">
        <img src={avatar} alt="Portrait de la développeuse" loading="lazy" />
        <p>{shared.profile.summary}</p>
      </div>
      
<div className="about__formation">
  <h3>Formation</h3>
  <p>
    Intégrateur Web <br />
    <span className="school">OpenClassrooms</span> <br />
    <span className="dates">Octobre 2024 – Août 2025</span>
  </p>
</div>
    </section>
  )
}