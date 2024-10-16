import Image from "next/image";

import styles from "@/styles/SellerPhotoCardDetail.module.css";
import Button from "@/components/buttons/Button";
import GradeCategory from "@/components/cards/info/GradeCategory";
import CardInfo from "@/components/cards/CardInfo";
import defaultImg from "@/public/default-test-img.svg";
import EditExchangeInfo from "@/components/cards/EditExchangeInfo";

export default function Index() {
  return (
    <div className={styles["container"]}>
      <div className={styles["market-place"]}>마켓플레이스</div>
      <div className={styles["title"]}>우리집 앞마당</div>
      <div className={styles["info-cotainer"]}>
        <Image src={defaultImg} alt="photocard-image" />
        <div className={styles["info-content-container"]}>
          <CardInfo style={styles.medium} />
          <EditExchangeInfo />
        </div>
      </div>
      <div className={styles["title"]}>
        교환 제시 목록
        {/* <Button children={"포토카드 교환하기"} style={"thin-main-440px-60px"} /> */}
      </div>
      <div className={styles["exchange-container"]}>
      </div>
    </div>
  );
}
