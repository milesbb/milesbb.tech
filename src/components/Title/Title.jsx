import pronunciation from "../../assets/pronunciation.png";
import { Button, Image } from "react-bootstrap";
import "./title.css";

const Title = () => {
  return (
    <div style={{ width: "100vw", height: "90vh" }} className="d-flex">
      <div
        className="text-left position-relative mx-auto respTitleCont"
      >
        <h1 className="mt-4 font-weight-bold respTitle">
          Miles Bailey-<span className="lastName" style={{ color: "#3983fa" }}>Braendgaard</span>
        </h1>
        <div className="w-100 d-flex">
          <Image
            className="responsiveTitleImg"
            alt="pronunciation"
            src={pronunciation}
          />
        </div>
        <h1 className="mb-5 respSubtitle">
          Software Engineer
        </h1>
        <div className="d-flex respTitleButtonsCont">
          <Button
            variant="dark"
            className="font-weight-bold mx-2 respTitleButtons"
            style={{ borderRadius: "0px" }}
            href="#aboutMeId"
          >
            ABOUT ME
          </Button>
          <Button
            variant="dark"
            className="font-weight-bold mx-2 respTitleButtons"
            style={{ borderRadius: "0px" }}
            href="#getInTouch"
          >
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Title;
