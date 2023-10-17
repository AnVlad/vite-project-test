import HistoryButtons from '../../UI/HistoryButtons';
import IconButton from '../../UI/IconButton';
import { ChatSVG, NotificationSVG, SearchSVG } from '../../assets/svgAssets';
import './style.scss';

const HeaderBar = () => {
  return (
    <header className='header header-bar'>
      <HistoryButtons onClickRightButton={() => console.log('RIGHT')} />
      <div className='search-input'>
        <SearchSVG />
        <input type='search' placeholder='Search...' />
      </div>
      <div className='icons'>
        <IconButton>
          <ChatSVG />
        </IconButton>
        <IconButton>
          <NotificationSVG />
        </IconButton>
      </div>
    </header>
  );
};

export default HeaderBar;
