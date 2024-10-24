import styles from "@/styles/Home.module.css";
import Card from "@/components/cards/Card.js";
import Button from "@/components/buttons/Button";
import Input from "@/components/inputs/Input.jsx";
import Dropdown from "@/components/dropdowns/Dropdown";
import ModalContainer from "@/components/modal/ModalContainer";
import CardList from "@/components/modal/contents/CardList";
import { useState } from "react";
import CardSell from "@/components/modal/contents/CardSell";
import { useShopCards } from "@/lib/reactQuery/useShop";

export default function Home() {
  const [showMyGallery, setShowMyGallery] = useState(false);
  const [sellMyCard, setSellMyCard] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [params, setParams] = useState({
    sort: "recent",
    genre: "",
    sellout: "",
    grade: "",
    pageNum: 1,
    pageSize: 9,
    keyword: inputValue,
  });

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

  const { data, isLoading, error } = useShopCards(params);

  const myGalleryModalClick = () => {
    setShowMyGallery(!showMyGallery);
    setSellMyCard(false);
  };

  const sellModalClick = () => {
    setShowMyGallery(false);
    setSellMyCard(!sellMyCard);
  };

  if (isLoading)
    return (
      <div className={styles["home-container"]}>
        <div className={styles["home-nav"]}>
          <div className={styles["home-title"]}>마켓플레이스</div>
          <Button
            text={"나의 포토카드 판매하기"}
            style={"thin-main-440px-60px"}
            onClick={myGalleryModalClick}
          />
        </div>
        <div className={styles["home-main-container"]}>
          <div className={styles["home-main-container-nav-wrapper"]}>
            <div className={styles["home-main-container-nav"]}>
              <Input
                style={"search"}
                option={"search"}
                placeholder={"검색"}
                onKeyPress={handleKeyPress}
                onClick={handleClick}
                onChange={handleInputChange}
              />
              <div className={styles["home-main-container-dropdowns"]}>
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
                  placeholder={"매진여부"}
                  style={"default"}
                  options={"sales"}
                  setParams={setParams}
                />
              </div>
            </div>
            <Dropdown
              placeholder={"낮은 가격순"}
              style={"180"}
              options={"sortOptions"}
            />
          </div>
        </div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles["home-container"]}>
      <div className={styles["home-nav"]}>
        <div className={styles["home-title"]}>마켓플레이스</div>
        <Button
          text={"나의 포토카드 판매하기"}
          style={"thin-main-440px-60px"}
          onClick={myGalleryModalClick}
        />
      </div>
      <div className={styles["home-main-container"]}>
        <div className={styles["home-main-container-nav-wrapper"]}>
          <div className={styles["home-main-container-nav"]}>
            <Input
              style={"search"}
              option={"search"}
              placeholder={"검색"}
              onKeyPress={handleKeyPress}
              onClick={handleClick}
              onChange={handleInputChange}
            />
            <div className={styles["home-main-container-dropdowns"]}>
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
                placeholder={"매진여부"}
                style={"default"}
                options={"sales"}
                setParams={setParams}
              />
            </div>
          </div>
          <Dropdown
            placeholder={"낮은 가격순"}
            style={"180"}
            options={"sortOptions"}
            setParams={setParams}
          />
        </div>
      </div>
      <div className={styles["home-main-card-grid"]}>
        {data.shops.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      {showMyGallery && (
        <ModalContainer
          onClick={myGalleryModalClick}
          text={
            <CardList
              title={"나의 포토카드 판매하기"}
              onClick={sellModalClick}
            />
          }
        />
      )}
      {sellMyCard && (
        <ModalContainer onClick={sellModalClick}>
          <CardSell myGalleryModalClick={myGalleryModalClick} />
        </ModalContainer>
      )}
    </div>
  );
}
