import React from "react";
import "./CardWoman.scss";
import { useParams } from "react-router-dom";
import cards from "./CardWomanTitleContent";

const Card = () => {
  let { id } = useParams();
  const card = cards[id];
  return (
    <section
      className="cardWoman-card"
      style={{
        backgroundImage: `url(${card.img})`
      }}
    >
      <article className="cardWoman-card-content">
        <h1 style={{ color: card.color }}>{card.title} </h1>
        <p>{card.sub}</p>
      </article>

      <footer className="cardWoman-card-footer">
       
      </footer>
    </section>
  );
};

export default Card;
