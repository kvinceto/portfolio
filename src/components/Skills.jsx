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
import flutter from "../../public/flutter.png";
import dart from "../../public/dart.png";
import blazor from "../../public/blazor.jpeg";
import dapper from "../../public/dapper.png";
import firebase from "../../public/firebase.png";

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
  const [isPopupOpen13, setPopupOpen13] = useState(false);
  const [isPopupOpen14, setPopupOpen14] = useState(false);
  const [isPopupOpen15, setPopupOpen15] = useState(false);
  const [isPopupOpen16, setPopupOpen16] = useState(false);
  const [isPopupOpen17, setPopupOpen17] = useState(false);

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
  const handleImageClick13 = () => setPopupOpen13(true);
  const handleClosePopup13 = () => setPopupOpen13(false);
  const handleImageClick14 = () => setPopupOpen14(true);
  const handleClosePopup14 = () => setPopupOpen14(false);
  const handleImageClick15 = () => setPopupOpen15(true);
  const handleClosePopup15 = () => setPopupOpen15(false);
  const handleImageClick16 = () => setPopupOpen16(true);
  const handleClosePopup16 = () => setPopupOpen16(false);
  const handleImageClick17 = () => setPopupOpen17(true);
  const handleClosePopup17 = () => setPopupOpen17(false);

  return (
    <section id="skills" className={styles.skillsContainer}>
      <h2>Skills</h2>
      <div className={styles.innerSkilsContainer}>
        <div>
          <strong><em>Technical Skills</em></strong>
          <ul>
            {/* C# */}
            <li>
              <img onClick={handleImageClick1} src={csharp} alt="CSharp logo" />
              <span>C# Programming Language and .Net Framework</span>
            </li>
            {isPopupOpen1 && (
              <Popup imageUrl={csharp} onClose={handleClosePopup1} />
            )}
            {/* ASP.NET Core */}
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
            {/* Blazor */}
            <li>
              <img
                onClick={handleImageClick3}
                src={blazor}
                alt="Blazor logo"
              />
              Blazor (MVVM pattern)
            </li>
            {isPopupOpen3 && (
              <Popup imageUrl={blazor} onClose={handleClosePopup3} />
            )}
            {/* EF Core */}
            <li>
              <img
                onClick={handleImageClick4}
                src={efcore}
                alt="Entity Framework Core logo"
              />
              Entity Framework Core
            </li>
            {isPopupOpen4 && (
              <Popup imageUrl={efcore} onClose={handleClosePopup4} />
            )}
            {/* Dapper */}
            <li>
              <img
                onClick={handleImageClick5}
                src={dapper}
                alt="Dapper logo" />
              Dapper ORM
            </li>
            {isPopupOpen5 && (
              <Popup imageUrl={dapper} onClose={handleClosePopup5} />
            )}
            {/* MS SQL */}
            <li>
              <img
                onClick={handleImageClick6}
                src={sql}
                alt="MS SQL logo" />
              MS SQL (T-SQL)
            </li>
            {isPopupOpen6 && (
              <Popup imageUrl={sql} onClose={handleClosePopup6} />
            )}
            {/* Firebase */}
            <li>
              <img
                onClick={handleImageClick17}
                src={firebase}
                alt="Firebase logo" />
              Firebase
            </li>
            {isPopupOpen17 && (
              <Popup imageUrl={firebase} onClose={handleClosePopup17} />
            )}
            {/* JS */}
            <li>
              <img
                onClick={handleImageClick7}
                src={js}
                alt="Java Script logo"
              />
              JavaScript
            </li>
            {isPopupOpen7 && (
              <Popup imageUrl={js} onClose={handleClosePopup7} />
            )}
            {/* HTML CSS */}
            <li>
              <img
                onClick={handleImageClick8}
                src={htmlcss}
                alt="HTML & CSS logo"
              />
              HTML & CSS
            </li>
            {isPopupOpen8 && (
              <Popup imageUrl={htmlcss} onClose={handleClosePopup8} />
            )}
            {/* React */}
            <li>
              <img
                onClick={handleImageClick9}
                src={react}
                alt="React JS logo"
              />
              React JS
            </li>
            {isPopupOpen9 && (
              <Popup imageUrl={react} onClose={handleClosePopup9} />
            )}
            <li>
              <img
                onClick={handleImageClick10}
                src={flutter}
                alt="Flutter logo"
              />
              Flutter Framework
            </li>
            {isPopupOpen10 && (
              <Popup imageUrl={flutter} onClose={handleClosePopup10} />
            )}
            {/* Dart */}
            <li>
              <img
                onClick={handleImageClick11}
                src={dart}
                alt="Dart logo"
              />
              Dart Programming Language
            </li>
            {isPopupOpen11 && (
              <Popup imageUrl={dart} onClose={handleClosePopup11} />
            )}
          </ul>
        </div>
        <div>
          <strong><em>Soft Skills</em></strong>
          <ol>
            {/* PS */}
            <li>
              <img
                onClick={handleImageClick12}
                src={problemsolving}
                alt="Problem-solving image" />
              Problem-solving
            </li>
            {isPopupOpen12 && (
              <Popup imageUrl={problemsolving} onClose={handleClosePopup12} />
            )}
            {/* TM */}
            <li>
              <img
                onClick={handleImageClick13}
                src={timeman}
                alt="Time management image" />
              Time Management
            </li>
            {isPopupOpen13 && (
              <Popup imageUrl={timeman} onClose={handleClosePopup13} />
            )}
            {/* Adaptability */}
            <li>
              <img
                onClick={handleImageClick14}
                src={adap}
                alt="Adaptability image" />
              Adaptability
            </li>
            {isPopupOpen14 && (
              <Popup imageUrl={adap} onClose={handleClosePopup14} />
            )}
            {/* Teamwork */}
            <li>
              <img
                onClick={handleImageClick15}
                src={team}
                alt="Teamwork" />
              Teamwork
            </li>
            {isPopupOpen15 && (
              <Popup imageUrl={team} onClose={handleClosePopup15} />
            )}
            {/* Communication */}
            <li>
              <img
                onClick={handleImageClick16}
                src={comunication}
                alt="Communication image" />
              Communication
            </li>
            {isPopupOpen16 && (
              <Popup imageUrl={comunication} onClose={handleClosePopup16} />
            )}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Skills;
