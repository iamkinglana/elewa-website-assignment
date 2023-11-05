import React, { useState } from "react";
// import "../../styles/history.css";
import elewa from "./elewa.json";
import { FaCircle } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

const Elewa_nv: React.FC<{}> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextHeading = () => {
    setCurrentIndex((prev) => (prev === elewa.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="history-section">
      <div className="elewa-container">
      <h1>Key Figures</h1>
      <div className="timeline-container">
        <VerticalTimeline>
          {elewa.map((heading, index) => (
            <VerticalTimelineElement
              key={index}
              icon={<FaCircle />}
              className="timeline-content"
            >
              <div className="image">
              <img src={heading.image}/>
            </div>
            <div className="heading">
              <p>{heading.heading}</p>
            </div>
            <div className="description">
              <p>{heading.description}</p>
            </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <span onClick={nextHeading}><BsArrowRightCircle /></span>
      </div>
    </div>
  )
}

export default Elewa_nv;
