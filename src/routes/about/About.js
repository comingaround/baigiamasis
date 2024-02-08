
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import './about.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';




  function About() {
    const [counter, setCounter] = useState(1);
    const carouselSlideRef = useRef(null);
    const carouselImagesRefs = useRef([]);
    const size = carouselImagesRefs.current[0]?.clientWidth || 0;
  
    const nextSlide = () => {
      if (counter >= carouselImagesRefs.current.length - 1) return;
      carouselSlideRef.current.style.transition = "transform 0.4s ease-in-out";
      setCounter(counter + 1);
    }
  
    const prevSlide = () => {
      if (counter <= 0) return;
      carouselSlideRef.current.style.transition = "transform 0.4s ease-in-out";
      setCounter(counter - 1);
    }
  
    useEffect(() => {
      carouselSlideRef.current.style.transform = `translateX(${-size * counter}px)`;
    }, [counter, size]);
  
    useEffect(() => {
      const carouselSlide = carouselSlideRef.current;
      const carouselImages = carouselImagesRefs.current;
      carouselSlide.style.transition = "none";
      if (carouselImages[counter].id === 'lastClone') {
        setCounter(carouselImages.length - 2);
      }
      if (carouselImages[counter].id === 'firstClone') {
        setCounter(carouselImages.length - counter);
      }
    }, [counter]);
  
    return (
  <div className='about'>
    <header>
        <a href="" className="logo">Logo</a>
        <ul>
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
        </ul>
    </header>
    <h3>Our team</h3>
      <div className="container-fluid">
        <span className="carousel-control-prev" onClick={prevSlide}>
          <BsChevronLeft className="carousel-control-icon" style={{ color: 'black' }} />
        </span>
        <span className="carousel-control-next" onClick={nextSlide}>
          <BsChevronRight className="carousel-control-icon" style={{ color: 'black' }} />
        </span>
        <div className="carousel-container">
          <div className="carousel-slide" ref={carouselSlideRef}>
            <img src="/slider4.jpg" id="lastClone" alt="" ref={(el) => { carouselImagesRefs.current[0] = el; }} draggable="false"/>
            <img src="/slider1.jpg" alt="slide1" ref={(el) => { carouselImagesRefs.current[1] = el; }} draggable="false"/>
            <img src="/slider2.jpg" alt="slide2" ref={(el) => { carouselImagesRefs.current[2] = el; }} draggable="false"/>
            <img src="/slider3.jpg" alt="slide3" ref={(el) => { carouselImagesRefs.current[3] = el; }} draggable="false"/>
            <img src="/slider4.jpg" alt="slide4" ref={(el) => { carouselImagesRefs.current[4] = el; }} draggable="false"/>
            <img src="/slider1.jpg" id="firstClone" alt="" ref={(el) => { carouselImagesRefs.current[5] = el; }} draggable="false"/>
          </div>
        </div>
      </div>
      <div class="logoipsum container">
        <div class="row">
          <div class="col-md-3 col-sm-12 col-xs-12">
            <img src="/dummy-logo-1b.svg" alt=""/>
          </div>
          <div class="col-md-3 col-sm-12 col-xs-12">
            <img class="logoipsum-none" src="/dummy-logo-2b.svg" alt=""/>
          </div>
          <div class="col-md-3 col-sm-12 col-xs-12">
            <img class="logoipsum-none" src="/dummy-logo-3b.svg" alt=""/>
          </div>
          <div class="col-md-3 col-sm-12 col-xs-12">
            <img src="/dummy-logo-4b.png" alt=""/>
          </div>
        </div>
      </div>
<Footer style={{ margin: 't20px' }} />
  </div>
    );
  }
  
  export default About;







