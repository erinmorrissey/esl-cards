import React from "react";
import "../styles/Card.css";

function Card({ props: { imageUrl, name, set, text, type } }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <div className="description">
        <p>
          <span>Name</span>
          {name}
        </p>
        <p>
          <span>Set Name</span>
          {set.name}
        </p>
        <p>
          <span>Type</span>
          {type}
        </p>
        {text && (
          <p>
            <span>Text</span>
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
