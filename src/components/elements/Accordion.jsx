import { useState, useRef, useEffect } from "react";
import { expandSVG } from "../../utils/svg";
import s from "../../styles/elements/accordion.module.css";

function Accordion({ content, title, startOpen = true }) {
  const [isOpen, setIsOpen] = useState(startOpen); // Initialize with startOpen
  const contentEl = useRef(null);

  // Update height when content changes or when opening/closing
  useEffect(() => {
    if (contentEl.current && isOpen) {
      contentEl.current.style.height = `${contentEl.current.scrollHeight}px`;
    } else if (contentEl.current) {
      contentEl.current.style.height = "0px";
    }
  }, [content, isOpen]);

  return (
    <section className={`${s.accordionItem} ${isOpen ? s.active : ""}`}>
      <button
        type="button"
        className={s.accordionTitle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`${isOpen ? "Collapse" : "Expand"} ${title} section`}
      >
        <h2 className={s.title}>{title}</h2>
        <span
          aria-label={isOpen ? "Collapse Section" : "Expand Section"}
          className={`${s.svgSpan} ${isOpen ? s.rotate : ""}`}
        >
          {expandSVG}
        </span>
      </button>
      <div ref={contentEl} className={s.accordionContent}>
        <div className={s.content}>{content}</div>
      </div>
    </section>
  );
}

export default Accordion;
