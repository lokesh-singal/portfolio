import styles from "./Header.module.css";

export const Header = ({ setTab }) => {
  return (
    <header>
      <div className={styles.navbar}>
        <a onClick={() => setTab("Home")} className="home">
          Home
        </a>
        <div className={styles["inner-nav"]}>
          <a onClick={() => setTab("About")}>About</a>
          <a onClick={() => setTab("Projects")}>Projects</a>
          <a onClick={() => setTab("Contact")}>Contact</a>
        </div>
      </div>
    </header>
  );
};
