import styles from "@/styles/Detail.module.css";
import Image from "next/image";
import GradeCategory from "@/components/cards/info/GradeCategory";
import Button from "@/components/buttons/Button";
import { useState } from "react";
import ModalContainer from "@/components/modal/ModalContainer";
import CardList from "@/components/modal/contents/CardList";
import CardSell from "@/components/modal/contents/CardSell";

export default function Detail() {
  const [showMyGallery, setShowMyGallery] = useState(false);
  const [sellMyCard, setSellMyCard] = useState(false);

  const myGalleryModalClick = () => {
    setShowMyGallery(!showMyGallery);
    setSellMyCard(false);
  };

  const sellModalClick = () => {
    setShowMyGallery(false);
    setSellMyCard(!sellMyCard);
  };

  return (
    <>
      <div className={styles["detail-container"]}>
        <div className={styles["detail-title"]}>우리집 앞마당</div>
        <div className={styles["detail-main-container"]}>
          <Image src="/default-test-img.svg" width={960} height={720} />
          <div className={styles["info-container"]}>
            <div className={styles["title"]}>
              <GradeCategory style="medium" />
              <span className={styles["nickname"]}>nickname</span>
            </div>
            <div className={styles["content"]}>content about photo</div>
            <div className={styles["bottom-container"]}>
              <div className={styles["price-container"]}>
                <span className={styles["price"]}>가격</span>
                <span className={styles["number-price"]}>4p</span>
              </div>
              <div className={styles["count-container"]}>
                <span className={styles["count"]}>잔여</span>
                <span className={styles["number-count"]}>
                  보유량
                  <span className={styles["all-number-count"]}>/ 총 수량</span>
                </span>
              </div>
              <div className={styles["detail-btn"]}>
                <Button
                  children={"포토카드 판매하기"}
                  style={"thick-main-440px"}
                  onClick={myGalleryModalClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showMyGallery && (
        <ModalContainer
          onClick={myGalleryModalClick}
          children={
            <CardList
              title={"나의 포토카드 판매하기"}
              onClick={sellModalClick}
            />
          }
        />
      )}
      {sellMyCard && (
        <ModalContainer
          onClick={sellModalClick}
          children={<CardSell myGalleryModalClick={myGalleryModalClick} />}
        />
      )}
    </>
  );
}
