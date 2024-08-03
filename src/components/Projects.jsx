import projectData from "../api/projectData.json";
import styles from "./Projects.module.css";
import { InnerHeader } from "./InnerHeader";
import { ProjectList } from "./ProjectList";

export const Projects = () => {
  return (
    <>
      <InnerHeader>Projects</InnerHeader>
      <section className={styles["section-projects"]}>
        <p className={styles.p}>
          Below is a list of some projects that I've worked on.
        </p>
        <div className={styles.projects}>
          {projectData.map((curElem) => (
            <ProjectList key={curElem.id} data={curElem} />
          ))}
        </div>
      </section>
    </>
  );
};
