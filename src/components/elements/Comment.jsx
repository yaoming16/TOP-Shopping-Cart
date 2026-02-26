import { fullStarSVG, emptyStarSVG } from "../../utils/svg";

import s from "../../styles/elements/comment.module.css";

import { stars } from "../../utils/utils";

function Comment({ info, commentIndex }) {
  return (
    <article className={s.container}>
      <header>
        <h3>{info.reviewerName}</h3>
        <time dateTime={info.date}></time>
      </header>

      <div>
        <p>{info.comment}</p>
      </div>
      <footer>
        <div>{stars(info.rating, commentIndex)}</div>
      </footer>
    </article>
  );
}

export default Comment;
