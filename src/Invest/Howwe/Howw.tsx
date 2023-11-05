import React from 'react';

const data = [
  {
    "heading": "How we see it differently",
    "description": "The global South is rapidly catching up with the 'developed' world. It's time for you to get to know the rapid development, innovation and drive going on in this part of the world (East-Africa, South Asia and beyond)."
  }
];

const Howwe = () => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.heading}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Howwe;
