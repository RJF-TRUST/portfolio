import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jacky Fan </span>
            from <span className="purple"> Auckland, Aotearoa.</span>
            <br />
            I studied CompSci at Auckland University of Technology and
            <br />
            I am currently employed as a Cloud Engineer at <span className="purple"> Amazon Web Services.</span>
            <br />
            🏅 AWS CloudFormation SME - <span className="purple"> 1st SME in Aotearoa</span>
            <br />
            🏅 AWS CodeSuite SME  - <span className="purple"> 1st achieved 2*SMEs in Aotearoa</span>
            <br />
            <br />
            Apart from work, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              🛫 travelling 
            </li>
            <li className="about-activity">
              🎿 skiing 
            </li>
            <li className="about-activity">
              📸 photography 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work Hard, have fun, make history."{" "}
          </p>
          <footer className="blockquote-footer">Jeff Bezos</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
