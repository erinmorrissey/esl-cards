import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.props.imageUrl} alt={props.props.name} />
      <div className="description">
        <p>
          <span>Name</span>
          {props.props.name}
        </p>
        <p>
          <span>Set Name</span>
          {props.props.set.name}
        </p>
        <p>
          <span>Type</span>
          {props.props.type}
        </p>
        {props.props.text && (
          <p>
            <span>Text</span>
            {props.props.text}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
