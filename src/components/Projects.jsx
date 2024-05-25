import styles from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import certific from "../../public/intern.pdf";

function Projects() {
  return (
    <section id="projects" className={styles.projectsContainer}>
      <h2>Here are some of the projects I have worked on</h2>
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
            ASP.NET Core RESTful api + React JS <br />A project created in a
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
          Front - End: <br /> &#x25CD; React JS, JavaScript, HTML, CSS
        </p>
      </div>
      <div className={styles.projectDiv}>
        <h3>
          <a
            href="https://github.com/Cost-Effective-Software-Project-11/gp5"
            target="_blank"
            rel="noopener noreferrer"
            title="View GitHub repo"
          >
            GP5 <FontAwesomeIcon icon={faLink} />
          </a>
          <span>
            Flutter application <br />A project created in a
            team of 5 developers as part of an internship (“Intern & Team Lead
            Academy - SoftUni 2024 season 2”)
          </span>
        </h3>
        <p>
          The application is a mobile app for doctors and patients.
        </p>
        <h4>Technologies used to build:</h4>
        <p>
          Back - End: <br />
          &#x25CD; Dart language, Firebase
        </p>
        <p>
          Front - End: <br /> &#x25CD; Flutter
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
          Front - End: <br /> &#x25CD; Razor pages, Bootstrap 5, HTML, CSS
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
          Front - End: <br /> &#x25CD; React JS, JavaScript, HTML, CSS
        </p>
      </div>
      <div className={styles.projectDiv}>
        <h3>
          <a
            href="https://github.com/kvinceto/BlazorItemsManagerWebApp"
            target="_blank"
            rel="noopener noreferrer"
            title="View GitHub repo"
          >
            Blazor web app <FontAwesomeIcon icon={faLink} />
          </a>
          <span>
            Blazor Web Application <br />
            Project created as part of an assignment to learn Blazor, Dapper and DevExpress Controls
          </span>
        </h3>
        <p>A Blazor Web Application</p>
        <h4>Technologies used to build:</h4>
        <p>
          Back - End: <br />
          &#x25CD; C#, ASP.NET Core, Dapper ORM, MS SQL
        </p>
        <p>
          Front - End: <br /> &#x25CD; Blazor, Razor pages, Bootstrap 5, HTML, CSS, DevExpress Grid
        </p>
      </div>
      <h2>My professional experience</h2>
      <div className={styles.projectDiv}>
        <h3>Intern & Team Lead Academy - SoftUni 2023-2024</h3>
        <p>
          Duration: <span>11.2023 - 02.2024</span>
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
          <a
            className={styles.cert}
            href={certific}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
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
