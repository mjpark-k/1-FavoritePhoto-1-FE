import styles from '@/components/cards/info/GradeCategory.module.css';
import classNames from 'classnames';

/**
 * @param style
 * 1. small
 * 2. medium
 */
export default function GradeCategory({ style }) {
  const textStyle = classNames({
    [styles[style]]: style,
  });
  return (
    <div className={textStyle}>
      <div className={styles['grade']}>RARE</div>
      <div className={styles['bar']}>|</div>
      <div className={styles['category']}>풍경</div>
    </div>
  );
}
