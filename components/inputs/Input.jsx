import styles from '@/components/searchForm/Input.module.css';
import classNames from 'classnames';
import Image from 'next/image';

/**
 * @param style
 * 1. default
 * 2. password
 * 3. search
 * 4. textarea
 * @param visibility
 * password visibility(value : Boolean)
 * @param onClick
 * password togle event handler
 * @param error
 * react-hook-form errors
 */
export default function Input({ visibility, onClick, style, error, ...props }) {
  const inputClass = classNames({
    [styles[style]]: style,
    [styles['error']]: error,
  });

  const containerClass = classNames({
    [styles[`container-${style}`]]: style,
  });

  const inputs = {
    default: <input className={inputClass} {...props} />,
    password: (
      <div className={containerClass}>
        <input
          className={inputClass}
          type={visibility ? 'text' : 'password'}
          {...props}
        />
        {visibility ? (
          <div className={styles['visibility-on']} onClick={onClick}>
            <Image src={'/visibility-on.svg'} fill alt="visibility-on" />
          </div>
        ) : (
          <div className={styles['visibility-off']} onClick={onClick}>
            <Image src={'/visibility-off.svg'} fill alt="visibility-off" />
          </div>
        )}
      </div>
    ),
    search: (
      <div className={containerClass}>
        <input className={inputClass} {...props} />
        <div className={styles['vector']}>
          <Image src="/vector.svg" fill alt="vector" />
        </div>
      </div>
    ),
    textarea: <textarea className={inputClass} {...props} />,
  };

  const input = inputs[style];

  return <div className={styles['input-container']}>{input}</div>;
}
