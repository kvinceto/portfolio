import React, { useEffect, useRef } from "react";
import styles from "../components/Home.module.css";
import Typed from "typed.js";

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typedOptions = {
      strings: ["C# Developer", "Software Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    typedRef.current = new Typed(".typing", typedOptions);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <section id="home" className={styles.homeContainer}>
      <div className={styles.text1}>Hello, This is</div>
      <div className={styles.text2}>Krasimir Iliev</div>
      <div className={styles.text3}>
        And I'm a <span className="typing"></span>
      </div>
    </section>
  );
}

export default Home;
