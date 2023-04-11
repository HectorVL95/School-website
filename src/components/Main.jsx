import React, {useState} from 'react'
import '../styles/Main.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import GirlsWriting from '../assets/girls-writing.webp'
import KidsLearning from '../assets/kids-group-learning.jpg'
import KidsWorking from '../assets/kids-working.jpg'


const Main = () => {


  const images = [{GirlsWriting}, {KidsLearning}, {KidsWorking}]
  const renderSlides = images.map((image) => (
  <div>
    <img key="{image}" src={image}/>
  </div>
  )

  )


  return (
    <main>
      <section>
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          className="carousel-container good-citizens">
            {renderSlides}
        </Carousel>
        <article className='about'>
          <div className='about-info'>
            <p>About our School</p>   
          </div>
        </article>
        <article className='about '>
          <div className='about-info mission'>
            <p>Our Mission</p>
          </div>
        </article>
        <article>
          <article className='about'>
            <div className='about-info vision'>
              <p>Our Vision</p>
            </div>
          </article>
        </article>
      </section>
    </main>
  );
}

export default Main;