import styles from "@/components/cards/info/GradeCategory.module.css";
import classNames from "classnames";

/**
 * @param style
 * 1. small
 * 2. medium
 */
export default function GradeCategory({ style, card }) {
  const textStyle = classNames({
    [styles[style]]: style,
  });

  let grade = card.grade;

  if (card.grade === 3) grade = "LEGENDARY";
  if (card.grade === 2) grade = "SUPER RARE";
  if (card.grade === 1) grade = "RARE";
  if (card.grade === 0) grade = "COMMONN";

  return (
    <div className={textStyle}>
      <div className={styles["grade"]}>{grade}</div>
      <div className={styles["bar"]}>|</div>
      <div className={styles["category"]}>풍경</div>
    </div>
  );
}
