import Button from '@/components/buttons/Button';
import Card from '@/components/cards/Card';
import Input from '@/components/inputs/Input';
import styles from '@/components/modal/contents/CardExchange.module.css';

export default function CardExchange({ onClick }) {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['card-exchange']}>포토카드 교환하기</div>
        <div className={styles['title']}>데이터 제목</div>
        <Input style={'search'} placeholder={'검색'} />
        <div className={styles['card-list']}>
          <Card />
          <Button
            style={'thin-black-170'}
            children={'취소하기'}
            onClick={onClick}
          />
          <Button style={'thin-main-170px'} children={'교환하기'} />
        </div>
      </div>
    </>
  );
}
