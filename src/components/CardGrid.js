import React, {useState} from 'react';
import "../css/cardgrid.css";

function CardGrid(props) {
    return (
      <div className="card">
        <div className="card__body">
          <img src={props.img} class="card__image" />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
          <p className="card__skills">{props.skills}</p>
        </div>
        <div id="button__div">
          <a href={props.link1} target="_blank">
            <button className="card__btn">
              {props.btn1}
            </button>
          </a>
          <a href={props.link2} target="_blank">
            <button className="card__btn">
              {props.btn2}
            </button>
          </a>
        </div>
      </div>
    );
  }
  
export default CardGrid;