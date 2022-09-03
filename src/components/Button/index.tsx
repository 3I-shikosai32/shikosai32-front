import Image from 'next/image';
import type { FC } from 'react';

type Props = {
  text?: string;
  iconUrl?: string;
  className?: string;
  onClick: () => void;
};

const Button: FC<Props> = ({ text, iconUrl, className, onClick }) => (
  <button type="button" className={`flex flex-row gap-2 rounded-3xl bg-neutral-900 p-4 text-base text-white ${className}`} onClick={onClick}>
    {iconUrl && <Image src={iconUrl} alt={`ボタン ${text} のアイコン画像`} />}
    {text}
  </button>
);

Button.defaultProps = {
  text: '',
  iconUrl: '',
  className: '',
};

export default Button;
