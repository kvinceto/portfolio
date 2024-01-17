import styles from "./Projects.module.css";

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
            Bicycle Management eXtreme- BMX
          </a>
        </h3>
        <p>
          ASP.NET Core RESTfull api + React JS <br />
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
            Vehicle Manager Platform
          </a>
        </h3>
        <p>
          ASP.NET Core MVC <br /> Vehicle-Manager-Platform (VMP) is a web
          application for managing waybills of vehicles and tracking upcoming
          maintenance checks. It supports the automatic calculation of fuel
          costs for a certain vehicle and setting notifications for upcoming
          periodic costs.
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
            Portfolio site
          </a>
        </h3>
        <p>
          React JS Application <br />A React JS portfolio / CV site
        </p>
        <h4>Technologies used to build:</h4>
        <p>
          Front - End: <br /> &#x25CD; React JS, HTML, CSS
        </p>
      </div>
    </section>
  );
}

export default Projects;
