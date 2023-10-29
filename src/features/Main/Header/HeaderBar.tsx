import { SetStateAction, Dispatch } from 'react';

import './style.scss';
import HistoryButtons from '../../UI/HistoryButtons';
import HamburgerButton from '../../UI/HamburgerButton';
import IconButton from '../../UI/IconButton';
import NotificationButton from '../../UI/NotificationButton';
import UserIconAvatar from '../../AsideSection/UserProfile/UserIconAvatar';
import { ChatSVG, SearchSVG } from '../../../assets/svgAssets';

const HeaderBar = ({
  showNav,
  setShowNav,
}: {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <header className='header header-bar'>
      <div className='history-buttons-wrap'>
        <HistoryButtons />
      </div>
      <HamburgerButton showNav={showNav} setShowNav={setShowNav} />
      <div className='search-input'>
        <SearchSVG />
        <input type='search' placeholder='Search...' />
      </div>
      <div className='icons'>
        <IconButton>
          <ChatSVG />
        </IconButton>
        <NotificationButton />
        <UserIconAvatar className='icon-button user-icon' />
      </div>
    </header>
  );
};

export default HeaderBar;
