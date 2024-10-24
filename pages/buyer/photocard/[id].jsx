import Button from "@/components/buttons/Button";
import Image from "next/image";
import styles from "@/pages/buyer/photocard/[id].module.css";
import GradeCategory from "@/components/cards/info/GradeCategory";
import ModalContainer from "@/components/modal/ModalContainer";
import { useState } from "react";
import DefaultContent from "@/components/modal/contents/DefaultContent";
import CardList from "@/components/modal/contents/CardList";
import CardExchange from "@/components/modal/contents/CardExchange";
import QuantityButton from "@/components/buttons/QuantityButton";
import { getShopCard } from "@/lib/api/shop";
import ButtonCard from "@/components/cards/ButtonCard";
import { useUsersMyCardsQuery } from "@/lib/reactQuery/useUsers";

import axios from "axios";

export async function getServerSideProps(context) {
  const { id } = context.params;
  // const shopCard = await getShopCard(id);

  // return {
  //   props: {
  //     card: shopCard.shopInfo,
  //     exchangeInfo: shopCard.exchangeInfo,
  //     exchangeList: shopCard.exchangeList,
  //   },
  // };
  console.log("getServerSideProps-context.req.headers : ", context.req.headers);
  const cookies = context.req.headers.cookie || "";

  const response = await axios.get(`/shop/${id}`, {
    baseURL: "http://localhost:3000/api",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies,
    },
    withCredentials: true,
  });

  const shopCard = response.data;

  return {
    props: {
      card: shopCard.shopInfo,
      exchangeInfo: shopCard.exchangeInfo,
      exchangeList: shopCard.exchangeList,
    },
  };
}

export default function Index({ card, exchangeList, exchangeInfo }) {
  const [purchaseModal, setPurchaseModal] = useState(false);
  const [exchangeModal, setExchangeModal] = useState(false);
  const [exchangeDetailModal, setExchangeDetailModal] = useState(false);
  const [num, setNum] = useState(1);

  // const { data, isLoading, error } = useUsersMyCardsQuery({ id });

  const purchaseModalClick = () => {
    setExchangeDetailModal(false);
    setPurchaseModal(!purchaseModal);
    setExchangeModal(false);
  };

  const exchangeModalClick = () => {
    setExchangeDetailModal(false);
    setPurchaseModal(false);
    setExchangeModal(!exchangeModal);
  };

  const exchangeDetailModalClick = () => {
    setExchangeDetailModal(!exchangeDetailModal);
    setExchangeModal(false);
    setPurchaseModal(false);
  };

  console.log(card);
  console.log(exchangeList);
  console.log(exchangeInfo);

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["market-place"]}>마켓플레이스</div>
        <div className={styles["title"]}>{card.name}</div>
        <div className={styles["card-container"]}>
          <div className={styles["photocard-image"]}>
            <Image src={card.image} fill alt="photocard-image" />
          </div>
          <div className={styles["card-info-container"]}>
            <div className={styles["card-header"]}>
              <GradeCategory
                style={"medium"}
                grade={card.grade}
                genre={card.genre}
              />
              {card.creatorNickname}
            </div>
            <div className={styles["bar"]} />
            <div className={styles["card-description"]}>{card.description}</div>
            <div className={styles["bar"]} />
            <div className={styles["price-container"]}>
              <div className={styles["price"]}>가격</div>
              <div className={styles["point"]}>{card.price}P</div>
            </div>
            <div className={styles["remain-container"]}>
              <div className={styles["remain"]}>잔여</div>
              <div className={styles["quantity"]}>
                {card.remainingQuantity}
                <div
                  className={styles["total"]}
                >{`/${card.totalQuantity}`}</div>
              </div>
            </div>
            <div className={styles["bar"]} />
            <div className={styles["purchase-quantity-container"]}>
              <div className={styles["purchase-quantity"]}>구매수량</div>
              <QuantityButton style={"width-176px"} setNum={setNum} num={num} />
            </div>
            <div className={styles["total-price-container"]}>
              <div className={styles["total-price"]}>총 가격</div>
              <div className={styles["total-point-card-container"]}>
                <div className={styles["total-point"]}>{num * card.price}P</div>
                <div className={styles["total-card"]}>{`(${num}장)`}</div>
              </div>
            </div>
            <Button
              text={"포토카드 구매하기"}
              style={"thick-main-440px"}
              onClick={purchaseModalClick}
            />
          </div>
        </div>

        <div className={styles["title"]}>
          교환 희망 정보
          <Button
            text={"포토카드 교환하기"}
            style={"thin-main-440px-60px"}
            onClick={exchangeModalClick}
          />
        </div>
        <div className={styles["exchange-container"]}>
          <div className={styles["exchange-content"]}>
            {exchangeInfo.description}
          </div>
          <GradeCategory
            style={"medium"}
            grade={exchangeInfo.grade}
            genre={exchangeInfo.genre}
          />
        </div>
        {exchangeList.length > 0 && (
          <div className={styles["my-suggest-container"]}>
            <div className={styles["title"]}>내가 제시한 교환 목록</div>
            <div className={styles["my-suggest-card-container"]}>
              {exchangeList.map((card) => (
                <ButtonCard style={"cancel"} card={card} />
              ))}
            </div>
          </div>
        )}
      </div>
      {purchaseModal && (
        <ModalContainer onClick={purchaseModalClick}>
          <DefaultContent
            style={"default"}
            title={"포토카드 구매"}
            content={"구매하시겠습니까?"}
            buttonContent={"구매하기"}
            buttonStyle={"thin-main-170px"}
          />
        </ModalContainer>
      )}
      {exchangeModal && (
        <ModalContainer onClick={exchangeModalClick}>
          <CardList
            title={"포토카드 교환하기"}
            onClick={exchangeDetailModalClick}
          />
        </ModalContainer>
      )}
      {exchangeDetailModal && (
        <ModalContainer onClick={exchangeDetailModalClick}>
          <CardExchange onClick={exchangeModalClick} />
        </ModalContainer>
      )}
    </>
  );
}
