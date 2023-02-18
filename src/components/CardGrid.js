import React from 'react';
import "../css/cardgrid.css";

function CardGrid(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} alt={props.title} className="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <div id="button__div">
        {props.link1 ? (
          <a href={props.link1} target="_blank" rel="noopener noreferrer">
            <button className="card__btn">{props.btn1}</button>
          </a>
        ) : null}
        {props.link2 ? (
          <a href={props.link2} target="_blank" rel="noopener noreferrer">
            <button className="card__btn">{props.btn2}</button>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default CardGrid;
