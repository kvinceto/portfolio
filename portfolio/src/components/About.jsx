import styles from "../components/About.module.css";
import profilePicture from "../../public/IMG_20230909_191105064_HDR.jpg";
import React, { useState, useEffect } from "react";
import CV from "../../public/cv.pdf";

function About() {
  const [developerType, setDeveloperType] = useState("C# Web Developer");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDeveloperType((prevType) =>
        prevType === "C# Web Developer"
          ? "Fullstack Developer"
          : "C# Web Developer"
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="about" className={styles.aboutContainer}>
      <div>
        <h2 className={styles.header}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.left}>
            <img src={profilePicture} alt="Profile picture of Krasimir Iliev" />
          </div>
          <div className={styles.right}>
            {developerType === "C# Web Developer" && (
              <div className={styles.textDinamic1}>
                I'm Krasimir and I'm a <span>{developerType}</span>
              </div>
            )}
            {developerType === "Fullstack Developer" && (
              <div className={styles.textDinamic2}>
                I'm Krasimir and I'm a <span>{developerType}</span>
              </div>
            )}
            <ul>
              <li>
                Enthusiastic junior Software Developer, eager to apply coding
                skills and learn from experienced professionals.
              </li>
              <li>Capable of mastering new technologies.</li>
              <li>
                Actively seeking a junior developer position in a supportive
                environment that encourages skill development.
              </li>
            </ul>
            <div className={styles.text3}>Why Work With Me</div>
            <ul>
              <li>
                I'am experienced in collaborating with individuals of diverse
                age groups, fostering effective communication and teamwork
                across various demographics.
              </li>
              <li>
                Cultivated a global perspective by working in an international
                company with a team spanning three continents.
              </li>
              <li>
                Proven ability to thrive in high-pressure situations,
                consistently delivering quality results and maintaining
                composure while working under tight deadlines.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.centeredLink}>
          <a href={CV} target="blank" download className={styles.buttonLink}>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
