import { useState } from "react";
import classNames from "classnames";
import Button from "@/components/buttons/Button";
import styles from "@/components/modal/contents/MobileFilter.module.css";
import GradeCategory from "@/components/cards/info/GradeCategory";

export default function MobileFilter({ searchWithParams }) {
  const [grade, setGrade] = useState("");
  const [genre, setGenre] = useState("");
  const [sellout, setSellout] = useState("");
  const [listIndex, setListIndex] = useState(0);
  const [currentSort, setCurrentSort] = useState(0);
  const [sortGradeClass, setSortGradeClass] = useState(
    styles["filter-sorts-item"]
  );
  const [sortGenreClass, setSortGenreClass] = useState(
    styles["filter-sorts-item"]
  );
  const [sortSelloutClass, setSortSelloutClass] = useState(
    styles["filter-sorts-item"]
  );

  const handleFilterSearchButtonClick = () => {
    searchWithParams({ grade, genre, sellout });
  };

  const setSortClass = [
    setSortGradeClass,
    setSortGenreClass,
    setSortSelloutClass,
  ];

  const handleSortItemClick = (index) => {
    setListIndex(index);
    setSortClass[currentSort](classNames(styles["filter-sorts-item"]));
    setCurrentSort(index);
    setSortClass[index](
      classNames(
        styles["filter-sorts-item"],
        styles["filter-sorts-item__active"]
      )
    );
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

  const testClass = classNames(
    GradeCategory["meduim"],
    GradeCategory["common"]
  );

  const gradeList = (
    <>
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
    </>
  );

  const genreList = (
    <>
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
    </>
  );

  const selloutList = (
    <>
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
    </>
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
        <div className={styles["filter-title"]}>필터</div>
        <div className={styles["filter-sorts"]}>
          <div
            className={sortGradeClass}
            onClick={() => handleSortItemClick(0)}
          >
            등급
          </div>
          <div
            className={sortGenreClass}
            onClick={() => handleSortItemClick(1)}
          >
            장르
          </div>
          <div
            className={sortSelloutClass}
            onClick={() => handleSortItemClick(2)}
          >
            매진 여부
          </div>
        </div>
        <div className={styles["filter-list-frame"]}>{list[listIndex]}</div>
        <div className={styles["filter-bottom-bar"]}>
          <Button
            style={"mobile-refresh"}
            onClick={handleFilterResetButtonClick}
          />
          <Button
            style={"thin-main-272px"}
            onClick={handleFilterSearchButtonClick}
          >
            포토 보기
          </Button>
        </div>
      </div>
    </>
  );
}
