import { Image } from "react-bootstrap";
import ptransfergif from "../../assets/croppedwebimg.gif";
import "./ProjectsSectionWithLink.css";

const ProjectsSectionWithLink = () => {
  return (
    <div
      style={{
        width: "100vw",
      }}
      className="d-flex flex-column py-5 mb-5"
    >
      <a
        href="https://github.com/milesbb/playlist-transfer-backend"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>Checkout my playlist transfer website project!</h3>
        <Image
          className="mt-2"
          style={{
            border: "2px solid #ddd",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            width: "48%",
          }}
          src={ptransfergif}
        />
      </a>
    </div>
  );
};

export default ProjectsSectionWithLink;
