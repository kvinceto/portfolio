import styles from "./App.module.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <div className={styles.siteContainer}>
      <Navigation />
      <Home />
      <About />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
