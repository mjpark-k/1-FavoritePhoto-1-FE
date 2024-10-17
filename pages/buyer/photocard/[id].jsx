import Button from '@/components/buttons/Button';
import Image from 'next/image';
import styles from '@/pages/buyer/photocard/[id].module.css';
import GradeCategory from '@/components/cards/info/GradeCategory';
import ModalContainer from '@/components/modal/ModalContainer';
import { useState } from 'react';
import DefaultContent from '@/components/modal/contents/DefaultContent';
import CardList from '@/components/modal/contents/CardList';
import CardExchange from '@/components/modal/contents/CardExchange';

export default function Index() {
  const [purchaseModal, setPurchaseModal] = useState(false);
  const [exchangeModal, setExchangeModal] = useState(false);
  const [exchangeDetailModal, setExchangeDetailModal] = useState(false);

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

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['market-place']}>마켓플레이스</div>
        <div className={styles['title']}>우리집 앞마당</div>
        <div className={styles['photocard-image']}>
          <Image src={'/'} fill alt="photocard-image" />
        </div>
        <Button
          children={'구매하기'}
          style={'thin-main-440px-60px'}
          onClick={purchaseModalClick}
        />

        <div className={styles['title']}>
          교환 희망 정보
          <Button
            children={'포토카드 교환하기'}
            style={'thin-main-440px-60px'}
            onClick={exchangeModalClick}
          />
        </div>
        <div className={styles['exchange-container']}>
          <div className={styles['exchange-content']}>풍경사진</div>
          <GradeCategory style={'medium'} />
        </div>
      </div>
      {purchaseModal && (
        <ModalContainer
          onClick={purchaseModalClick}
          children={
            <DefaultContent
              style={'default'}
              title={'포토카드 구매'}
              content={'구매하시겠습니까?'}
              buttonContent={'구매하기'}
              buttonStyle={'thin-main-170px'}
            />
          }
        />
      )}
      {exchangeModal && (
        <ModalContainer
          onClick={exchangeModalClick}
          children={
            <CardList
              title={'포토카드 교환하기'}
              onClick={exchangeDetailModalClick}
            />
          }
        />
      )}
      {exchangeDetailModal && (
        <ModalContainer
          onClick={exchangeDetailModalClick}
          children={<CardExchange onClick={exchangeModalClick} />}
        />
      )}
    </>
  );
}
