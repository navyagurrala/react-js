import React, { useState } from 'react';

function AddingCircles() {
  const [circles, setCircles] = useState([]);

  const addCircle = () => {
    setCircles([...circles, {fillcolor: false }]);
  };

  const circleClick = (index) => {
    const updatedCircles = circles.map((circle, ind) =>
      ind === index ? { ...circle,fillcolor: !circle.fillcolor } : circle
    );
    setCircles(updatedCircles);
  };

  return (
    <>
      <button onClick={addCircle}>Add Circles</button>
      <h2>Total circles {circles.length}</h2>
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            width: 100,
            height: 100,
            border: '4px solid red',
            borderRadius: '50%',
            backgroundColor: circle.fillcolor ? 'blue' : 'white', // Change the background color
          }}
          onClick={() => circleClick(index)}
        ></div>
      ))}
    </>
  );
}

export default AddingCircles;
