import Button from '@/components/buttons/Button';
import styles from './ExchangeAuth.module.css';

export default function ExchangeAuth({ exchangeAuth }) {
  console.log(exchangeAuth);
  return (
    <div className={styles['modal-container']}>
      <div className={styles['modal-title']}>교환 제시 {exchangeAuth}</div>
      <div className={styles['modal-content']}>
        [grade | name] 카드와의 교환을 {exchangeAuth}하시겠습니까?
      </div>
      {/* onClick 이벤트 추가해야됨 */}
      {/* if exchangeAuth=거절 -> 교환 제시 delete? */}
      {/* if exchangeAuth=승인 -> 교환 성공? */}
      <Button style={'thin-main-170px'} text={`${exchangeAuth}하기`} />
    </div>
  );
}
