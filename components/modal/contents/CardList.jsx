import Card from "@/components/cards/Card";
import Dropdown from "@/components/dropdowns/Dropdown";
import Input from "@/components/inputs/Input";
import styles from "@/components/modal/contents/CardList.module.css";

export default function CardList({ title, onClick }) {
  const grades = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const genres = ["풍경", "여행", "인물", "사물"];

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["market-place"]}>마이갤러리</div>
        <div className={styles["title"]}>{title}</div>
        <div className={styles["search-dropdown-container"]}>
          <Input style={"search"} option={"search"} placeholder={"검색"} />
          <div className={styles["dropdown-container"]}>
            <Dropdown placeholder={"등급"} style={"default"} options={grades} />
            <Dropdown placeholder={"장르"} style={"default"} options={genres} />
          </div>
        </div>
        <div className={styles["card-list"]}>
          <Card onClick={onClick} />
        </div>
      </div>
    </>
  );
}
