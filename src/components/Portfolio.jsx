import React from 'react'
import ButterflyApp2 from '../Images/ButterflyApp2.png'
import NCNews from '../Images/NCNews.png'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div>
      <h1 className='portfolioTitle'>Portfolio</h1>
      <ul className='portfolioProjectsList'>
        <li className='butterflyList'>
          <h2>Butterfly Hunt Web AR App</h2>
          <img
            src={ButterflyApp2}
            alt='butterfly app'
            className='butterflyImg'
          />
          <p className='butterflyInfo'>
            Buterfly Hunt is a marker based Augmented Reality game. It is made
            up of a single page application built in Vue, which connects to a
            seperately hosted Web-AR application, with bespoke 3D butterflies
            made in Blender.
          </p>
        </li>

        <li className='ncNewsList'>
          <h2>NC News</h2>
          <img src={NCNews} alt='ncNews' className='ncNewsImg' />
          <p className='ncNewsInfo'>
            Northcoders News serves as a social news aggregation website where
            users can rate web content and have discussions in the style of
            Reddit.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio
