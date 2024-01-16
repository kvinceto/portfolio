import styles from "./Navigation.module.css";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  return (
    <section className={styles.navContainer}>
      <p className={styles.logo} onClick={() => navigate("/")}>
        Portfolio
      </p>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </section>
  );
}

export default Navigation;
