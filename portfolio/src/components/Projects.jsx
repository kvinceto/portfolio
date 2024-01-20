import styles from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <section id="projects" className={styles.projectsContainer}>
      <h2>All the projects I have worked on</h2>
      <div className={styles.projectDiv}>
        <h3>
          <a
            href="https://github.com/airfanBG/SoftuniBMX/tree/Release_0.1.0"
            target="_blank"
            rel="noopener noreferrer"
            title="View GitHub repo"
          >
            Bicycle Management eXtreme- BMX <FontAwesomeIcon icon={faLink} />
          </a>
          <span>
            ASP.NET Core RESTfull api + React JS <br />A project created in a
            team of 4 developers as part of an internship (“Intern & Team Lead
            Academy - SoftUni 2023-2024”)
          </span>
        </h3>
        <p>
          The application serves the full functionality of a bicycle
          manufacturing enterprise, as well as its management.
        </p>
        <h4>Technologies used to build:</h4>
        <p>
          Back - End: <br />
          &#x25CD; C#, ASP.NET Core, Entity Framework Core, MS SQL
        </p>
        <p>
          Front - End: <br /> &#x25CD; React JS, Java Script, HTML, CSS
        </p>
      </div>
      <div className={styles.projectDiv}>
        <h3>
          <a
            href="https://github.com/kvinceto/Vehicle-Manager-Platform"
            target="_blank"
            rel="noopener noreferrer"
            title="View GitHub repo"
          >
            Vehicle Manager Platform <FontAwesomeIcon icon={faLink} />
          </a>
          <span>
            ASP.NET Core MVC <br />
            Project created as a thesis to complete the course of C# Web
            developer at SoftUni
          </span>
        </h3>
        <p>
          Vehicle-Manager-Platform (VMP) is a web application for managing
          waybills of vehicles and tracking upcoming maintenance checks. It
          supports the automatic calculation of fuel costs for a certain vehicle
          and setting notifications for upcoming periodic costs.
        </p>
        <h4>Technologies used to build:</h4>
        <p>
          Back - End: <br />
          &#x25CD; C#, ASP.NET Core, Entity Framework Core, MS SQL
        </p>
        <p>
          Front - End: <br /> &#x25CD; Razor pages, Bootstrap, HTML, CSS
        </p>
      </div>
      <div className={styles.projectDiv}>
        <h3>
          <a
            href="https://github.com/kvinceto/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            title="View GitHub repo"
          >
            Portfolio site <FontAwesomeIcon icon={faLink} />
          </a>
          <span>
            React JS Application <br />
            Project created as my personal portfolio
          </span>
        </h3>
        <p>A React JS portfolio / CV site</p>
        <h4>Technologies used to build:</h4>
        <p>
          Front - End: <br /> &#x25CD; React JS, Java Script, HTML, CSS
        </p>
      </div>
      <h2>My professional experience</h2>
      <div className={styles.projectDiv}>
        <h3>Intern & Team Lead Academy - SoftUni 2023-2024</h3>
        <p>
          Duration: <span>11.2023 - 01.2024</span>
        </p>
        <p>
          Position: <span>Fullstack developer</span>
        </p>
        <p>
          Info:
          <span>
            An internship organised by{" "}
            <a
              href="https://softuni.bg/"
              target="_blank"
              rel="noopener noreferrer"
              title="View website"
            >
              SoftUni
            </a>{" "}
            and{" "}
            <a
              href="https://podkrepi.bg/"
              target="_blank"
              title="View website"
              rel="noopener noreferrer"
            >
              Podkrepi.bg
            </a>{" "}
            for Junior Software Developers and Junior Team Leaders.
          </span>
        </p>
        <p>
          <a href="" target="_blank" rel="noopener noreferrer">
            Certificate
          </a>
        </p>
      </div>
      <div className={styles.projectDiv}>
        <h3>
          <a
            href="https://411locals.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="View company site"
          >
            411 Locals <FontAwesomeIcon icon={faLink} />
          </a>
        </h3>
        <p>
          Duration: <span>01.2023 - currently working here</span>
        </p>
        <p>
          Position: <span>Accounting agent</span>
        </p>
        <p>
          Info:
          <span>
            An international marketing company specializing in building and
            maintaining an online presence for their clients.
          </span>
        </p>
      </div>
    </section>
  );
}

export default Projects;
