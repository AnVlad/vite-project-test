import { ReactNode, HTMLAttributes } from 'react';

import './style.scss';
interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={`icon-button ${props.className}`}>
      {children}
    </button>
  );
};

export default IconButton;
