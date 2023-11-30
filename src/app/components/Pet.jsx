import React from "react";
import { Link } from "react-router-dom";

const Pet = ({ animal, name, breed, location, image, id }) => {
  let img = "";
  if (image.includes("example")) {
    img = "https://placehold.co/600x400";
  } else {
    img = image;
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link to={`/info/${id}`} className="pet">
      <div className="image-container">
        <img src={img} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
