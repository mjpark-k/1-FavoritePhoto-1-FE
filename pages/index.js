import styles from "@/styles/Home.module.css";
import Card from "@/components/cards/Card.js";
import Button from "@/components/buttons/Button";
import SearchForm from "@/components/searchForm/SaerchForm";

export default function Home() {
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
        <SearchForm />
        <Card />
      </div>
    </>
  );
}
