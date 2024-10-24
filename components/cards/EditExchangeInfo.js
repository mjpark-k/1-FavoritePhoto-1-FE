import Image from "next/image";
import styles from "./EditExchangeInfo.module.css";
import editIcon from "@/public/edit-icon.svg";
import GradeCategory from "./info/GradeCategory";
import Button from "../buttons/Button";

export default function EditExchangeInfo({ editModalClick, exchangeInfo }) {
  console.log(exchangeInfo);
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <Image src={editIcon} alt="edit-icon" />
        교환 희망 정보
      </div>
      <GradeCategory
        style={"medium"}
        grade={exchangeInfo.grade}
        genre={exchangeInfo.genre}
      />
      <div className={styles["content"]}>{exchangeInfo.description}</div>
      <div className={styles["button-container"]}>
        <Button
          text={"수정하기"}
          style={"thick-main-440px"}
          onClick={editModalClick}
        />
        {/* delete 카드 판매 */}
        <Button text={"판매 내리기"} style={"thick-black-440px-80px"} />
      </div>
    </div>
  );
}
