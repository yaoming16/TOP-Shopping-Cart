import { useState } from "react";
import s from "../../styles/elements/itemCard.module.css";

function ItemCard({ info, manageClick }) {
  return (
    <li>
      <article
        className={s.card}
        role="button"
        tabIndex={0}
        onClick={() => manageClick(info)}
      >
        <img alt={info.title} src={info.thumbnail} className={s.img} />
        <div>
          <h3>{info.title}</h3>
          <p>{info.description}</p>
          <p>{"$ " + info.price}</p>
        </div>
      </article>
    </li>
  );
}

export default ItemCard;
