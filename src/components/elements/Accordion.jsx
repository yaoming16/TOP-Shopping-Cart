import { useState, useRef } from "react";
import {expandSVG} from "../../utils/svg";
import s from  "../../styles/elements/accordion.module.css"

function Accordion({ content, title }) {
  // State to open/close
  const [isOpen, setIsOpen] = useState(false);

  //Ref to mesure height
  const contentEl = useRef(null);

  let currentHeight = contentEl.current?.scrollHeight || 0;

  return (
    <section className={`${s.accordionItem} ${isOpen ? s.active : ""}`}>
      <button
        type="button"
        className={s.accordionTitle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`Expand ${title} section`}
      >
        <h2>{title}</h2>
        <span aria-label={isOpen? "Collapse Section" : "Expand Section"} className={`${s.svgSpan} ${isOpen? s.rotate :""}`} >{expandSVG}</span>
      </button>
      <div
        ref={contentEl}
        className={s.accordionContent}
        style={{ height: isOpen ? currentHeight : 0 }}
      >
        <div className={s.content}>{content}</div>
      </div>
    </section>
  );
}

export default Accordion;