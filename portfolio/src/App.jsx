import styles from "./App.module.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";

function App() {
  return (
    <div className={styles.siteContainer}>
      <Navigation />
      <Home />
      <About />
    </div>
  );
}

export default App;
