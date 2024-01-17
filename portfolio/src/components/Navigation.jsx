import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <section className={styles.navContainer}>
      <p className={styles.logo}>
        <a href="#home">Portfolio</a>
      </p>
      <ul>
        <li>
          <a href="#home" title="Go to the Home section">
            Home
          </a>
        </li>
        <li>
          <a href="#about" title="Go learn about me">
            About
          </a>
        </li>
        <li>
          <a href="#education" title="Go and reed about my education">
            Education
          </a>
        </li>
        <li>
          <a href="#skills" title="View my technical and soft skills">
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            title="Go check out the projects I have worked on"
          >
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" title="Go and see how to contact me">
            Contact
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Navigation;
