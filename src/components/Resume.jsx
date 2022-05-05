import '../../src/App.css';
import { Accordion, Image, Button, Container } from 'react-bootstrap';
import TopNav from './TopNav';
import epicodusLogo from '../img/epicodus-logo-300.png'
import reedLogo from '../img/reed-college-lockup-red.png'
import thacherLogo from '../img/the-thacher-school-logo.png'
import pboLogo from '../img/pbo-logo.png'
import bgcLogo from '../img/bgclogo.jpeg'
import sgsLogo from '../img/sgslogo.svg'


function Resume() {

  let toggleButton = <Button variant="outline-secondary">Tech Resume</Button>;
  return (
    <Container>
      <TopNav />
      <div className="main-content row">
        <div className="col-md-1"></div>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <p className="display-lead fw-bold">This is the comprehensive, 'kitchen sink' version of my resume.</p> 
          <p className="display-lead fw-bold">To see a shorter tech-focused version, click the button below.</p>
          {toggleButton}
          <hr />
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-3">Skills</h1>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Computer Programming Fundamentals</Accordion.Header>
              <Accordion.Body>
              <h1 className="lead">Languages: JavaScript, C#, Swift</h1>
              <ul>
                <li>Able to manipulate building blocks of code, including variables, functions, loops, control structures, and branching logic.</li>
                <li>Familiar with the constraints and advantages of different programming paradigms, including imperative, functional, and object-oriented.</li>
                <li>Can learn new skills and toolsets through tutorials and by reading reference documentation.</li>
              </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>JavaScript</Accordion.Header>
              <Accordion.Body>
              <ul>
                <li>Build projects with Node.js backend, manage packages and dependencies using <code>npm</code></li>
                <li>Bundle HTML, CSS, and universal JavaScript with Webpack and Babel</li>
                <li>Build websites with React library. Manage state with Redux </li>
              </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <p className="spacer"></p>
          <hr />
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h1 className="display-3">Work History</h1>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Image className='white-thumb' src={pboLogo} thumbnail />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-4">Portland Baroque Orchestra</h1>
          <h2 className="lead">Associate Producer of Digital Content | 2020 - 2021 </h2>
          <ul>
            <li>Executed a pivot from all in-person concerts to all digital concerts during 2020-21 Season.</li>
            <li>Opened a dedicated livestream studio.</li>
            <li>Associate Producer and Editor for 12 digital concerts for PBO and other music organizations.</li>
          </ul>
          <p className="spacer"></p>
          <h2 className="lead">Patron Services & Donor Relations Manager | 2017-2020</h2>
          <ul>
            <li>Managed box office, volunteers, and front of house at 26 live concerts per season.</li>
            <li>Supervised renewal campaigns, mail, and all CRM data for marketing and funders.</li>
            <li>Implemented ticket sales platform and donor database migration leading to a significant increase in online sales and individual giving.</li>
          </ul>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Image className='white-thumb' src={bgcLogo} thumbnail />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-4">Boys & Girls Clubs of Portland Metropolitan Area</h1>
          <h2 className="lead">Program Operations Coordinator | 2016 - 2017 </h2>
          <ul>
          <li>Stewarded program quality initiatives, grant writing and reporting, and fundraising events.</li>
            <li>Hired and onboarded program staff.</li>
            <li>Participated in an organization-wide DEI process led by Center for Equity and Inclusion.</li>
          </ul>
          <p className="spacer"></p>
          <h2 className="lead">Coordinator of Membership and Family Engagement | 2014-2016</h2>
          <ul>
            <li>Developed and led art, music, computer, and cooking after-school and summer programs in East Portland and Camas, WA.</li>
            <li>Managed member registration, and payment systems.</li>
            <li>Launched an annual art show fundraiser.</li>
          </ul>
          <p className="spacer"></p>
          <h2 className="lead">Youth Development Professional | 2013-2014</h2>
          <ul>
            <li>Led after-school programs in the Reynolds and Parkrose School Districts.</li>
          </ul>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Image className='white-thumb' src={reedLogo} thumbnail />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-4">Reed College Bookstore</h1>
          <h2 className="lead">Cashier | 2012 - 2013 </h2>
          <ul>
            <li>Sales, customer service, online order fulfillment.</li>
            <li>Assisted accounts receivable and bookkeeping.</li>
          </ul>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Image className='white-thumb' src={sgsLogo} thumbnail />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-4">Stream Global Services</h1>
          <h2 className="lead">Customer Service Representative | 2011 - 2012 </h2>
          <ul>
            <li>Provided technical support for a diverse non-technical customer base.</li>
            <li>Billing support, digital media account management.</li>
            <li>Remote hardware and software troubleshooting. Home network troubleshooting.</li>
          </ul>
          <hr />
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h1 className="display-3">Education</h1>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Image className='white-thumb' src={epicodusLogo} thumbnail />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-4">Epicodus</h1>
          <h2 className="lead">Full-Stack Developer Training (C#/.Net/React) | 2022 </h2>
          <ul>
            <li>Full time, 26-week, 40-hours/week program (in progress).</li>
            <li>Progressed from creating static HTML/CSS/JS websites to dynamic sites in Node.js to full- stack (MySql + .Net Core + React.js) webapps.</li>
            <li>Built over 70 projects, all available to view on Github.</li>
          </ul>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Image className='white-thumb' src={reedLogo} thumbnail />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-4">Reed College</h1>
          <h2 className="lead">B.A. Music | 2013 </h2>
          <ul>
            <li>Music coursework in history, music composition, 20th Century Modernism, Minimalism, and Music of the Civil Rights Movement.</li>
            <li>Other coursework in Spanish language, French language, Chinese humanities, and poetry.</li>
            <li>Senior thesis: <em>Samuel Barber's</em> Vanessa <em>and the Operatic Tradition</em></li>
          </ul>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Image className='white-thumb' src={thacherLogo} thumbnail />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-4">The Thacher School</h1>
          <h2 className="lead">H.S. Diploma | 2008 </h2>
          <ul>
            <li>Yearbook editor</li>
            <li>Student composer</li>
            <li>Represented school at 2007 National Association of Independent School's People of Color Conference</li>
          </ul>
        </div>
        <div className="col-md-1"></div>
      </div>
    </Container>
  );
}

export default Resume;