import '../../src/App.css';
import { Carousel, Container } from 'react-bootstrap';
import TopNav from './TopNav';
import img1 from '../img/F43D6932-B65C-4226-81E6-D10F3E788CDC_1_105_c.jpeg'
import img2 from '../img/85D04523-CD9A-4D36-ACFA-5B3448F9373E_1_105_c.jpeg'
import img3 from '../img/19FFAD00-01DE-4216-82D9-E627355BBA6C_1_105_c.jpeg'


function App() {
  return (
    <Container>
      <TopNav />
      <div className="row main-content">
        <div className="col-md-1"></div>
        <div className="col-md-10">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Full-Stack Web Developer</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
        </div>
        <div className="col-md-1"></div>
      </div>
        
    </Container>
  );
}

export default App;
