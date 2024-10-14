import styles from "./CardInfo.module.css";
import GradeCategory from "@/components/cards/info/GradeCategory";

export default function CardInfo() {
  return (
    <div className={styles["info-container"]}>
      <div className={styles["title"]}>
        <GradeCategory style="medium"/>
        <span className={styles["nickname"]}>nickname</span>
      </div>
      <div className={styles["content"]}>content about photo</div>
      <div className={styles["bottom-container"]}>
        <div className={styles["price-container"]}>
          <span className={styles["price"]}>가격</span>
          <span className={styles["number-price"]}>4p</span>
        </div>
        <div className={styles["count-container"]}>
          <span className={styles["count"]}>잔여</span>
          <span className={styles["number-count"]}>
            잔여 수량{" "}
            <span className={styles["all-number-count"]}>/ 총 수량</span>
          </span>
        </div>
      </div>
    </div>
  );
}
