import Card from '@/components/cards/Card';
import Input from '@/components/inputs/Input';
import styles from '@/components/modal/contents/CardList.module.css';

export default function CardList({ title, onClick }) {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['market-place']}>마이갤러리</div>
        <div className={styles['title']}>{title}</div>
        <div className={styles['search-sort-container']}>
          <Input style={'search'} placeholder={'검색'} />
        </div>
        <div className={styles['card-list']}>
          <Card onClick={onClick} />
        </div>
      </div>
    </>
  );
}
