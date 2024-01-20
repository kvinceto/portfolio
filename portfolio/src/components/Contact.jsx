import styles from "../components/Contact.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const iconStyles = {
    marginRight: "1rem",
    width: "1rem",
    height: "2rem",
  };

  const socialIconsStyles = {
    width: "2rem",
    height: "2rem",
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      <h2>Contact me</h2>
      <div>
        <h3>Get in Touch</h3>
        <p>
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas, or opportunities to be a part of your
          visions. Whether you prefer to email me or give me a call with any
          questions or inquiries, I will be happy to provide answers and
          schedule a meeting with you.
        </p>
      </div>

      <div className={styles.contactInfo}>
        <p>
          <FontAwesomeIcon icon={faLocationDot} style={iconStyles} />
          Current Location:
          <a
            href="https://www.google.com/maps/place/%D0%94%D0%BE%D0%B1%D1%80%D0%B8%D1%87/@43.5753302,27.7707205,13z/data=!3m1!4b1!4m6!3m5!1s0x40a51687c78b7c95:0xb5ce55460f7712d4!8m2!3d43.57259!4d27.8272606!16zL20vMDFyazEz?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            title="Open"
          >
            Dobrich, Bulgaria
          </a>
        </p>

        <p>
          <FontAwesomeIcon icon={faEnvelope} style={iconStyles} />
          Email:
          <a
            href="mailto:kvinceto@gmail.com"
            style={{ textDecoration: "none", color: "#333" }}
            title="Send e-mail"
          >
            kvinceto@gmail.com
          </a>
        </p>

        <p>
          <FontAwesomeIcon icon={faPhone} style={iconStyles} />
          Phone Number: +359 878 264 356
        </p>

        <p>
          <FontAwesomeIcon icon={faLanguage} style={iconStyles} />
          Known languages: Bulgarian, English
        </p>
      </div>

      <div>
        <ul className={styles.social}>
          <li>
            <a
              href="https://github.com/kvinceto"
              target="_blank"
              title="View my GitHub"
            >
              <FontAwesomeIcon icon={faGithub} style={socialIconsStyles} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/krasimir-iliev-bb4189238/"
              target="_blank"
              title="View my LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} style={socialIconsStyles} />
            </a>
          </li>
          <li>
            <a
              href="https://softuni.bg/"
              title="Get Educate with Us"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGraduationCap}
                style={socialIconsStyles}
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
