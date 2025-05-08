import styles from "./contactMe.module.css";
import instagram from "./../../assets/instagram.svg";
import linkedin from "./../../assets/linkedin.svg";
import ContactLinks from "./ContactLinks";

const ContactMe = () => {
  const email = "mohitgoswami379@gmail.com";

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h1 className={styles.title}>Get In Touch</h1>

        <div className={styles.content}>
          <p className={styles.description}>
            Have an idea or project in mind? Want to collaborate or just say
            hello? Feel free to reach out! I'm always open to discussing new
            opportunities, creative ideas, or opportunities to be part of your
            vision.
          </p>

          <div className={styles.emailContainer}>
            <a href={`mailto:${email}`} className={styles.email}>
              {email}
            </a>
          </div>

          <div className={styles.socialIcons}>
            <ContactLinks
              ariaLabel="instagram"
              className={styles.icon}
              imgURL={instagram}
              href="https://instagram.com/_mohit_1004"
            />
            <ContactLinks
              ariaLabel="Linkedin"
              className={styles.icon}
              imgURL={linkedin}
              href="https://linkedin.com/_mohit_1004"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
