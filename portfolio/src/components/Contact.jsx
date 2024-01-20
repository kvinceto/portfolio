import styles from "../components/Contact.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

function Contact() {
  const [isClicked, setIsClicked] = useState(false);
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState("");

  const iconStyles = {
    marginRight: "1rem",
    width: "1rem",
    height: "2rem",
  };

  const socialIconsStyles = {
    width: "2rem",
    height: "2rem",
  };

  function sendMessage() {
    if (!message || !info) {
      alert("All fields are required to send a message!");
      return;
    }
    const obj = {
      message,
      info,
    };

    emailjs
      .send("service_3l6cd7l", "template_4qmwu3b", obj, "UD-yZH0_5n_nv3DwV")
      .then((response) => {
        console.log("Email sent successfully:", response);
        setMessage("");
        setInfo("");
        setIsClicked(false);
        alert("Message send!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Something went wrong! Try again!");
      });
  }

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
          Phone Number:{" "}
          <a
            href="tel:+359 878 264 356"
            target="_blank"
            rel="noopener noreferrer"
            title="Call me"
          >
            +359 878 264 356
          </a>
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
      <div className={styles.contactForm}>
        {!isClicked && (
          <p onClick={() => setIsClicked(true)}>Send me a message</p>
        )}
        {isClicked && (
          <div className={styles.message}>
            <p className={styles.close} onClick={() => setIsClicked(false)}>
              X
            </p>
            <label htmlFor="contactMethod">Email of Phone number</label>
            <input
              type="text"
              id="contactMethod"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              placeholder="Example: example@example.com or +0359123456789"
            />
            <label htmlFor="messageArea">Message</label>
            <textarea
              id="messageArea"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength="2000"
              placeholder="Enter your message here"
            ></textarea>
            <p className={styles.sendP} onClick={sendMessage}>
              Send
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
