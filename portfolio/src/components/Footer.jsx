import styles from "./Footer.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.footerContainer}>
      <a href="#"> Krasimir Iliev</a>
      <span>&copy; 2023 All Rights Reserved.</span>
    </section>
  );
}

export default Footer;
