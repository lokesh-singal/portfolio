import styles from "./ProjectList.module.css";

export const ProjectList = ({ data }) => {
  const { img_url, name, description, live_url } = data;
  return (
    <>
      <a className={styles.a} href={live_url} target="blank">
        <div className={styles["inner-div"]}>
          <img src={img_url} alt={name} width={"450"} height={"240"} />
        </div>
        <h3 className={styles.h3}>{name}</h3>
        <p className={styles.p}>{description}</p>
      </a>
    </>
  );
};
