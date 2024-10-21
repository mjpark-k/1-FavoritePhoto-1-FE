import Image from 'next/image';

import styles from '@/styles/SellerPhotoCardDetail.module.css';
import Button from '@/components/buttons/Button';
import GradeCategory from '@/components/cards/info/GradeCategory';
import CardInfo from '@/components/cards/CardInfo';
import defaultImg from '@/public/default-test-img.svg';
import EditExchangeInfo from '@/components/cards/EditExchangeInfo';
import ButtonCard from '@/components/cards/ButtonCard';
import ModalContainer from '@/components/modal/ModalContainer';
import CardEdit from '@/components/modal/contents/CardEdit';
import { useState } from 'react';

export default function Index() {
  const [editModal, setEditModal] = useState(false);

  const editModalClick = () => {
    setEditModal(!editModal);
  };

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['market-place']}>마켓플레이스</div>
        <div className={styles['title']}>우리집 앞마당</div>
        <div className={styles['info-cotainer']}>
          <Image src={defaultImg} alt="photocard-image" />
          <div className={styles['info-content-container']}>
            <CardInfo style={styles.medium} />
            <EditExchangeInfo editModalClick={editModalClick} />
          </div>
        </div>
        <div className={styles['title']}>교환 제시 목록</div>
        <div className={styles['exchange-container']}>
          <ButtonCard style={'refuse-approval'} />
        </div>
      </div>
      {editModal && (
        <ModalContainer onClick={editModalClick}>
          <CardEdit editModalClick={editModalClick} />
        </ModalContainer>
      )}
    </>
  );
}
