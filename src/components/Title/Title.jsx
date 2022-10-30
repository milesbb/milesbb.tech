import pronunciation from "../../assets/pronunciation.png";
import { Button, Image } from "react-bootstrap";
import "./title.css";
import {
  Animator,
  ScrollPage,
  batch,
  Fade,
  Move,
  Sticky,
} from "react-scroll-motion";

const Title = () => {
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div className="">
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div
            style={{ width: "100vw", height: "90vh", marginTop: "17vh" }}
            className="d-flex"
          >
            <div className="text-left position-relative mx-auto respTitleCont">
              <h1 className="mt-4 font-weight-bold respTitle">
                Miles Bailey-
                <span className="lastName" style={{ color: "#3983fa" }}>
                  Braendgaard
                </span>
              </h1>

              <div className="w-100 d-flex">
                <Image
                  className="responsiveTitleImg"
                  alt="pronunciation"
                  src={pronunciation}
                />
              </div>
              <h1 className="mb-5 respSubtitle">Software Engineer</h1>
              <div className="d-flex respTitleButtonsCont">
                <Button
                  variant="dark"
                  className="font-weight-bold mx-2 respTitleButtons"
                  style={{ borderRadius: "0px" }}
                  href="#projects"
                >
                  PROJECTS
                </Button>
                <Button
                  variant="dark"
                  className="font-weight-bold mx-2 respTitleButtons"
                  style={{ borderRadius: "0px" }}
                  href="#about"
                >
                  ABOUT ME
                </Button>
                <Button
                  variant="dark"
                  className="font-weight-bold mx-2 respTitleButtons"
                  style={{ borderRadius: "0px" }}
                  href="#contact"
                >
                  GET IN TOUCH
                </Button>
              </div>
            </div>
          </div>
        </Animator>
      </ScrollPage>

      <div
        className="my-5"
        style={{ height: "20vh", width: "100vw", background: "white" }}
      ></div>
    </div>
  );
};

export default Title;
