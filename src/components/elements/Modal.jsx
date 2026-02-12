import { useEffect, useRef } from "react";

import s from "../../styles/elements/modal.module.css";

import Carousel from "./Carousel";
import Comment from "./Comment";

import { closeSVG } from "../../utils/svg";

function Modal({ info, open = false, setOpen }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  //if there is only one img for the item we dont need a carousel and just use an img tag. If no images we will use thumbnail.
  let carouselOrOneImg;
  if (info.images.length > 1) {
    carouselOrOneImg = <Carousel itemName={info.title} photos={info.images} />;
  } else {
    carouselOrOneImg = (
      <img
        src={info.images.length === 1 ? info.images[0] : info.thumbnail}
        alt={info.title}
      />
    );
  }

  return (
    <dialog className={s.dialog} closedby="any" ref={ref}>
      <button
        className="close-modal-btn close-btn"
        autoFocus
        onClick={() => setOpen(false)}
      >
        {closeSVG}
      </button>
      <article>
        <header>
          {carouselOrOneImg}

          <h1>{info.title}</h1>
        </header>

        <section aria-labelledby="product-details">
          <h2 id="product-details">Product Details</h2>
          <p>{info.description}</p>
          <dl>
            {info.brand ? (
              <>
                <dt>Brand</dt>
                <dd>{info.brand}</dd>
              </>
            ) : null}
            <dt>Price</dt>
            <dd>{info.price}</dd>
            <dt>Stock</dt>
            <dd>{info.availabilityStatus}</dd>
            {info.dimensions?  (
              <>
                <dt>Width</dt>
                <dd>{info.dimensions.width}</dd>
                <dt>Height</dt>
                <dd>{info.dimensions.height}</dd>
                <dt>Depth</dt>
                <dd>{info.dimensions.depth}</dd>
              </>
            ):null}
          </dl>
        </section>
        <aside aria-labelledby="reviews-heading">
          <h2>User Reviews</h2>
          {info.reviews.map((review, index) => (
            <Comment
              info={review}
              commentIndex={index}
              key={`review-${info.id}-${index}`}
            />
          ))}
        </aside>
      </article>
    </dialog>
  );
}

export default Modal;
