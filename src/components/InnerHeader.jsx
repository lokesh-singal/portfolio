import styles from "./InnerHeader.module.css";
export const InnerHeader = ({ children }) => {
  return (
    <section className={styles["inner-header"]}>
      <h1>{children}</h1>
    </section>
  );
};
