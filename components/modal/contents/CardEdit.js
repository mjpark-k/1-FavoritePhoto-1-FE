import Image from "next/image";
import styles from "./CardEdit.module.css";
import defaultImg from "@/public/default-test-img.svg";
import GradeCategory from "@/components/cards/info/GradeCategory";
import QuantityButton from "@/components/buttons/QuantityButton";
import Input from "@/components/inputs/Input";
import Dropdown from "@/components/dropdowns/Dropdown";
import Button from "@/components/buttons/Button";

export default function CardEdit({ editModalClick }) {
  const grades = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const genres = ["풍경", "여행", "인물", "사물"];

  return (
    <div className={styles["container"]}>
      <span className={styles["modify"]}>수정하기</span>
      <span className={styles["title"]}>title</span>
      <div className={styles["info-container"]}>
        <Image
          src={defaultImg}
          className={styles["img"]}
          alt="photocard-image"
        />
        <div className={styles["info"]}>
          <div className={styles["info-top"]}>
            <GradeCategory style="medium" />
            <span className={styles["nickname"]}>nickname</span>
          </div>
          <div className={styles["edit-container"]}>
            <div className={styles["quantity-container"]}>
              <span className={styles["quantity"]}>총 판매 수량</span>
              <div className={styles["quantity-setting"]}>
                <QuantityButton style={"width-176px"} />
                <div className={styles["max-container"]}>
                  <span className={styles["max"]}>/ n </span>
                  <span className={styles["max-ko"]}>최대 n장</span>
                </div>
              </div>
            </div>
            <div className={styles["price-container"]}>
              <span className={styles["price"]}>장당 가격</span>
              <Input option={"price"} style={"price"} />
            </div>
          </div>
        </div>
      </div>
      <span className={styles["exchange-info"]}>교환 희망 정보</span>
      <div className={styles["modal-container"]}>
        <div className={styles["modal-position"]}>
          <div className={styles["modal-title"]}>등급</div>
          <Dropdown placeholder={"등급"} style={"440"} options={grades} />
        </div>
        <div className={styles["modal-position"]}>
          <div className={styles["modal-title"]}>장르</div>
          <Dropdown placeholder={"장르"} style={"440"} options={genres} />
        </div>
      </div>
      <div>
        <div className={styles["exchange-request"]}>교환 희망 설명</div>
        <Input option={"textarea"} style={"textarea-920px"} />
      </div>
      <div className={styles["buttons"]}>
        <Button
          style={"thin-gray-440px-60px"}
          children={"취소하기"}
          onClick={editModalClick}
        />
        {/* patch 보내기 */}
        <Button style={"thin-main-440px-60px"} children={"수정하기"} />
      </div>
    </div>
  );
}
