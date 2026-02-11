import { useEffect, useState } from "react";
import s from "../../styles/elements/carousel.module.css";

import { previousArrowSVG, nextArrowSVG } from "../../utils/svg";

function Carrousel({ photos, itemName }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = (direction = 1) => {
    if (currentIndex === photos.length - 1 && direction > 0) {
      return setCurrentIndex(0);
    }
    if (currentIndex === 0 && direction < 0) {
      return setCurrentIndex(photos.length - 1);
    }
    return setCurrentIndex(currentIndex + 1 * direction);
  };

  useEffect(() => {
    // Repeat carouselInfiniteScroll every 3 seconds
    const interval = setInterval(() => {
      carouselInfiniteScroll(1);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className={s.carouselContainer} aria-label="Product Images">
      <button
        onClick={() => carouselInfiniteScroll(-1)}
        className={`${s.carBtn} ${s.carBtnLeft}`}
      >
        {previousArrowSVG}
      </button>
      
      {photos.map((photo, index) => (
        <div className={s.carouselItem} key={photo}>
          <img
            className={s.img}
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            src={photo}
            alt={itemName}
          />
        </div>
      ))}
      <button
        onClick={() => carouselInfiniteScroll(1)}
        className={`${s.carBtn} ${s.carBtnRight}`}
      >
        {nextArrowSVG}
      </button>
    </section>
  );
}

export default Carrousel;
