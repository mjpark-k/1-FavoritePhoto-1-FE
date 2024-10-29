import { useState } from "react";
import Button from "@/components/buttons/Button";
import styles from "@/components/modal/contents/MobileFilter.module.css";

export default function MobileFilter({ searchWithParams }) {
  const [grade, setGrade] = useState("");
  const [genre, setGenre] = useState("");
  const [sellout, setSellout] = useState("");
  const [listIndex, setListIndex] = useState(0);

  const handleFilterSearchButtonClick = () => {
    searchWithParams({ grade, genre, sellout });
  };

  const handleGradeSelect = (index) => {
    setGrade(index);
  };

  const handleGenreSelect = (index) => {
    setGenre(index);
  };

  const handleSelloutSelect = (index) => {
    setSellout(index === 1);
  };

  const gradeText = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const genreText = ["풍경", "인물", "동물", "정물", "추상", "기타"];
  const selloutText = ["판매 중", "판매 완료"];

  const gradeList = (
    <div className={styles["filter-list"]}>
      {gradeText.map((grade, index) => {
        return (
          <div
            key={`grade-${index}`}
            className={styles["filter-list-item"]}
            onClick={() => handleGradeSelect(index)}
          >
            {grade}
          </div>
        );
      })}
    </div>
  );

  const genreList = (
    <div className={styles["filter-list"]}>
      {genreText.map((genre, index) => {
        return (
          <div
            key={`genre-${index}`}
            className={styles["filter-list-item"]}
            onClick={() => handleGenreSelect(index)}
          >
            {genre}
          </div>
        );
      })}
    </div>
  );

  const selloutList = (
    <div className={styles["filter-list"]}>
      {selloutText.map((sellout, index) => {
        return (
          <div
            key={`sellout-${index}`}
            className={styles["filter-list-item"]}
            onClick={() => handleSelloutSelect(index)}
          >
            {sellout}
          </div>
        );
      })}
    </div>
  );

  const list = [gradeList, genreList, selloutList];

  const handleFilterResetButtonClick = () => {
    setGrade("");
    setGenre("");
    setSellout("");
  };

  return (
    <>
      <div className={styles["container"]}>
        <div classNmae={styles["filter-title"]}>매진</div>
        <div classNmae={styles["filter-sorts"]}>
          <div
            classNmae={styles["filter-sorts-item"]}
            onClick={() => setListIndex(0)}
          >
            등급
          </div>
          <div
            classNmae={styles["filter-sorts-item"]}
            onClick={() => setListIndex(1)}
          >
            장르
          </div>
          <div
            classNmae={styles["filter-sorts-item"]}
            onClick={() => setListIndex(2)}
          >
            매진 여부
          </div>
        </div>
        {list[listIndex]}
        <div classNmae={styles["filter-bottom-bar"]}>
          <Button
            style={"mobile-refresh"}
            onClick={handleFilterResetButtonClick}
          />
          <Button
            style={"thin-main-272px"}
            onClick={handleFilterSearchButtonClick}
          />
        </div>
      </div>
    </>
  );
}
