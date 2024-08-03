import styles from "./AboutExpBlock.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

export const AboutExpBlock = ({ data }) => {
  const { img_url, company_name, position, start_date, end_date } = data;
  return (
    <>
      <div className={styles.outer}>
        <img src={img_url} alt={company_name} className={styles.img} />
        <div className={styles.details}>
          <span className={styles.name}>{company_name}</span>
          <span className={styles.position}>{position}</span>
          <span className={styles.date}>
            {start_date}{" "}
            <FaArrowRightLong
              style={{
                margin: "0 8px",
                fontSize: "15px",
                position: "relative",
                top: "3px",
                backgroundColor: "transparent",
              }}
            />
            {end_date}
          </span>
        </div>
      </div>
    </>
  );
};
