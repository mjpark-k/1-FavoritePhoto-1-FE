import styles from "@/styles/Createcard.module.css";
import Input from "@/components/inputs/Input";
import Dropdown from "@/components/dropdowns/Dropdown";
import Button from "@/components/buttons/Button";
import { useState } from "react";

export default function Createcard() {
  const [value, setValue] = useState({
    name: "",
    grade: "",
    genre: "",
    price: "",
    quantity: "",
    image: "",
    description: "",
  });

  const handleChange = (field, newValue) => {
    setValue((prev) => ({
      ...prev,
      [field]: newValue,
    }));
  };
  console.log(value);

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
            value={value.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div className={styles["create-card-input-wrapper"]}>
          <label className={styles["create-card-label"]}>등급</label>
          <Dropdown
            placeholder={"등급을 선택해 주세요"}
            style={520}
            options={"grades"}
            setParams={(newParams) => handleChange("grade", newParams)}
          />
        </div>
        <div className={styles["create-card-input-wrapper"]}>
          <label className={styles["create-card-label"]}>장르</label>
          <Dropdown
            placeholder={"장르를 선택해 주세요"}
            style={520}
            options={"genres"}
            setParams={(newParams) => handleChange("genre", newParams.genre)}
          />
        </div>
        <div className={styles["create-card-input-wrapper"]}>
          <label className={styles["create-card-label"]}>가격</label>
          <Input
            style={"default"}
            option={"default"}
            placeholder={"가격을 입력해 주세요"}
            value={value.price}
            onChange={(e) => handleChange("price", e.target.value)}
          />
        </div>
        <div className={styles["create-card-input-wrapper"]}>
          <label className={styles["create-card-label"]}>총 발행량</label>
          <Input
            style={"default"}
            option={"default"}
            placeholder={"총 발행량을 입력해 주세요"}
            value={value.quantity}
            onChange={(e) => handleChange("quantity", e.target.value)}
          />
        </div>
        <div className={styles["create-card-input-wrapper"]}>
          <label className={styles["create-card-label"]}>사진 업로드</label>
          <div className={styles["create-card-input-upload-wrapper"]}>
            <input
              placeholder={"사진 업로드"}
              className={styles["create-card-input-upload"]}
              onChange={(e) => handleChange("image", e.target.value)}
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
            value={value.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
        <div className={styles["create-card-btn"]}>
          <Button style={"thin-main-520px"} text={"생성하기"} />
        </div>
      </div>
    </div>
  );
}
