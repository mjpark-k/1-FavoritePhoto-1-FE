import styles from "@/styles/Home.module.css";
import Card from "@/components/cards/Card.js";
import Button from "@/components/buttons/Button";
import SearchForm from "@/components/searchForm/SaerchForm";
import Dropdown from "@/components/dropdowns/Dropdown";

export default function Home() {
  const grades = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const genres = ["풍경", "여행", "인물", "사물"];
  const sales = ["판매 중", "판매 완료"];
  const soltOptions = ["최신 순", "오래된 순", "높은 가격순", "낮은 가격순"];

  return (
    <>
      <div className={styles["home-nav"]}>
        <div className={styles["home-title"]}>마켓플레이스</div>
        <Button
          children={"나의 포토카드 판매하기"}
          style={"thin-main-440px-60px"}
        />
      </div>
      <div className={styles["home-main-container"]}>
        <div className={styles["home-main-container-nav-wrapper"]}>
          <div className={styles["home-main-container-nav"]}>
            <SearchForm />
            <div className={styles["home-main-container-dropdowns"]}>
              <Dropdown
                placeholder={"등급"}
                style={"default"}
                options={grades}
              />
              <Dropdown
                placeholder={"장르"}
                style={"default"}
                options={genres}
              />
              <Dropdown
                placeholder={"매진여부"}
                style={"default"}
                options={sales}
              />
            </div>
          </div>
          <Dropdown
            placeholder={"낮은 가격순"}
            style={"180"}
            options={soltOptions}
          />
        </div>
      </div>
    </>
  );
}
