import s from "../../styles/elements/footer.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <p>
        Created by
        <a
          href="https://github.com/yaoming16"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pablo Perez
        </a>
      </p>
      <p>
        Learn more
        <a
          href="https://yaoming16.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          about me
        </a>
      </p>
      <p>
        <a
          href="https://github.com/yaoming16/TOP-Shopping-Cart"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </a>
      </p>
    </footer>
  );
}

export default Footer;
