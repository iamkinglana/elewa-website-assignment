import React from 'react';
import  "./Introduction.css"

interface DataItem {
  heading: string;
  description: string;
}

const data: DataItem[] = [
  {
    heading: "Trade, not aid",
    description: "Southern innovations addressing global problems."
  }
];

const Introduction: React.FC = () => {
  return (
    <div className="introduction-container">
      <div className="introduction">
        {data.map((item, index) => (
          <div key={index}>
            <h3>{item.heading}</h3>
            <h2>{item.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
