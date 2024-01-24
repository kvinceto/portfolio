import styles from "./Footer.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.footerContainer}>
      <a href="#"> Krasimir Iliev</a>
      <span>&copy; 2024 All Rights Reserved.</span>
      <span>
        <a
          href="https://github.com/kvinceto/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find this code repo on GitHub
        </a>
      </span>
    </section>
  );
}

export default Footer;
