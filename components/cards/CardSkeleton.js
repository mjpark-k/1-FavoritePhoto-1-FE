import styles from "./CardSkeleton.module.css";
import Image from "next/image";

export default function CardSkeleton() {
  return (
    <>
      <div className={styles["card-container"]}>
        <div className={styles["card-image"]} />
        <div className={styles["card-information"]}>
          <div className={styles["card-title"]} />
          <div className={styles["card-information-wrapper"]}>
            <div className={styles["card-grade"]} />
            <div className={styles["card-nickname"]} />
          </div>
        </div>
        <div className={styles["card-price"]} />
        <div className={styles["card-stock"]} />
        <Image
          src="/logo.svg"
          width={99.25}
          height={18}
          alt="logo"
          className={styles["card-logo"]}
        />
      </div>
    </>
  );
}
