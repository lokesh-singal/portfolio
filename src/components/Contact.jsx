import styles from "./Contact.module.css";
import { InnerHeader } from "./InnerHeader";

export const Contact = () => {
  return (
    <>
      <InnerHeader>Contact</InnerHeader>
      <section className={styles["section-contact"]}>
        <p className={styles.contact}>
          If you'd like to get in touch, you can reach me using the following
          methods. Please note, that I'm not currently available for freelance
          projects.
        </p>

        {/* Grid */}

        <div className={styles["contact-grid"]}>
          <div className={styles.flex}>
            <h2>Email</h2>
            <a href="mailto:lokeshsingal26@gmail.com">
              lokeshsingal26@gmail.com
            </a>
          </div>
          <div className={styles.flex}>
            <h2>LinkedIn</h2>
            <a href="https://www.linkedin.com/in/lokesh-kumar26/">
              in/lokesh-kumar26
            </a>
          </div>
          <div className={styles.flex}>
            <h2>GitHub</h2>
            <a href="https://github.com/lokesh-singal">git/lokesh-kumar</a>
          </div>
          <div className={styles.flex}>
            <h2>Instagram</h2>
            <a href="https://www.instagram.com/lokeshsingal_/">
              @lokeshsingal_
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
