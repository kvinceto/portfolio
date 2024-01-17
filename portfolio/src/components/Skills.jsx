import { useState } from "react";
import Popup from "./Popup.jsx";
import styles from "./Skills.module.css";
import csharp from "../../public/Csharp.png";
import aspnetcore from "../../public/aspnetcore.png";
import efcore from "../../public/efcore.png";
import sql from "../../public/sql.png";
import js from "../../public/js.png";
import htmlcss from "../../public/htmlcss.png";
import react from "../../public/react.png";
import problemsolving from "../../public/problemsolving.png";
import timeman from "../../public/timeman.png";
import adap from "../../public/adap.png";
import team from "../../public/team.jfif";
import comunication from "../../public/comunication.jfif";

function Skills() {
  const [isPopupOpen1, setPopupOpen1] = useState(false);
  const [isPopupOpen2, setPopupOpen2] = useState(false);
  const [isPopupOpen3, setPopupOpen3] = useState(false);
  const [isPopupOpen4, setPopupOpen4] = useState(false);
  const [isPopupOpen5, setPopupOpen5] = useState(false);
  const [isPopupOpen6, setPopupOpen6] = useState(false);
  const [isPopupOpen7, setPopupOpen7] = useState(false);
  const [isPopupOpen8, setPopupOpen8] = useState(false);
  const [isPopupOpen9, setPopupOpen9] = useState(false);
  const [isPopupOpen10, setPopupOpen10] = useState(false);
  const [isPopupOpen11, setPopupOpen11] = useState(false);
  const [isPopupOpen12, setPopupOpen12] = useState(false);

  const handleImageClick1 = () => setPopupOpen1(true);
  const handleClosePopup1 = () => setPopupOpen1(false);
  const handleImageClick2 = () => setPopupOpen2(true);
  const handleClosePopup2 = () => setPopupOpen2(false);
  const handleImageClick3 = () => setPopupOpen3(true);
  const handleClosePopup3 = () => setPopupOpen3(false);
  const handleImageClick4 = () => setPopupOpen4(true);
  const handleClosePopup4 = () => setPopupOpen4(false);
  const handleImageClick5 = () => setPopupOpen5(true);
  const handleClosePopup5 = () => setPopupOpen5(false);
  const handleImageClick6 = () => setPopupOpen6(true);
  const handleClosePopup6 = () => setPopupOpen6(false);
  const handleImageClick7 = () => setPopupOpen7(true);
  const handleClosePopup7 = () => setPopupOpen7(false);
  const handleImageClick8 = () => setPopupOpen8(true);
  const handleClosePopup8 = () => setPopupOpen8(false);
  const handleImageClick9 = () => setPopupOpen9(true);
  const handleClosePopup9 = () => setPopupOpen9(false);
  const handleImageClick10 = () => setPopupOpen10(true);
  const handleClosePopup10 = () => setPopupOpen10(false);
  const handleImageClick11 = () => setPopupOpen11(true);
  const handleClosePopup11 = () => setPopupOpen11(false);
  const handleImageClick12 = () => setPopupOpen12(true);
  const handleClosePopup12 = () => setPopupOpen12(false);

  return (
    <section id="skills" className={styles.skillsContainer}>
      <h2>Skills</h2>
      <div className={styles.innerSkilsContainer}>
        <div>
          Technical Skills
          <ul>
            <li>
              <img onClick={handleImageClick1} src={csharp} alt="CSharp logo" />
              <span>C# Programming</span>
            </li>
            {isPopupOpen1 && (
              <Popup imageUrl={csharp} onClose={handleClosePopup1} />
            )}
            <li>
              <img
                onClick={handleImageClick2}
                src={aspnetcore}
                alt="ASP.NET Core logo"
              />
              ASP.NET Core: (MVC and RESTful APIs)
            </li>
            {isPopupOpen2 && (
              <Popup imageUrl={aspnetcore} onClose={handleClosePopup2} />
            )}
            <li>
              <img
                onClick={handleImageClick3}
                src={efcore}
                alt="Entity Framework Core logo"
              />
              Entity Framework Core
            </li>
            {isPopupOpen3 && (
              <Popup imageUrl={efcore} onClose={handleClosePopup3} />
            )}
            <li>
              <img onClick={handleImageClick4} src={sql} alt="MS SQL logo" />
              MS SQL (T-SQL)
            </li>
            {isPopupOpen4 && (
              <Popup imageUrl={sql} onClose={handleClosePopup4} />
            )}
            <li>
              <img
                onClick={handleImageClick5}
                src={js}
                alt="Java Script logo"
              />
              Java Script
            </li>
            {isPopupOpen5 && (
              <Popup imageUrl={js} onClose={handleClosePopup5} />
            )}
            <li>
              <img
                onClick={handleImageClick6}
                src={htmlcss}
                alt="HTML & CSS logo"
              />
              HTML & CSS
            </li>
            {isPopupOpen6 && (
              <Popup imageUrl={htmlcss} onClose={handleClosePopup6} />
            )}
            <li>
              <img
                onClick={handleImageClick7}
                src={react}
                alt="React JS logo"
              />
              React JS
            </li>
            {isPopupOpen7 && (
              <Popup imageUrl={react} onClose={handleClosePopup7} />
            )}
          </ul>
        </div>
        <div>
          Soft Skills
          <ol>
            <li>
              <img onClick={handleImageClick8} src={problemsolving} alt="" />
              Problem-solving:
            </li>
            {isPopupOpen8 && (
              <Popup imageUrl={problemsolving} onClose={handleClosePopup8} />
            )}
            <li>
              <img onClick={handleImageClick9} src={timeman} alt="" />
              Time Management
            </li>
            {isPopupOpen9 && (
              <Popup imageUrl={timeman} onClose={handleClosePopup9} />
            )}
            <li>
              <img onClick={handleImageClick10} src={adap} alt="" />
              Adaptability
            </li>
            {isPopupOpen10 && (
              <Popup imageUrl={adap} onClose={handleClosePopup10} />
            )}
            <li>
              <img onClick={handleImageClick11} src={team} alt="" />
              Teamwork
            </li>
            {isPopupOpen11 && (
              <Popup imageUrl={team} onClose={handleClosePopup11} />
            )}
            <li>
              <img onClick={handleImageClick12} src={comunication} alt="" />
              Communication
            </li>
            {isPopupOpen12 && (
              <Popup imageUrl={comunication} onClose={handleClosePopup12} />
            )}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Skills;
