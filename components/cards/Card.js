import { useRouter } from "next/router";
import styles from "@/components/cards/Card.module.css";
import Image from "next/image";
import GradeCategory from "./info/GradeCategory";

export default function Card({ onClick, item }) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <div className={styles["card-container"]} onClick={onClick}>
        <Image
          src="/card-default-img.svg"
          className={styles["card-image"]}
          width={360}
          height={270}
          alt="card-image"
          priority
        />
        {pathname === "/mysales" && (
          <div className={styles["card-state"]}>판매 중</div>
        )}
        <div className={styles["card-information"]}>
          <p className={styles["card-title"]}>{item.name}</p>
          <div className={styles["card-information-wrapper"]}>
            <GradeCategory style={"small"} />
            <p className={styles["card-nickname"]}>{item.creatorNickname}</p>
          </div>
        </div>
        <div className={styles["card-price-wrapper"]}>
          <p className={styles["card-price-tag"]}>가격</p>
          <p className={styles["card-price"]}>{item.price} P</p>
        </div>
        <div className={styles["card-stock-wrapper"]}>
          <p className={styles["card-stock-tag"]}>잔여</p>
          <p className={styles["card-stock"]}>
            {item.remainingQuantity}
            <span className={styles["card-stock-denominator"]}>
              / {item.totalQuantity}
            </span>
          </p>
        </div>
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
