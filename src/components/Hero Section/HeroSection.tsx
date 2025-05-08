import styles from "./heroSection.module.css";
import heroImage from "./../../assets/hero-icon.svg";
import companyLogo from "../../assets/company-logo.png";

function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div id="intro" className={styles.intro}>
        <div className={styles.imageWrapper}>
          <div className={styles.floatingLabel}>
            <span className={styles.labelText}>Hi, I'm</span>
            <span className={styles.labelName}>Mohit</span>
            <div className={styles.arrow}></div>
          </div>
          <img
            src={heroImage}
            alt="animated hero"
            className={styles.heroImage}
          />
           <div className={styles.glowEffect}></div>
        </div>
        <div className={styles.content}>
          <p className={styles.designation}>A FrontEnd Developer who</p>
          <p className={styles.developerQuote}>Builds interfaces</p>
          <p className={styles.developerQuote}>
            with pixel{" "}
            <span className={styles.highlightContainer}>
              <span className={styles.ovalHighlight}>perfection...</span>
            </span>
          </p>
          <p className={styles.developerQuoteReason}>
            Because the details make the difference between good and great.
          </p>
        </div>
      </div>
      <div id="about" className={styles.about}>
        <h1>I'm a software Engineer.</h1>
        <span className={styles.currently}>
          Currently, I'm a Software Engineer at{" "}
          <div className={styles.company}>
          <img className={styles.companyLogo} src={companyLogo} alt="simform's logo" />
          <a className={styles.companyLink} href="https://www.simform.com">Simform</a>.
          </div>
        </span>
        <p className={styles.description}>
          An enthusiastic frontend development trainee, currently mastering
          modern web technologies through hands-on projects and continuous
          learning.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
