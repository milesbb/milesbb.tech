import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";

import earthCover from "../../assets/earth/earthmain.png";
import earthSearchImg from "../../assets/earth/search.png";
import earthResultsImg from "../../assets/earth/results.png";

import botCover from "../../assets/artbot/botmain.png";
import botGreeting from "../../assets/artbot/bothello.png";
import botProduct from "../../assets/artbot/botproduct.png";
import botArtist from "../../assets/artbot/botartist.png";

import linkedCover from "../../assets/linkedin/postpage.png";
import linkedNewPost from "../../assets/linkedin/newpost.png";
import linkedUser from "../../assets/linkedin/userpage.png";
import linkedOtherUser from "../../assets/linkedin/otheruser.png";

import spotifyCover from "../../assets/spotify/main.png";
import spotifyAlbum from "../../assets/spotify/album.png";
import spotifyArtist from "../../assets/spotify/artist.png";
import spotifySearch from "../../assets/spotify/search.png";
import spotifyLogin from "../../assets/spotify/login.png";
import spotifyCreateAccount from "../../assets/spotify/createaccount.png";

import "./Projects.css";
import { useState } from "react";

const ProjectsSection = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  return (
    <div
      style={{
        width: "100vw",

        background: "white",
      }}
      className="d-flex flex-column py-5 mb-4"
    >
      <h2 className="text-center mx-auto my-5">PROJECTS</h2>
      <h3 className="text-center mx-auto my-3">Click or tap one to find out more...</h3>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={6} className="d-flex">
            <div
              className="mb-5 container1 w-75 mx-auto"
              style={{ cursor: "pointer" }}
              onClick={handleShow1}
            >
              <Image
                alt="earth web3 project"
                src={earthCover}
                className="image1 mx-auto w-100"
              />
              <div className="middle1 d-flex font-weight-bold text-center text">
                React Three Fiber Weather App
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex">
            <div
              className="mb-5 container2 w-75 mx-auto"
              style={{ cursor: "pointer" }}
              onClick={handleShow2}
            >
              <Image
                alt="artbot aiml project"
                src={botCover}
                className="image2 mx-auto w-100"
              />
              <div className="middle2 d-flex font-weight-bold text-center text">
                'Artbot' Chatbot for ecommerce website
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="d-flex">
            <div
              className="mb-5 container3 w-75 mx-auto"
              style={{ cursor: "pointer" }}
              onClick={handleShow3}
            >
              <Image
                alt="linkedin react project"
                src={linkedCover}
                className="image3 mx-auto w-100"
              />
              <div className="middle3 d-flex font-weight-bold text-center text">
                LinkedIn React Recreation
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex">
            <div
              className="mb-5 container4 w-75 mx-auto"
              style={{ cursor: "pointer" }}
              onClick={handleShow4}
            >
              <Image
                alt="spotify project"
                src={spotifyCover}
                className="image4 mx-auto w-100"
              />
              <div className="middle4 d-flex font-weight-bold text-center text">
                Spotify Recreation
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Earth modal */}

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header>
          <Modal.Title className="mx-auto">Weather Finder App</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center">
            Interactive React Weather App using Open Weather API to load weather
            data on user search.
          </p>
          <Image
            alt="weather search"
            src={earthSearchImg}
            style={{ width: "100%" }}
          />
          <p className="text-center">
            Also including react three fiber + drei (3js react) rendered
            rotateable animated Earth.
          </p>
          <Image
            alt="weather results"
            src={earthResultsImg}
            style={{ width: "100%" }}
          />
          <p className="text-center">
            Weather data processed and displayed with dynamic weather and
            country icons.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </Button>
          <Button
            variant="dark"
            href="https://github.com/milesbb/Weather-Finder-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Artbot modal */}

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header>
          <Modal.Title className="mx-auto">Artbot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center">
            Paid work to create an AI Chatbot for an art supply company. I used
            AIML, JS, HTML and integrated with shopify and CI/CD through native
            PandoraBots pipeline.
          </p>
          <Image
            alt="chatbot greeting"
            src={botGreeting}
            style={{ width: "100%" }}
          />
          <p className="text-center">
            The bot sifts through user input to determine a type of art supply
            product they are searching for/curious about/may be best for their
            situation. It then returns an interactive carousel with suggestions
            of products in the store that may interest the user.
          </p>
          <Image
            alt="chatbot product help"
            src={botProduct}
            style={{ width: "100%" }}
          />
          <p className="text-center">
            In addition to product customer support, the bot provides
            information on different artists/genres to follow in the theme of
            the art supply store
          </p>
          <Image
            alt="chatbot artist info"
            src={botArtist}
            style={{ width: "100%" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </Button>
          <Button
            variant="dark"
            href="https://github.com/milesbb/Art-Bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Linkedin modal */}

      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header>
          <Modal.Title className="mx-auto">
            React LinkedIn Recreation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center">
            React LinkedIn Recreation made as lead of a small team in an
            EPICODE/StriveSchool build week
          </p>
          <Image
            alt="linkedin posts page recreation"
            src={linkedCover}
            style={{ width: "100%" }}
          />
          <p className="text-center">
            Uses React, Redux, React Bootstrap, and CRUD API use e.g. loading +
            CRUD for posts with images and pagination (above), or ...
          </p>
          <Image
            alt="linkedin new post recreation"
            src={linkedNewPost}
            style={{ width: "100%" }}
          />
          <p className="text-center">
            ...loading and CRUD for profiles and experiences
          </p>
          <Image
            alt="linkedin user page recreation"
            src={linkedUser}
            style={{ width: "100%" }}
          />
          <Image
            alt="linkedin other user page recreation"
            src={linkedOtherUser}
            style={{ width: "100%" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </Button>
          <Button
            variant="dark"
            href="https://github.com/milesbb/Wk12-Build-Week"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </Button>
        </Modal.Footer>
      </Modal>

      {/* spotify modal */}

      <Modal show={show4} onHide={handleClose4}>
        <Modal.Header>
          <Modal.Title className="mx-auto">Spotify Recreation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center">
            Spotify recreation using pure JS/HTML/CSS using deezer API as lead
            in EPICODE/Strive School buildweek
          </p>
          <Image
            alt="spotify cover rec"
            src={spotifyCover}
            style={{ width: "100%" }}
          />
          <p className="text-center">
            CSS Animations and dynamic footer playbar that changes and plays
            song when song clicked
          </p>
          <Image
            alt="spotify albums page rec"
            src={spotifyAlbum}
            style={{ width: "100%" }}
          />
          <p className="text-center">
            When album clicked it loads album data and songs into an albums page
            using deezer api
          </p>
          <Image
            alt="spotify artist page rec"
            src={spotifyArtist}
            style={{ width: "100%" }}
          />
          <p className="text-center">
            Similarly when an artist name is clicked it loads artist data and
            most popular songs into albums page using deezer api
          </p>
          <Image
            alt="spotify search rec"
            src={spotifySearch}
            style={{ width: "100%" }}
          />
          <p className="text-center">Searchable database that displays results with same playable and linkable functionality</p>
          <Image
            alt="spotify login rec"
            src={spotifyLogin}
            style={{ width: "100%" }}
          />
          <p className="text-center">Login functionality included with error catching to prevent incomplete/incorrect/nonexistent userdata</p>
          <Image
            alt="spotify create account rec"
            src={spotifyCreateAccount}
            style={{ width: "100%" }}
          />
          <p className="text-center">Users can create their account and use their login details to log in which will then persist between pages</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </Button>
          <Button
            variant="dark"
            href="https://github.com/milesbb/U2-Wk8-BuildWeek-Spotify"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectsSection;
