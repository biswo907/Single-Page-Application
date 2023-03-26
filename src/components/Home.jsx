import React from 'react'
import vg from "../assets/2.webp"
import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillAmazonCircle,
  AiFillInstagram} 
  from "react-icons/ai"


const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>TechyStar</h1>
          <p>Solution To All Your Problem</p>
        </main>
      </div>

      <div className='home2' id='content'>
        <img src={vg} alt="Graphics"/>
        <div>
          <p>
            👉"Success is not final; failure is not fatal: It is the courage to continue that counts." <br></br> <br></br>
            👉“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.”

          </p>
        </div>
      </div>



      <div className='home3' id='about'>

      <div>
        <h1>Who we are?</h1>
        <p>You can justify a higher price point for your products and services, if you go into details about your production values or ethically-sourced materials.For instance, Starbucks’ coffee may not be necessarily better than Dunkin’ Donuts’ coffee, but because Starbucks goes into details about its high-quality ingredients, it immediately creates the sense that you’ll be paying a little more for a "better" product.</p>
      </div>

      </div>


      <div className='home4' id='brands'>
    
      <div>

        <h1>Brands</h1>

        <article>
          <div style={{animationDelay:"0.3s"}}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>

          <div style={{animationDelay:"0.5s"}}>
          <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>

          <div style={{animationDelay:"0.7s"}}>
          <AiFillInstagram/>
            <p>Instagram</p>
          </div>

          <div style={{animationDelay:"0.9s"}}>
          <AiFillYoutube/>
            <p>Youtube</p>
          </div>

        </article>
      </div>
      </div>

      </>
    

  )
}

export default Home;









