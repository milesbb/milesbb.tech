import { Button, Container, Image } from "react-bootstrap";
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
import ExperienceSection from "./ExperienceSection";

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
        <ExperienceSection
          specialMarginClass="auroraCont"
          tooltip="Click to visit Aurora Energy Research's Website!"
          websiteUrl="https://auroraer.com/"
          image={
            <Image
              className="mt-5 mb-4"
              style={{ width: "100%" }}
              src={aurora}
            />
          }
          title="Software Engineer"
          workplaceName="Aurora Energy Research"
          content={
            <>
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
              <p>
                <span className="font-weight-bold">
                  Run 1st and 2nd round interviews and line manage Junior
                  Software Engineers
                </span>
              </p>
            </>
          }
        />
        <hr></hr>
        <ExperienceSection
          specialMarginClass="auroraCont"
          tooltip="Click to visit Aurora Energy Research's Website!"
          websiteUrl="https://auroraer.com/"
          image={
            <Image
              className="mt-5 mb-4"
              style={{ width: "100%" }}
              src={aurora}
            />
          }
          title="Junior Software Engineer"
          workplaceName="Aurora Energy Research"
          content={
            <>
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
            </>
          }
        />
        <hr></hr>
        <ExperienceSection
          specialMarginClass="aktivCont"
          tooltip="Click to visit Aktiv Ortopedteknik's Website!"
          websiteUrl="https://www.aktivortopedteknik.se/"
          image={
            <>
              <Image style={{ width: "48%" }} src={aktiv} />
              <Image style={{ width: "48%" }} src={skane} />
            </>
          }
          title="Intern Prosthetist/Orthotist"
          workplaceName="Aktiv Ortopedteknik/University Hospital Skåne"
          titleStyle={{ fontSize: "1.3rem" }}
          content={
            <>
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
            </>
          }
        />
        <hr></hr>
        <ExperienceSection
          tooltip="Click to visit Culture Hustle's Website!"
          websiteUrl="https://culturehustle.com/"
          image={
            <Image
              className="mt-4"
              style={{ width: "100%" }}
              src={culturehustle}
            />
          }
          title="Software Developer"
          workplaceName="Culture Hustle"
          content={
            <>
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
            </>
          }
        />
        <hr></hr>
        <ExperienceSection
          tooltip="Click to visit Oxford University's UNIQ Programme Website!"
          websiteUrl="https://www.uniq.ox.ac.uk/"
          image={
            <>
              <Image className="mt-5" style={{ width: "48%" }} src={uniq} />
              <Image className="mt-5" style={{ width: "48%" }} src={oxford} />
            </>
          }
          workplaceName="UNIQ Official Oxford University Summer School"
          content={
            <>
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
            </>
          }
        />
        <hr></hr>
        <ExperienceSection
          tooltip="Click to visit Arkwright Scholarships Trust's Website!"
          websiteUrl="https://www.arkwright.org.uk/"
          image={
            <Image className="mt-4" style={{ width: "100%" }} src={arkwright} />
          }
          workplaceName="Arkwright Engineering Scholarship"
          content={
            <>
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
            </>
          }
        />
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
        <ExperienceSection
          tooltip="Click to visit Epicode's Website!"
          websiteUrl="https://epicode.com/en/"
          image={
            <>
              <Image style={{ width: "48%" }} src={epicode} />
              <Image style={{ width: "48%" }} src={strive} />
            </>
          }
          title="Full-Stack Developer Course"
          workplaceName="EPICODE (AKA Strive School)"
          content={
            <>
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
            </>
          }
        />
        <hr></hr>
        <ExperienceSection
          tooltip="Click to visit Jönköping University's Website!"
          websiteUrl="https://ju.se/en"
          image={
            <Image className="mt-5 mb-4" style={{ width: "100%" }} src={ju} />
          }
          title="BSc Prosthetics and Orthotics (Orthopaedic Engineering)"
          workplaceName="Jönköping University"
          content={
            <>
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
            </>
          }
        />
        <hr></hr>
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
