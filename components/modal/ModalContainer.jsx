import styles from '@/components/modal/ModalContainer.module.css';
import Image from 'next/image';

/**
 *
 * @param children - component
 * @param onClick - togle
 */
export default function ModalContainer({ children, onClick }) {
  return (
    <div className={styles['overlay']}>
      <div className={styles['container']}>
        <div className={styles['close-button']} onClick={onClick}>
          <Image src={'/close-button.svg'} fill alt="close-button" />
        </div>
        {children}
      </div>
    </div>
  );
}
