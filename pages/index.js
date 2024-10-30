import styles from "@/styles/Home.module.css";
import Card from "@/components/cards/Card.js";
import Button from "@/components/buttons/Button";
import Input from "@/components/inputs/Input.jsx";
import Dropdown from "@/components/dropdowns/Dropdown";
import ModalContainer from "@/components/modal/ModalContainer";
import CardList from "@/components/modal/contents/CardList";
import { useState, useEffect, useRef } from "react";
import CardSell from "@/components/modal/contents/CardSell";
import { useShopCards } from "@/lib/reactQuery/useShop";
import Loading from "@/components/loading/Loading";
import { useUsersMyCardListQuery } from "@/lib/reactQuery/useUsers";
import useSelectedStore from "@/store/useSelectedStore";
import useAuthStore from "@/store/useAuthStore";

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
  const [cards, setCards] = useState("");
  const [hasNextPage, setHasNextPage] = useState(false);
  const observerTarget = useRef(null);

  const { selectedCard, setSelectedCard, clearSelectedCard } =
    useSelectedStore();

  const { user } = useAuthStore();

  const { data, isLoading, error } = useShopCards(params);

  // 로그인 상태일 때만 쿼리 실행
  const { data: myCards } = user
    ? useUsersMyCardListQuery(params)
    : { data: null };

  // const { data: myCards } = useUsersMyCardListQuery(params);

  useEffect(() => {
    if (data && data.shops) {
      setCards(data.shops);
      setHasNextPage(data.shops.length < data.totalCount);
    }
  }, [data]);

  const loadMoreCards = () => {
    if (!isLoading && hasNextPage) {
      setParams((prevParams) => ({
        ...prevParams,
        pageSize: prevParams.pageSize + 6,
      }));
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreCards();
        }
      },
      { threshold: 1.0 }
    );
    if (observerTarget.current) observer.observe(observerTarget.current);
    return () => {
      if (observerTarget.current) observer.unobserve(observerTarget.current);
    };
  }, [loadMoreCards]);

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

  const myGalleryModalClick = () => {
    setShowMyGallery(!showMyGallery);
    setSellMyCard(false);
  };

  const sellModalClick = (card) => {
    setSelectedCard(card);
    setShowMyGallery(false);
    setSellMyCard(!sellMyCard);
  };

  if (isLoading && !cards)
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
        {!data && (
          <div className={styles["loading-container"]}>
            <Loading />
          </div>
        )}
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles["home-container"]}>
      <div className={styles["home-nav"]}>
        <div className={styles["home-title"]}>마켓플레이스</div>
        {user && (
          <Button
            text={"나의 포토카드 판매하기"}
            style={"thin-main-440px-60px"}
            onClick={myGalleryModalClick}
          />
        )}
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
      {cards && (
        <div className={styles["home-main-card-grid"]}>
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      )}
      <div ref={observerTarget} className={styles["scroll-loading-container"]}>
        {hasNextPage && <Loading />}
      </div>
      {showMyGallery && (
        <ModalContainer onClick={myGalleryModalClick}>
          <CardList
            title={"나의 포토카드 판매하기"}
            onClick={sellModalClick}
            data={myCards.data.cards}
          />
        </ModalContainer>
      )}
      {sellMyCard && (
        <ModalContainer onClick={sellModalClick}>
          {selectedCard && (
            <CardSell
              myGalleryModalClick={myGalleryModalClick}
              sellModalClick={sellModalClick}
            />
          )}
        </ModalContainer>
      )}
    </div>
  );
}
