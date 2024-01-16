import styles from "./App.module.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Education from "./components/Education";

function App() {
  return (
    <div className={styles.siteContainer}>
      <Navigation />
      <Home />
      <About />
      <Education />
    </div>
  );
}

export default App;
