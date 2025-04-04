import { Button, Col, Container, Image, Row } from "react-bootstrap";
import arkwright from "../../assets/arkwrightimg.png";
import uniq from "../../assets/uniqlogo.png";
import oxford from "../../assets/oxfordlogo.png";
import cv from "../../assets/cv.pdf";
import culturehustle from "../../assets/culturehustlelogo.png";
import skane from "../../assets/skaneuvhlogo.jpeg";
import epicode from "../../assets/epicodelogo.png";
import strive from "../../assets/strivelogo.png";
import aktiv from "../../assets/aktivlogo.png";
import ju from "../../assets/julogo.jpeg";
import aurora from "../../assets/auroralogo.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Awards.css";

const Awards = () => {
  return (
    <div className="mt-5">
      {/* AWARDS AND EXPERIENCES */}

      <div
        style={{
          width: "100vw",
          background: "#2C365E",
          boxShadow: "1px 7px 15px 7px rgba(0,0,0,0.3)",
        }}
        className="mt-5 p-3 text-white"
      >
        <h2 className="">Awards and Experiences</h2>
      </div>
      <Container className="mt-5">
        <Row>
          <Col sm={12} md={4} className="auroraCont">
            <div>
              <a
                href="https://auroraer.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="mt-5 mb-4"
                  style={{ width: "100%" }}
                  src={aurora}
                />
              </a>
            </div>
          </Col>
          <Col sm={12} md={8}>
            <div className="p-4">
              <h4 className="mb-4">
                Software Engineer - Aurora Energy Research
              </h4>
              <p>Mar 2025 - Present</p>
              <p>
                Mostly working day to day{" "}
                <span className="font-weight-bold">
                  improving architecture and processes
                </span>{" "}
                within heavily statistical financial model code. Working to
                further develop collaboration between Engineering and Modelling
                departments.
              </p>
              <p>
                <span className="font-weight-bold">
                  Currently run a multidisciplinary scrum team
                </span>{" "}
                with modellers and software engineers
              </p>
              <p>
                Helped start{" "}
                <span className="font-weight-bold">
                  'Continuous Improvement'
                </span>{" "}
                guild to try and avoid stagnation, improve feeling of devs{""}
                <span className="font-weight-bold">
                  'having a say' within the team (introduced health check system
                </span>{" "}
                a la 'Spotify'), and constantly{" "}
                <span className="font-weight-bold">
                  examine and improve our processes
                </span>
              </p>
            </div>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col sm={12} md={4} className="auroraCont">
            <div>
              <a
                href="https://auroraer.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="mt-5 mb-4"
                  style={{ width: "100%" }}
                  src={aurora}
                />
              </a>
            </div>
          </Col>
          <Col sm={12} md={8}>
            <div className="p-4">
              <h4 className="mb-4">
                Junior Software Engineer - Aurora Energy Research
              </h4>
              <p>Jan 2023 - Mar 2025</p>
              <p>
                Full-stack responsibilities within{" "}
                <span className="font-weight-bold">micro-services</span> and{" "}
                <span className="font-weight-bold">micro-frontend</span>{" "}
                architectures primarily in{" "}
                <span className="font-weight-bold">
                  Typescript, MySQL, and AWS services including S3, Lambda, and
                  more.
                </span>
              </p>
              <p>
                Part of the development and architectural testing of{" "}
                <span className="font-weight-bold">
                  fintech SaaS and MaaS (Modelling-as-a-Service) solutions
                </span>{" "}
                that handle bulk data and deliver{" "}
                <span className="font-weight-bold">
                  bespoke financial simulations and analysis
                </span>{" "}
                to internal and external customers.
              </p>
              <p>
                Based in Oxford, at{" "}
                <a
                  href="https://auroraer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aurora Energy Research
                </a>{" "}
                head office Software Engineering department often working
                inter-disciplinarily with analysts and modellers in both{" "}
                <span className="font-weight-bold">Typescript and Python</span>
              </p>
            </div>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col sm={12} md={4} className="aktivCont">
            <div className="d-flex mt-2 justify-content-between">
              <a
                href="https://www.aktivortopedteknik.se/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image style={{ width: "48%" }} src={aktiv} />
                <Image style={{ width: "48%" }} src={skane} />
              </a>
            </div>
          </Col>
          <Col sm={12} md={8}>
            <div className="p-4">
              <h4 className="mb-4" style={{ fontSize: "1.3rem" }}>
                Intern Prosthetist/Orthotist - Aktiv Ortopedteknik/University
                Hospital Skåne
              </h4>
              <p>Nov 2021 - Jan 2022</p>
              <p>
                Clinical placement in Lund, Sweden, working hands-on with
                patients and collaborating in multidisciplinary teams within{" "}
                <a
                  href="https://vard.skane.se/en/skane-university-hospital/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Skåne University-Hosptial
                </a>{" "}
                and{" "}
                <a
                  href="https://www.aktivortopedteknik.se/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aktiv Ortopedteknik Lund
                </a>
                .
              </p>
              <p>
                Gained experience with hospital/clinical patient records
                database infrastructure and mechanical and quality-of-life
                control software for myo-electric (muscle based electrical
                signal) and microprocessor prosthetics.
              </p>
            </div>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col sm={12} md={4}>
            <a
              href="https://culturehustle.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image className="mt-4 w-75" src={culturehustle} />
            </a>
          </Col>
          <Col sm={12} md={8}>
            <div className="p-4 mt-4">
              <h4 className="mb-4">Software Developer - Culture Hustle</h4>
              <p>May-Dec 2019</p>
              <p>
                Previously a production assistant, I was hired to design and
                code an AI chatbot to assist customers when visiting the
                e-commerce website
              </p>
              <p>
                Bot was programmed in AIML 2.0 within PandoraBots CI/CD
                infrastructure
              </p>
            </div>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col sm={12} md={4}>
            <div className="d-flex justify-content-between">
              <a
                href="https://www.uniq.ox.ac.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image className="mt-5" style={{ width: "48%" }} src={uniq} />
                <Image className="mt-5" style={{ width: "48%" }} src={oxford} />
              </a>
            </div>
          </Col>
          <Col sm={12} md={8}>
            <div className="p-4">
              <h4 className="mb-4">
                UNIQ Official Oxford University Summer School
              </h4>
              <p>2017</p>
              <p>
                'UNIQ is the{" "}
                <span className="font-weight-bold">University of Oxford’s</span>{" "}
                access programme for state school students. We prioritise places
                for{" "}
                <span className="font-weight-bold">
                  students with good grades from backgrounds that are
                  under-represented
                </span>{" "}
                at Oxford and other universities.' -{" "}
                <span className="font-weight-bold">
                  <a
                    href="https://www.uniq.ox.ac.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Oxford University UNIQ
                  </a>
                </span>
              </p>
              <p>
                Official{" "}
                <span className="font-weight-bold">Oxford University</span> run
                summer school with specialisation in Engineering, Solid
                Mechanics, and Engineering software including MATLAB and C++
              </p>
            </div>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col sm={12} md={4}>
            <a
              href="https://www.arkwright.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="mt-4"
                style={{ width: "100%" }}
                src={arkwright}
              />
            </a>
          </Col>
          <Col sm={12} md={8}>
            <div className="p-4">
              <h4 className="mb-4">Arkwright Engineering Scholarship</h4>
              <p>2016</p>
              <p>
                'The Arkwright Engineering Scholarships programme is the{" "}
                <span className="font-weight-bold">
                  most esteemed scholarship scheme of its type in the UK
                </span>{" "}
                with over 6,000 Scholarships awarded to date.' -{" "}
                <span className="font-weight-bold">
                  <a
                    href="https://www.arkwright.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Arkwright Scholarships Trust
                  </a>
                </span>
              </p>
              <p>
                Received engineering scholarship after rigorous multi-stage test
                process and engineering portfolio presentation at the{" "}
                <span className="font-weight-bold">
                  University of Southampton
                </span>
              </p>
              <p>
                Connected with arkwright scholarship sponsor at UK-based defense
                firm <span className="font-weight-bold">Ultra Electronics</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* EDUCATION */}

      <div
        style={{
          width: "100vw",
          background: "#484D6D",
          boxShadow: "1px 7px 15px 7px rgba(0,0,0,0.3)",
        }}
        className="mt-5 p-3 text-white"
      >
        <h2 className="">Education</h2>
      </div>
      <Container className="mt-5">
        <Row>
          <Col sm={12} md={4}>
            <div className="d-flex justify-content-between">
              <a
                href="https://epicode.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="mt-2"
                  style={{ width: "48%" }}
                  src={epicode}
                />
                <Image className="mt-2" style={{ width: "48%" }} src={strive} />
              </a>
            </div>
          </Col>
          <Col sm={12} md={8}>
            <div className="p-4">
              <h4 className="mb-4">
                Full-Stack Developer Course | EPICODE (AKA Strive School)
              </h4>
              <p>Jul - Dec 2022</p>
              <p>
                High-intensity highly-rated Full-Stack (MERN + PERN) Development
                Course (Formerly known as Strive School)
              </p>
              <p>
                <a
                  href="https://epicode.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More info
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col sm={12} md={4}>
            <a
              href="https://ju.se/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image className="mt-5 w-75" src={ju} />
            </a>
          </Col>
          <Col sm={12} md={8}>
            <div className="p-4">
              <h4 className="mb-4">
                BSc Prosthetics and Orthotics (Orthopaedic Engineering) -
                Jönköping University
              </h4>
              <p>2019-2022</p>
              <p>Grade: Swedish 'Godkänd', equivalent to UK 2:1 </p>
              <p>
                Clinical, tech, and research focused degree at{" "}
                <a
                  href="https://ju.se/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jönköping University
                </a>{" "}
                in Sweden.
              </p>
              <p>
                Included modules on clinical prosthetics/orthotics, general and
                solid mechanics and mathematics, and 2D/3D spatial data capture
                and processing with two clinical placements.
              </p>
              <p>
                Thesis on 3D scanning spatial data accuracy and reliability (
                <a
                  href="http://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1665350&dswid=-7765"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Available here
                </a>
                )
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Resume Button */}
      <div className="mt-5 mb-4 w-75 mx-auto">
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <h4 className="my-5">
            For more information on my experiences or education then check out
            my CV!
          </h4>
        </AnimationOnScroll>
        <a href={cv} download="MilesBaileyBraendgaardCV.pdf">
          <Button
            variant="dark"
            className="mx-auto mb-2"
            style={{
              fontSize: "2rem",
              height: "63px",
              borderRadius: "0px",
              boxShadow: "1px 2px 10px 2px rgba(0,0,0,0.3)",
            }}
          >
            RESUME
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Awards;
