import styles from "./Navigation.module.css";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  return (
    <section className={styles.navContainer}>
      <p className={styles.logo} onClick={navigate("/")}>
        Portfolio
      </p>
      <ul>
        <li>
          <a href="" onClick={navigate("Home")}>
            Home
          </a>
        </li>
        <li>
          <a href="" onClick={navigate("About")}>
            About
          </a>
        </li>
        <li>
          <a href="">Education</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </section>
  );
}

export default Navigation;
