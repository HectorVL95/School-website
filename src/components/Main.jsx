import React from 'react'
import '../styles/Main.scss'
import GirlsWriting from '../assets/girls-writing.webp'
import KidsLearning from '../assets/kids-group-learning.jpg'
import KidsWorking from '../assets/kids-working.jpg';

const Main = () => {

  
/*const images = [{GirlsWriting}, {KidsLearning}, {KidsWorking}]
const goodCitizens = document.querySelector('.good-citizens');
const interval = setInterval(function(){
  startCarousel();
}, 3000);
var index = 1;

startCarousel = () => {
  goodCitizens.style.backgroundImage = `url(${images[index++]})`;
  goodCitizens.classList.remove('carousel');
    void goodCitizens.offsetWidth;
    goodCitizens.classList.add('carousel');
    if(index > images.length - 1) index = 0;
};*/



  return (
    <main>
      <section>
        <div className='good-citizens carousel'>

        </div>
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