import { Button, Image } from "react-bootstrap";
import "./BioSection.css";
import cv from "../../assets/cv.pdf";
import pp from "../../assets/pp.png";
import {ScrollPage} from "react-scroll-motion"

const BioSection = () => {
  return (
    // <ScrollPage>
    <div style={{
      width: "100vw"
    }}
    className="mainContainer"
    >

    <div
      style={{
        width: "100vw",
        background: "#1C77C3",
        boxShadow: "1px 7px 15px 7px rgba(0,0,0,0.3)",
        position: "absolute",
        zIndex: 99
      }}
      className="d-flex py-5 bio mb-5 mt-5"
      id="projects"
    >
      <div className="mx-auto d-flex imageCont">
        <Image className="mx-auto faceImg" style={{borderRadius: "500px", boxShadow: "1px 7px 15px 7px rgba(0,0,0,0.3)" }} alt="my face" src={pp} />
      </div>
      <div className="w-75 d-flex mx-auto mt-5">
        <p className="text-white pr-md-4 mx-auto mt-2">
          Fullstack engineer constantly learning and developing my skills.
          3 YoE with heaps of teamwork and plenty of leadership experience (incl. line managing and interviewing).
          Check out my RESUME for more details!
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
    </div>
    // </ScrollPage>
  );
};

export default BioSection;
