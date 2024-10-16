import Button from '@/components/buttons/Button';
import styles from '@/components/modal/contents/DefaultContent.module.css';
import classNames from 'classnames';

/**
 * @param style
 * 1. default
 * 2. height-375px : 로그인 모달
 * @param title
 * @param content
 * @param buttonContent
 */
export default function DefaultContent({
  style,
  title,
  content,
  buttonContent,
}) {
  const contentClass = classNames({
    [styles[style]]: style,
  });

  return (
    <div className={contentClass}>
      <div className={styles['title']}>{title}</div>
      <div className={styles['content']}>{content}</div>
      <div className={styles['button']}>
        <Button children={buttonContent} style={'thin-main-170px'} />
      </div>
    </div>
  );
}
