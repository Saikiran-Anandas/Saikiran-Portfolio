import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import todo from "../../Assets/Projects/to-do.jpg";
import clock from "../../Assets/Projects/clock.jpg";
import color from "../../Assets/Projects/color-generator.jpg";
import spotify from "../../Assets/Projects/spotify.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">PROJECTS</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              img={todo}
              isBlog={false}
              title="To-Do Application"
              description="
              ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. A simple to-do application which adds a task and Once done can be deleted.
              Which is made using HTML, CSS, JavaScript and React framework
              "
              link="https://to-do-app-kappa-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img={clock}
              isBlog={false}
              title="Clock App"
              description="The Clock is one of the best clock apps available. It comes with multiple features that work like a clock, stopwatch, alarm clock, and time. This app also offers clock widgets that make the setting alarm and date simpler. This Web app was made using JavaScript and some of the React hooks and Components."
              link="https://clock-gray-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img={color}
              isBlog={false}
              title="Color Generator"
              description="A color generator is the set of colors that a designer chooses to create a visual style for an image, graphic or website – basically any design they do. It's also a powerful user experience tool that sets the tone of the design, so being able to create an effective color palette makes you a sneaky master of manipulation."
              link="https://color-generator1145.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img={spotify}
              isBlog={false}
              title="Spotify Clone"
              description="A Spotify Clone is simple Front-End web Application which looks same as the Official Spotify Web Interface, This is the only Front-End part of the Spotify that means, No one can login to it or sign-up. And they can't even listen to the Songs, Podcasts, Playlists and etc."
              link="https://spotify-clone-coral-rho.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
