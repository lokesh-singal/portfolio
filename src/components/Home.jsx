import data from "../api/projectData.json";
import { ProjectList } from "./ProjectList";

import styles from "./Home.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

export const Home = ({ setTab }) => {
  return (
    <>
      {/* Section - 1 */}
      <section className={styles.border}>
        <div className={styles["heading"]}>
          <h1>Hey, I’m Lokesh.</h1>
          <p>A frontend developer from India.</p>
        </div>
        <div className={styles["paragraph"]}>
          <p className={styles["para"]}>
            {/* I work with leading-edge companies to create exceptional products.
            I’m currently working with MoonPay to help make web3 accessible.
            Before that, I built personal and business banking products for
            millions of customers at Monzo. */}
            I am a dedicated and innovative frontend developer with expertise in
            frontend technologies, I excel at transforming creative ideas into
            seamless web experiences. My experience working with various
            companies has refined my skills in delivering high-quality,
            user-centric solutions.
          </p>
        </div>
        <div className={styles.btn}>
          <p onClick={() => setTab("About")}>
            More Information
            <FaArrowRightLong
              style={{
                marginLeft: "8px",
                fontSize: "15px",
                position: "relative",
                top: "3px",
                backgroundColor: "transparent",
              }}
            />
          </p>
        </div>
      </section>

      {/* Section - 2 */}
      <section className={styles["project-border"]}>
        <div className={styles["project-head"]}>
          <h1>Personal Projects</h1>
          <p>Below is a selection of recent projects that I've worked on.</p>
        </div>

        <div className={styles.projects}>
          {data.map(
            (curElem) => {
              return (
                curElem.id <= 2 && (
                  <ProjectList key={curElem.id} data={curElem} />
                )
              );
            }
            // if (curElem.id < 3) {
            //   console.log(curElem);
            //   return <ProjectList key={curElem.id} data={curElem} />;
            // }
          )}
        </div>

        <div className={styles.btn}>
          <p onClick={() => setTab("Projects")}>
            View More Projects
            <FaArrowRightLong
              style={{
                marginLeft: "8px",
                fontSize: "15px",
                position: "relative",
                top: "3px",
                backgroundColor: "transparent",
              }}
            />
          </p>
        </div>
      </section>
    </>
  );
};
