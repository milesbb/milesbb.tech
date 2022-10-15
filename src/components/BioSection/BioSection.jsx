import { Button } from "react-bootstrap";
import "./BioSection.css";
import cv from "../../assets/cv.pdf";

const BioSection = () => {
  return (
    <div
      style={{
        width: "100vw",
        background: "#1C77C3",
        boxShadow: "1px 7px 15px 7px rgba(0,0,0,0.3)"
      }}
      className="d-flex py-5 bio mb-5"
      id="aboutMeId"
    >
      <div className="w-75 d-flex mx-auto">
        <p className="text-white px-4 mx-auto mt-2">
          Fullstack engineer constantly learning and developing my skills.
          Background in biomechanics, computer science, engineering, and the
          arts.
        </p>
      </div>
      <div className="bioButtonCont d-flex mx-auto">
        <a href={cv} download="MilesBaileyBraendgaardCV.pdf">
          <Button
            variant="light"
            className="mx-auto"
            style={{ fontSize: "2rem", height: "63px", borderRadius: "0px" }}
          >
            RESUME
          </Button>
        </a>
      </div>
    </div>
  );
};

export default BioSection;
