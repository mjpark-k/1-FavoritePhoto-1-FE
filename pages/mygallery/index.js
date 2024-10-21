import styles from "@/styles/Mygallery.module.css";
import Button from "@/components/buttons/Button";
import Dropdown from "@/components/dropdowns/Dropdown";
import Input from "@/components/inputs/Input";
import Card from "@/components/cards/Card";
import classNames from "classnames";
import Link from "next/link";

export default function mygallery() {
  const grades = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const genres = ["풍경", "여행", "인물", "사물"];

  return (
    <>
      <div className={styles["mygallery-nav-wrapper"]}>
        <div className={styles["mygallery-nav"]}>
          <div className={styles["mygallery-title"]}>마이갤러리</div>
          <Link href="/mygallery/createcard">
            <Button text={"포토카드 생성하기"} style={"thin-main-440px-60px"} />
          </Link>
        </div>
        <div className={styles["mygallery-grade-box-wrapper"]}>
          <p className={styles["mygallery-grade-box-title"]}>
            유디님이 보유한 포토카드
            <span className={styles["mygallery-grade-box-count"]}>(40장)</span>
          </p>
          <div className={styles["mygallery-grade-box-container"]}>
            <div
              className={classNames(
                styles["mygallery-grade-box"],
                styles["common"]
              )}
            >
              COMMON<span>20장</span>
            </div>
            <div
              className={classNames(
                styles["mygallery-grade-box"],
                styles["rare"]
              )}
            >
              RARE<span>20장</span>
            </div>
            <div
              className={classNames(
                styles["mygallery-grade-box"],
                styles["super-rare"]
              )}
            >
              SUPER RARE<span>20장</span>
            </div>
            <div
              className={classNames(
                styles["mygallery-grade-box"],
                styles["legendary"]
              )}
            >
              LEGENDARY<span>20장</span>
            </div>
          </div>
        </div>
        <div className={styles["mygallery-main-container-nav"]}>
          <Input style={"search"} placeholder={"검색"} option={"search"} />
          <div className={styles["mygallery-main-container-dropdowns"]}>
            <Dropdown placeholder={"등급"} style={"default"} options={grades} />
            <Dropdown placeholder={"장르"} style={"default"} options={genres} />
          </div>
        </div>
      </div>
      <div className={styles["mygallery-main-card-grid"]}>
        <Link href="/mygallery/detail">
          <Card />
        </Link>
      </div>
    </>
  );
}
