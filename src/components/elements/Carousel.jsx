import { useEffect, useState } from "react";
import s from "../../styles/elements/carousel.module.css";

import { previousArrowSVG, nextArrowSVG } from "../../utils/svg";

function Carrousel({ photos, itemName }) {
  const data = ["1", "2", "3"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = (direction = 1) => {
    if (currentIndex === data.length - 1 && direction > 0) {
      return setCurrentIndex(0);
    }
    if (currentIndex === 0 && direction < 0) {
      return setCurrentIndex(data[data.length - 1]);
    }
    return setCurrentIndex(currentIndex + 1 * direction);
  };

  useEffect(() => {
    // Repeat carouselInfiniteScroll every 3 seconds
    const interval = setInterval(() => {
      carouselInfiniteScroll(1);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className={s.carouselContainer}>
      {photos.map((photo, index) => (
        <div className={s.carouselItem}>
          <button onClick={() => carouselInfiniteScroll(-1)} className={`${s.carBtn} ${s.carBtnLeft}`}>
            {previousArrowSVG}
          </button>
          <img className={s.img}
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}
            src={photo}
            alt={itemName}
          />
          <button onClick={() => carouselInfiniteScroll(1)} className={`${s.carBtn} ${s.carBtnRight}`}>
            {nextArrowSVG}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Carrousel;
