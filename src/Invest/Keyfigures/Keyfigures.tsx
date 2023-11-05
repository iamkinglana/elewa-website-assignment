import React, { useState } from "react";
import historydetails from "./historydetails.json";
import { FaCircle } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

interface HistoryDetail {
  number: any; // Adjusted to number from string
  description: string;
  // Add more properties from your historydetails.json if needed
}

const History: React.FC<{}> = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextAchievement = () => {
    setCurrentIndex((prev) => (prev === historydetails.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="history-section">
      <div className="history-container">
        <h1>Key Figures</h1>
        <div className="timeline-container">
          <VerticalTimeline>
            {historydetails.map((achievement: HistoryDetail, index: number) => (
              <VerticalTimelineElement
                key={index}
                icon={<FaCircle />}
                className="timeline-content"
              >
                <div className="number">
                  <h3>{achievement.number}</h3>
                </div>
                <div className="description">
                  <p>{achievement.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <span onClick={nextAchievement}><BsArrowRightCircle /></span>
      </div>
    </div>
  );
};

export default History;
