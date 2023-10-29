import { Dispatch, SetStateAction } from 'react';

import './style.scss';

const HamburgerButton = ({
  showNav,
  setShowNav,
}: {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClick = () => {
    setShowNav((state) => !state);
  };
  return (
    <div className='burger-wrap'>
      <button
        className={`burger burger-button ${showNav ? 'toggled' : 'unToggled'}`}
        onClick={handleClick}>
        <div></div>
      </button>
    </div>
  );
};

export default HamburgerButton;
