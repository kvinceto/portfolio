import styles from "../components/Education.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <section id="education" className={styles.educationContainer}>
      <h2>My Education</h2>
      <div className={styles.sertificates}>
        <div className={styles.soft}>
          <ul>
            C# Web Delevoper - SoftUni
            <li>
              JS Front-End (October 2023)
              <a
                href="https://softuni.bg/certificates/details/199194/6c171f3b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              HTML & CSS (September 2023)
              <a
                href="https://softuni.bg/certificates/details/190840/2f8473a1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              ASP.NET Core Advanced (June 2023)
              <a
                href="https://softuni.bg/certificates/details/182207/a0110e9f"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              ASP.NET Core Fundamentals (May 2023)
              <a
                href="https://softuni.bg/certificates/details/184870/d5f226d6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              Algorithms Fundamentals with C# (May 2023)
              <a
                href="https://softuni.bg/certificates/details/176648/7501928c"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              Entity Framework Core (February 2023)
              <a
                href="https://softuni.bg/certificates/details/164768/c4732f9f"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              MS SQL (January 2023)
              <a
                href="https://softuni.bg/certificates/details/157691/0d43b89f"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              Data Structures Advanced with C# (December 2022)
              <a
                href="https://softuni.bg/certificates/details/153756/be73f656"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              Data Structures Fundamentals with C# (November 2022)
              <a
                href="https://softuni.bg/certificates/details/150337/280b7f87"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              C# OOP (October 2022)
              <a
                href="https://softuni.bg/certificates/details/150699/a5313be9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              C# Advanced (September 2022)
              <a
                href="https://softuni.bg/certificates/details/143906/a8666abb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              Programming Fundamentals with C# (May 2022)
              <a
                href="https://softuni.bg/certificates/details/139298/8a1f1f4c"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              Programming Basics (January 2022)
              <a
                href="https://softuni.bg/certificates/details/124256/3fdfd340"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
