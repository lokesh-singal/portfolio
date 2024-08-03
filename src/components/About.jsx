import data from "../api/experienceData.json";
import styles from "./About.module.css";
import { AboutExpBlock } from "./AboutExpBlock";
import { InnerHeader } from "./InnerHeader";

export const About = () => {
  return (
    <>
      <InnerHeader>About</InnerHeader>
      <section className={styles["section-about"]}>
        <p className={styles.para}>
          I am a dedicated and innovative frontend developer with expertise in
          frontend technologies, I excel at transforming creative ideas into
          seamless web experiences. My experience working with various companies
          has refined my skills in delivering high-quality, user-centric
          solutions.
        </p>
        <p className={styles.para}>
          Whether you're looking to revamp your existing site or build something
          entirely new from scratch, I'm here to help. Let's collaborate to
          create a digital experience that stands out in today's competitive
          landscape.
        </p>
        <p className={styles.para}>
          Explore my portfolio to see some of the projects I've worked on, and
          feel free to reach out if you'd like to discuss how we can work
          together.
        </p>
      </section>
      <section className={styles["section-about-2"]}>
        <h1 className={styles["exp-head"]}>Experience</h1>
        <div className={styles.experience}>
          {data.map((curElem, index) => (
            <AboutExpBlock key={index} data={curElem} />
          ))}
        </div>
      </section>
    </>
  );
};
