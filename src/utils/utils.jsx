import { fullStarSVG, emptyStarSVG } from "./svg";

export async function fetchData(url) {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export function findItemById(items, id) {
  return items.find((item) => item.id === id) || null;
}

export function stars(rating, commentIndex) {
  const maxStars = 5;

  return new Array(maxStars).fill(null).map((i, index) => {
    return (
      <span key={`c-${commentIndex}-s-${index}`}>
        {index < rating ? fullStarSVG : emptyStarSVG}
      </span>
    );
  });
}
