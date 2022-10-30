import { Canvas } from "@react-three/fiber";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Col, Container, Row } from "react-bootstrap";
import NEWANIMODELModel from "../Model/AnimalfaceNEWPLEASE";
import "./skills.css";

const Skills = () => {
  return (
    <div
      className="py-5"
      style={{
        width: "100vw",
      }}
    >
      <h2 className="my-5">SKILLS</h2>
      <Container className="mt-5">
        <Row>
          <Col sm={12} md={5}>
            <Canvas
              orthographic
              camera={{ zoom: 80, position: [0, 0, 10], rotation: [0, 0, 0] }}
              style={{ border: "solid 1px black" }}
            >
              <NEWANIMODELModel />
            </Canvas>
          </Col>
          <Col sm={12} md={7}>
            <div>
              <p style={{ listStyle: "none", fontSize: "1.3rem" }}>
                Some tools and languages that I've worked with before
              </p>
              <AnimationOnScroll initiallyVisible={true} delay={1500} animateIn="animate__tada">
              <p>
                P.S. try hovering over my wolf (if you're on mobile try tapping
                around it)
              </p>
              </AnimationOnScroll>
              <div className="d-flex">
                <div className="mx-auto">
                  <ul
                    style={{ listStyle: "none" }}
                    className="text-left skillsText mx-auto"
                  >
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>HTML</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>ThreeJS</li>
                    <li>ReactThreeFiber</li>
                  </ul>
                </div>
                <div className="mx-auto">
                  <ul
                    style={{ listStyle: "none" }}
                    className="text-left skillsText"
                  >
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>Cloudinary</li>
                    <li>SendGrid</li>
                    <li>Git + Github</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>Blender</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
