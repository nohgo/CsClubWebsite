import React from "react";
import "../App.css/";
import { timeline } from "../assets";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function Roadmap() {
  const [reactActive, setReact] = useState(false);
  const [gameActive, setGame] = useState(false);
  const [fullActive, setFull] = useState(false);

  const reactSub = [
    "Learn HTML, CSS, JS",
    "Use React to create portfolio",
    "Learn git for version control",
  ];

  const gameSub = [
    "Continue to work with fundemental languages",
    "Learn Node and ExpressJS",
    "Integrate with React to create a full browser based game",
  ];

  const fullstackSub = [
    "Learn MongoDB for database functionality",
    "Use MERN to create a fullstack web app",
    "Deploy app using webhosting site",
  ];
  return (
    <>
      <div className="page roadmap">
        <h1 id="Roadmap" className="page-header">
          Roadmap
        </h1>
        <div className="timeline">
          <div className="timeline-section">
            <TimelineTitle
              onMouseEnter={() => setReact(true)}
              onMouseLeave={() => setReact(false)}
              text="React"
              stage="react"
            />
            <TimelineTitle
              onMouseEnter={() => setGame(true)}
              onMouseLeave={() => setGame(false)}
              text="Game"
              stage="game"
            />
            <TimelineTitle
              onMouseEnter={() => setFull(true)}
              onMouseLeave={() => setFull(false)}
              text="Fullstack"
              stage="fullstack"
            />
          </div>
          <img src={timeline} />
          <div className="timeline-section">
            <TimelineSubtext
              elementState={reactActive}
              text={reactSub}
              stage="react-sub"
            />
            <TimelineSubtext
              elementState={gameActive}
              text={gameSub}
              stage="game-sub"
            />
            <TimelineSubtext
              elementState={fullActive}
              text={fullstackSub}
              stage="fullstack-sub"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function TimelineSubtext({ text, stage, elementState }) {
  return (
    <div className="timeline-div">
      <CSSTransition in={elementState} timeout={500} classNames="subtext">
        <>
          <ul className={stage}>
            {text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      </CSSTransition>
    </div>
  );
}

function TimelineTitle({ text, stage, onMouseEnter, onMouseLeave }) {
  return (
    <div className="timeline-div">
      <h2
        className={stage}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {text}
      </h2>
    </div>
  );
}

export default Roadmap;
