import { ReactNode } from 'react';
import './style.scss';

const ModalWindow = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <div className='modal-window' {...rest}>
      {children}
    </div>
  );
};

export default ModalWindow;
