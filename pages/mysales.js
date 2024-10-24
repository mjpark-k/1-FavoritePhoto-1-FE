import { useState } from "react";
import { useUsersShopQuery } from "@/lib/reactQuery/useUsers.js";
import styles from "@/styles/Mygallery.module.css";
import Dropdown from "@/components/dropdowns/Dropdown";
import Input from "@/components/inputs/Input";
import Card from "@/components/cards/Card";
import classNames from "classnames";
import useAuthStore from "@/store/useAuthStore";

export default function mysales() {
  const { user } = useAuthStore();
  const [inputValue, setInputValue] = useState();

  const [params, setParams] = useState({
    sort: "recent",
    genre: "",
    sellout: false,
    grade: "",
    pageNum: 1,
    pageSize: 9,
    keyword: "",
  });

  const { data, isLoading, error } = useUsersShopQuery(params);

  if (isLoading)
    return (
      <div className={styles["mygallery-nav-wrapper"]}>
        <div className={styles["mygallery-nav"]}>
          <div className={styles["mygallery-title"]}>나의 판매 포토카드</div>
        </div>
        <div className={styles["mygallery-grade-box-wrapper"]}>
          <p className={styles["mygallery-grade-box-title"]}>
            님이 보유한 포토카드
            <span className={styles["mygallery-grade-box-count"]}></span>
          </p>
          <div className={styles["mygallery-grade-box-container"]}>
            <div
              className={classNames(
                styles["mygallery-grade-box"],
                styles["common"]
              )}
            >
              COMMON
              <span className={styles["mygallery-grade-box-text"]}>장</span>
            </div>
            <div
              className={classNames(
                styles["mygallery-grade-box"],
                styles["rare"]
              )}
            >
              RARE
              <span className={styles["mygallery-grade-box-text"]}>장</span>
            </div>
            <div
              className={classNames(
                styles["mygallery-grade-box"],
                styles["super-rare"]
              )}
            >
              SUPER RARE
              <span className={styles["mygallery-grade-box-text"]}>장</span>
            </div>
            <div
              className={classNames(
                styles["mygallery-grade-box"],
                styles["legendary"]
              )}
            >
              LEGENDARY
              <span className={styles["mygallery-grade-box-text"]}>장</span>
            </div>
          </div>
        </div>
        <div className={styles["mygallery-main-container-nav"]}>
          <Input style={"search"} option={"search"} placeholder={"검색"} />
          <div className={styles["mygallery-main-container-dropdowns"]}>
            <Dropdown
              placeholder={"등급"}
              style={"default"}
              options={"grades"}
              setParams={setParams}
            />
            <Dropdown
              placeholder={"장르"}
              style={"default"}
              options={"genres"}
              setParams={setParams}
            />
            <Dropdown
              placeholder={"판매방법"}
              style={"default"}
              options={"saleMethods"}
              setParams={setParams}
            />
            <Dropdown
              placeholder={"매진여부"}
              style={"default"}
              options={"sales"}
              setParams={setParams}
            />
          </div>
        </div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setParams(() => ({
        keyword: inputValue,
        pageNum: 1,
      }));
    }
  };

  const handleClick = (e) => {
    setParams(() => ({
      keyword: inputValue,
      pageNum: 1,
    }));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className={styles["mygallery-nav-wrapper"]}>
        <div className={styles["mygallery-nav"]}>
          <div className={styles["mygallery-title"]}>나의 판매 포토카드</div>
        </div>
        <div className={styles["mygallery-grade-box-wrapper"]}>
          <p className={styles["mygallery-grade-box-title"]}>
            {user.data.nickname}님이 보유한 포토카드
            <span className={styles["mygallery-grade-box-count"]}>
              ({data.data.totalCount})
            </span>
          </p>
          <div className={styles["mygallery-grade-box-container"]}>
            <div
              className={classNames(
                styles["mygallery-grade-box"],
                styles["common"]
              )}
            >
              COMMON
              <span className={styles["mygallery-grade-box-text"]}>
                {!data.data.countsGroupByGrade[0]
                  ? 0
                  : data.data.countsGroupByGrade[0]}
                장
              </span>
            </div>
            <div
              className={classNames(
                styles["mygallery-grade-box"],
                styles["rare"]
              )}
            >
              RARE
              <span className={styles["mygallery-grade-box-text"]}>
                {!data.data.countsGroupByGrade[1]
                  ? 0
                  : data.data.countsGroupByGrade[1]}
                장
              </span>
            </div>
            <div
              className={classNames(
                styles["mygallery-grade-box"],
                styles["super-rare"]
              )}
            >
              SUPER RARE
              <span className={styles["mygallery-grade-box-text"]}>
                {!data.data.countsGroupByGrade[2]
                  ? 0
                  : data.data.countsGroupByGrade[2]}
                장
              </span>
            </div>
            <div
              className={classNames(
                styles["mygallery-grade-box"],
                styles["legendary"]
              )}
            >
              LEGENDARY
              <span className={styles["mygallery-grade-box-text"]}>
                {!data.data.countsGroupByGrade[3]
                  ? 0
                  : data.data.countsGroupByGrade[3]}
                장
              </span>
            </div>
          </div>
        </div>
        <div className={styles["mygallery-main-container-nav"]}>
          <Input
            style={"search"}
            option={"search"}
            placeholder={"검색"}
            onKeyPress={handleKeyPress}
            onClick={handleClick}
            onChange={handleInputChange}
          />
          <div className={styles["mygallery-main-container-dropdowns"]}>
            <Dropdown
              placeholder={"등급"}
              style={"default"}
              options={"grades"}
              setParams={setParams}
            />
            <Dropdown
              placeholder={"장르"}
              style={"default"}
              options={"genres"}
              setParams={setParams}
            />
            <Dropdown
              placeholder={"판매방법"}
              style={"default"}
              options={"saleMethods"}
              setParams={setParams}
            />
            <Dropdown
              placeholder={"매진여부"}
              style={"default"}
              options={"sales"}
              setParams={setParams}
            />
          </div>
        </div>
      </div>
      <div className={styles["mygallery-main-card-grid"]}>
        {" "}
        {data.data.shops.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </>
  );
}
