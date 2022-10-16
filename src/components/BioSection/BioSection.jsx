import { Button, Image } from "react-bootstrap";
import "./BioSection.css";
import cv from "../../assets/cv.pdf";
import pp from "../../assets/pp.jpeg";

const BioSection = () => {
  return (
    <div
      style={{
        width: "100vw",
        background: "#1C77C3",
        boxShadow: "1px 7px 15px 7px rgba(0,0,0,0.3)",
      }}
      className="d-flex py-5 bio mb-5"
      id="projects"
    >
      <div className="mx-auto d-flex">
        <Image className="mx-auto" style={{borderRadius: "500px", boxShadow: "1px 7px 15px 7px rgba(0,0,0,0.3)", width: "50%"}} alt="my face" src={pp} />
      </div>
      <div className="w-75 d-flex mx-auto mt-5">
        <p className="text-white pr-md-4 mx-auto mt-2">
          Fullstack engineer constantly learning and developing my skills.
          Background in biomechanics, computer science, engineering, and the
          arts.
        </p>
      </div>
      <div className="bioButtonCont d-flex mx-auto mt-5">
        <a href={cv} download="MilesBaileyBraendgaardCV.pdf">
          <Button
            variant="light"
            className="mx-auto"
            style={{ fontSize: "2rem", height: "63px", borderRadius: "0px", boxShadow: "1px 2px 10px 2px rgba(0,0,0,0.3)" }}
          >
            RESUME
          </Button>
        </a>
      </div>
    </div>
  );
};

export default BioSection;
