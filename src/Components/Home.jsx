import React from "react";

const Home = () => {
  const imageStyle = {
    height: "25%", // Decreased height
    width: "50%",
  };

  return (
    <>
      <div className="image">
        <img src="san.JPG" alt="san.jpg" />
      </div>
      <div className="description">
        <h3 className="text-3xl font-bold underline ">hello guys!</h3>
      </div>
    </>
  );
};

export default Home;
