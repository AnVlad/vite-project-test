import { ReactNode, HTMLAttributes, forwardRef } from 'react';

import './style.scss';
interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} {...props} className={`icon-button ${props.className}`}>
        {children}
      </button>
    );
  }
);

export default IconButton;
