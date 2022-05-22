import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio111.png'
import IMG2 from '../../assets/portfolio223.png'
import IMG3 from '../../assets/portfolio33.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio' className='sec'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG1} alt=""/>
          </div>
          <h3>Crypto Tracker</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/zouheirhhmaidan/CryptoTracker" className='btn' target='_blank'>Github</a>
          
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG2} alt="" />
          </div>
          <h3>Anonymous Email</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/zouheirhhmaidan/AnonymousFrontend" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG3} alt=""/>
          </div>
          <h3>Weather App </h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/zouheirhhmaidan/Weather-with-auth" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG4} alt=""/>
          </div>
          <h3>Coming soon</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG5} alt=""/>
          </div>
          <h3>Coming soon</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          </div>
        </article>
       
        
      </div>
    </section>
  )
}

export default Portfolio