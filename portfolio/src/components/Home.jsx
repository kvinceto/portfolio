import React, { useState, useEffect } from "react";
import styles from "../components/Home.module.css";

function Home() {
  const [developerType, setDeveloperType] = useState("C# Web Developer");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDeveloperType((prevType) =>
        prevType === "C# Web Developer"
          ? "Software Developer"
          : "C# Web Developer"
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className={styles.homeContainer}>
      <div className={styles.text1}>Hello, This is</div>
      <div className={styles.text2}>Krasimir Iliev</div>
      {developerType === "Software Developer" && (
        <div className={styles.text3}>
          And I'm a <span>{developerType}</span>
        </div>
      )}
      {developerType === "C# Web Developer" && (
        <div className={styles.text4}>
          And I'm a <span>{developerType}</span>
        </div>
      )}
    </section>
  );
}

export default Home;
