import "../../src/App.css";
import { Accordion, Image, Button, Container } from "react-bootstrap";
import TopNav from "./TopNav";
import epicodusLogo from "../img/epicodus-logo-300.png";
import reedLogo from "../img/reed-college-lockup-red.png";
import thacherLogo from "../img/the-thacher-school-logo.png";
import pboLogo from "../img/pbo-logo.png";
import bgcLogo from "../img/bgclogo.jpeg";
import sgsLogo from "../img/sgslogo.svg";
import itosLogo from "../img/itOS+logo-148w.jpeg";

function Resume() {
  return (
    <Container>
      <TopNav />
      <div className="main-content row">
        <div className="col-md-2"></div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-3 mb-4">Skills</h1>
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="1">
              <Accordion.Header>People Skills</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Polished writing skills, experienced drafting copy and
                    communications for high-visibilty channels
                  </li>
                  <li>Mentorship, training, and process implementation</li>
                  <li>
                    High EQ developed through experience providing empathetic
                    service to a diverse group of customers, clients, and
                    stakeholders
                  </li>
                  <li>
                    Experience developing team evaluation metrics, translating
                    desired outcomes into performance indicators
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Development Tools</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Use Github and Git CLI to manage version control</li>
                  <li>Understanding of test-driven development principles. </li>
                  <li>
                    Implement automatic unit testing with tools like Jest,
                    MSTest, and Github Actions.
                  </li>
                  <li>
                    VS Code (including Live Share), Atom, Chrome Developer
                    Tools, MySql Workbench, Postman, Linux, Xcode, Beekeeper
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Programming Fundamentals</Accordion.Header>
              <Accordion.Body>
                <h1 className="lead">Languages: JavaScript, C#, Swift</h1>
                <ul>
                  <li>
                    Manipulate building blocks of code, including variables,
                    functions, loops, control structures, and branching logic
                  </li>
                  <li>
                    Compare constraints and advantages of different programming
                    paradigms, including declarative, imperative, functional,
                    and object-oriented
                  </li>
                  <li>
                    Learn new skills through example code, tutorials and by
                    reading reference documentation
                  </li>
                  <li>
                    Evaluate new design patterns and apply abstract principles
                    to new situations
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Web Fundamentals</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Create web pages with HTML</li>
                  <li>HTTP, DNS lookup & traffic routing </li>
                  <li>Style web content with CSS</li>
                  <li>
                    Create interactive web pages with jQuery and Popper.js
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>JavaScript & TypeScript</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Use leading edge ECMAScript features, including arrow
                    notation, class inheritance, promises, and object
                    manipulation with spread operators
                  </li>
                  <li>Create custom components in JSX, including CSS-in-JS</li>
                  <li>Use TypeScript annotations and resolving type errors</li>
                  <li>
                    Use import statements, export statements, and indexes to
                    manage and reuse code modules
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>C#/.NET Core</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Construct web applications using Model-View-Controller
                    design pattern
                  </li>
                  <li>Create UI views with Blazor</li>
                  <li>
                    Understand idiomatic C# patterns like inversion of control
                    and dependency injection
                  </li>
                  <li>
                    Read, comprehend, and apply Microsoft developer
                    documentation
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>Swift</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Beginner-level Swift and iOS MVVM design pattern.</li>
                  <li>Build basic interactive Views in SwiftUI.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>Front-End Frameworks</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Create applications in React, including using common React
                    libraries like <code>'react-router'</code>,{" "}
                    <code>'redux'</code>, and <code>'create-react-app</code>{" "}
                  </li>
                  <li>
                    Extensive use of Material UI component and icon library,
                    including creating custom themes and custom styling with{" "}
                    <code>styled-components</code>
                  </li>
                  <li>
                    Extensive use of Bootstrap styling library, including in
                    React projects with <code>react-bootstrap</code>
                  </li>
                  <li>
                    Style pages with both CSS-in-JS and utility class approaches
                  </li>
                  <li>
                    Using features like memoization and Redux state management
                    to improve performance by reducing number of API calls and
                    render cycles
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>Back-End Development</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Build back-end applications in .Net Core and Nest.js</li>
                  <li>
                    Create REST APIs, observing proper naming and routing
                    conventions
                  </li>
                  <li>Separate out functionality into modules and services</li>
                  <li>
                    Use different design patterns, including monolith and
                    microservice architecture paradigms, API Gateways, and
                    direct client-to-microservice patterns
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>Database</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Construct SQL queries</li>
                  <li>
                    Code-first database management in .NET projects using Entity
                    Framework Core and LINQ.
                  </li>
                  <li>
                    Create PostgreSQL and MySQL instances locally and in Docker
                    containers
                  </li>
                  <li>
                    ASP.NET Core Identity and Firebase authentication and
                    authorization
                  </li>
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
          <Image className="white-thumb" src={itosLogo} thumbnail />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-4">itOS</h1>
          <h2 className="lead">Junior Software Developer | 2022 - present</h2>
          <ul>
            <li>
              Contributed to alpha version of a new SaaS web application written
              in TypeScript with a Material UI + React + Next.js + Postres stack
            </li>
            <li>
              True full-stack development, independently handling front-end and
              back-end tasks under the guidance of the project's CTO
            </li>
            <li>Created new pages, React components, and REST API endpoints</li>
          </ul>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Image className="white-thumb" src={pboLogo} thumbnail />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-4">Portland Baroque Orchestra</h1>
          <h2 className="lead">
            Associate Producer of Digital Content | 2020 - 2021{" "}
          </h2>
          <ul>
            <li>
              Executed a pivot from all in-person concerts to all digital
              concerts during 2020-21 Season.
            </li>
            <li>Opened a dedicated livestream studio.</li>
            <li>
              Associate Producer and Editor for 12 digital concerts for PBO and
              other music organizations.
            </li>
          </ul>
          <p className="spacer"></p>
          <h2 className="lead">
            Patron Services & Donor Relations Manager | 2017-2020
          </h2>
          <ul>
            <li>
              Managed box office, volunteers, and front of house at 26 live
              concerts per season.
            </li>
            <li>
              Supervised renewal campaigns, mail, and all CRM data for marketing
              and funders.
            </li>
            <li>
              Implemented ticket sales platform and donor database migration
              leading to a significant increase in online sales and individual
              giving.
            </li>
          </ul>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Image className="white-thumb" src={bgcLogo} thumbnail />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-4">
            Boys & Girls Clubs of Portland Metropolitan Area
          </h1>
          <h2 className="lead">
            Program Operations Coordinator | 2016 - 2017{" "}
          </h2>
          <ul>
            <li>
              Stewarded program quality initiatives, grant writing and
              reporting, and fundraising events.
            </li>
            <li>Hired and onboarded program staff.</li>
            <li>
              Participated in an organization-wide DEI process led by Center for
              Equity and Inclusion.
            </li>
          </ul>
          <p className="spacer"></p>
          <h2 className="lead">
            Coordinator of Membership and Family Engagement | 2014-2016
          </h2>
          <ul>
            <li>
              Developed and led art, music, computer, and cooking after-school
              and summer programs in East Portland and Camas, WA.
            </li>
            <li>Managed member registration, and payment systems.</li>
            <li>Launched an annual art show fundraiser.</li>
          </ul>
          <p className="spacer"></p>
          <h2 className="lead">Youth Development Professional | 2013-2014</h2>
          <ul>
            <li>
              Led after-school programs in the Reynolds and Parkrose School
              Districts.
            </li>
          </ul>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Image className="white-thumb" src={reedLogo} thumbnail />
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
          <Image className="white-thumb" src={sgsLogo} thumbnail />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-4">Stream Global Services</h1>
          <h2 className="lead">
            Customer Service Representative | 2011 - 2012{" "}
          </h2>
          <ul>
            <li>
              Provided technical support for a diverse non-technical customer
              base.
            </li>
            <li>Billing support, digital media account management.</li>
            <li>
              Remote hardware and software troubleshooting. Home network
              troubleshooting.
            </li>
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
          <Image className="white-thumb" src={epicodusLogo} thumbnail />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-4">Epicodus</h1>
          <h2 className="lead">
            Full-Stack Developer Training (C#/.Net/React) | 2022{" "}
          </h2>
          <ul>
            <li>Full time, 26-week, 40-hours/week training program</li>
            <li>
              Progressed from creating static HTML/CSS/JS websites to dynamic
              sites in Node.js to full- stack (MySql + .Net Core + React.js)
              webapps
            </li>
            <li>Built over 70 projects, all available to view on Github</li>
          </ul>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Image className="white-thumb" src={reedLogo} thumbnail />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-4">Reed College</h1>
          <h2 className="lead">B.A. Music | 2013 </h2>
          <ul>
            <li>
              Music coursework in history, music composition, 20th Century
              Modernism, Minimalism, and Music of the Civil Rights Movement
            </li>
            <li>
              Other coursework in Spanish language, French language, Chinese
              humanities, and poetry
            </li>
            <li>
              Senior thesis: <em>Samuel Barber's</em> Vanessa{" "}
              <em>and the Operatic Tradition</em>
            </li>
          </ul>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Image className="white-thumb" src={thacherLogo} thumbnail />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1 className="display-4">The Thacher School</h1>
          <h2 className="lead">H.S. Diploma | 2008 </h2>
          <ul>
            <li>2008 Yearbook editor</li>
            <li>
              Represented school at 2007 National Association of Independent
              School's People of Color Conference
            </li>
          </ul>
        </div>
        <div className="col-md-1"></div>
      </div>
    </Container>
  );
}

export default Resume;
