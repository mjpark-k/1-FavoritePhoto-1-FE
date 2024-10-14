import styles from '@/components/cards/info/GradeCategory.module.css';

export default function GradeCategory() {
  return (
    <div className={styles['container']}>
      <div className={styles['grade']}>RARE</div>
      <div className={styles['bar']}>|</div>
      <div className={styles['category']}>풍경</div>
    </div>
  );
}
