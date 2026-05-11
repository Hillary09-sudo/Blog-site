import React from "react";

// About renders the blog logo and description.
// It is connected to App, which passes the image source and about text as props.
// If no image is provided, the component falls back to a placeholder image.
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
