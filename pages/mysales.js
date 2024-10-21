import styles from "@/styles/Mygallery.module.css";
import Dropdown from "@/components/dropdowns/Dropdown";
import Input from "@/components/inputs/Input";
import Card from "@/components/cards/Card";
import classNames from "classnames";

export default function mygallery() {
  const grades = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const genres = ["풍경", "여행", "인물", "사물"];
  const saleMethods = ["판매 중", "교환 제시 대기 중"];
  const sales = ["판매 중", "판매 완료"];

  return (
    <>
      <div className={styles["mygallery-nav-wrapper"]}>
        <div className={styles["mygallery-nav"]}>
          <div className={styles["mygallery-title"]}>나의 판매 포토카드</div>
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
          <Input style={"search"} option={"search"} placeholder={"검색"} />
          <div className={styles["mygallery-main-container-dropdowns"]}>
            <Dropdown placeholder={"등급"} style={"default"} options={grades} />
            <Dropdown placeholder={"장르"} style={"default"} options={genres} />
            <Dropdown
              placeholder={"판매방법"}
              style={"default"}
              options={saleMethods}
            />
            <Dropdown
              placeholder={"매진여부"}
              style={"default"}
              options={sales}
            />
          </div>
        </div>
      </div>
      <div className={styles["mygallery-main-card-grid"]}>
        {Array.from({ length: 18 }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </>
  );
}
