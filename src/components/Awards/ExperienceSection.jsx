import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

const ExperienceSection = ({
  specialMarginClass,
  tooltip,
  websiteUrl,
  image,
  title,
  workplaceName,
  content,
}) => {
  return (
    <>
      <Row>
        <Col sm={12} md={4} className={specialMarginClass}>
          <div>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>{tooltip}</Tooltip>}
            >
              <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                {image}
              </a>
            </OverlayTrigger>
          </div>
        </Col>
        <Col sm={12} md={8}>
          <div className="p-4">
            <h4 className="mb-4">
              {title}
              {title && " -"}{" "}
              <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                <span>{workplaceName}</span>
              </a>
            </h4>
            {content}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ExperienceSection;
