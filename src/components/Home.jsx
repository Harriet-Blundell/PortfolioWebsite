import React from 'react'
import HB from '../Images/HB.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className='profileContainer'>
      <img src={HB} alt='profile picture' className='profilePicture' />
      <p className='profileInfo'>
        <h1 className='homePageTitle'>ABOUT ME</h1>
        <p>
          Hi, I'm Harriet. I'm a full stack developer based in North West
          England. I primarily use JavaScript, but I have a diverse set of
          skills, ranging from back-end frameworks, such as Express, PSQL,
          Knex.js, Axios, Heroku, Firebase, and Node.js to front-end frameworks,
          such as React, React Native, Vue, HTML + CSS.
        </p>
        <p>
          {' '}
          I also have experience in using Mocha, Chai, Jest and Supertest. I
          strive to try and implement Test Driven Development to produce clean
          code.
        </p>
      </p>
    </div>
  )
}

export default Home
