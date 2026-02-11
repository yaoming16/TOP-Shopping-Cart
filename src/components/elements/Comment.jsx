import { fullStarSVG, emptyStarSVG } from "../../utils/svg";

function stars(rating, commentIndex) {
  const maxStars = 5;
  let fullStars = rating;

  return new Array(maxStars).fill(null).map((i, index) => {
    return (
      <span key={`c-${commentIndex}-s-${index}`}>
        {index < rating ? fullStarSVG : emptyStarSVG}
      </span>
    );
  });
}

function Comment({ info, commentIndex }) {
  return (
    <article>
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
