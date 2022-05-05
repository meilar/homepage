import '../../src/App.css';
import TopNav from './TopNav';
import React from 'react';
import { Container } from 'react-bootstrap'
import headshot from '../img/headshot_optimized.jpg'
import img2 from '../img/eilar_computer.jpeg'

function Bio() {
  return (
    <React.Fragment>
    <Container>
      <TopNav />
      <div id="spacer-div" className='row'></div>
      <div className='row'>
        <div className='col-md-3'>
          <figure class="figure">
            <img src={headshot} class="figure-img img-fluid rounded" alt="headshot of Matthew Eilar" />
            <figcaption class="figure-caption">Matthew Eilar, in late winter light on Mt. Tabor</figcaption>
          </figure>
          <figure class="figure">
            <img src={img2} class="figure-img img-fluid rounded" alt="headshot of Matthew Eilar" />
            <figcaption class="figure-caption">Playing <a href='https://www.youtube.com/watch?v=1BlmRyxz74c&ab_channel=Nostalgivault'>Reader Rabbit</a> on an Apple IIc in 1996.</figcaption>
          </figure>
        </div>
        <div className="col-md-1"></div>
        <div className='col-md-8'>
          <p className='display-4'>About Me</p>
          <p className='lead'>My animating passion is for <strong>exploration</strong> and to 
          discover <strong>new connections and patterns</strong> in the world around us. 
          After studying Music History at 
          Reed College, I started working in Portland, Oregon area non-profits, completing 
          successful terms in <strong>administrative and operations</strong> roles at an organization dedicated 
          to youth and family services, then performing arts.</p> 
          <p className="lead">In March 2020, I was an essential 
          part of pivoting the Portland Baroque Orchestra to an <strong>all-digital season</strong>, procuring
          equipment, doing preproduction work, and contributing directly as a recording assistant and video editor. 
          In autumn 2021, I left PBO to pursue <strong>more challenging and stimulating</strong> work.</p>
          <p className='lead'>During the first half of 2022, I went through the <a href="https://www.epicodus.com">Epicodus Full-Stack Developer bootcamp</a>, in the C#/.Net and React track. This program consists of 20 weeks of curriculum and just over a thousand hours with hands on keyboards. The program is modeled on workplaces that use Agile methodology, with development teams, daily standups and reflections, pair programming, and a day-one commitment to good practices like version control, unit testing, and documentation. My completion of the program, after a five week intership, is expected at the end of June, 2022.</p>
        </div>
      </div>
    </Container>
    </React.Fragment>
  );
}

export default Bio;