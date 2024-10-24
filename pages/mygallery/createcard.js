import styles from "@/styles/Createcard.module.css";
import Input from "@/components/inputs/Input";
import Dropdown from "@/components/dropdowns/Dropdown";
import Button from "@/components/buttons/Button";

export default function Createcard() {
  const grades = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const genres = ["풍경", "여행", "인물", "사물"];

  return (
    <div className={styles["create-card-container"]}>
      <div className={styles["create-card-title"]}>포토카드 생성</div>
      <div className={styles["create-card-input-container"]}>
        <div className={styles["create-card-input-wrapper"]}>
          <label className={styles["create-card-label"]}>포토카드 이름</label>
          <Input
            style={"default"}
            option={"default"}
            placeholder={"포토카드 이름을 입력해 주세요"}
          />
        </div>
        <div className={styles["create-card-input-wrapper"]}>
          <label className={styles["create-card-label"]}>등급</label>
          <Dropdown
            placeholder={"등급을 선택해 주세요"}
            style={520}
            options={"grades"}
          />
        </div>
        <div className={styles["create-card-input-wrapper"]}>
          <label className={styles["create-card-label"]}>장르</label>
          <Dropdown
            placeholder={"장르를 선택해 주세요"}
            style={520}
            options={"genres"}
          />
        </div>
        <div className={styles["create-card-input-wrapper"]}>
          <label className={styles["create-card-label"]}>가격</label>
          <Input
            style={"default"}
            option={"default"}
            placeholder={"가격을 입력해 주세요"}
          />
        </div>
        <div className={styles["create-card-input-wrapper"]}>
          <label className={styles["create-card-label"]}>총 발행량</label>
          <Input
            style={"default"}
            option={"default"}
            placeholder={"총 발행량을 입력해 주세요"}
          />
        </div>
        <div className={styles["create-card-input-wrapper"]}>
          <label className={styles["create-card-label"]}>사진 업로드</label>
          <div className={styles["create-card-input-upload-wrapper"]}>
            <input
              placeholder={"사진 업로드"}
              className={styles["create-card-input-upload"]}
            />
            <Button text={"파일 선택"} style={"thin-black-120px"} />
          </div>
        </div>
        <div className={styles["create-card-input-wrapper"]}>
          <label className={styles["create-card-label"]}>포토카드 설명</label>
          <Input
            style={"textarea"}
            option={"textarea"}
            placeholder={"카드 설명을 입력해 주세요"}
          />
        </div>
        <div className={styles["create-card-btn"]}>
          <Button style={"thin-main-520px"} text={"생성하기"} />
        </div>
      </div>
    </div>
  );
}
