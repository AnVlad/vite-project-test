import HistoryButtons from '../../UI/HistoryButtons';
import Graphics from './Graphic';
import './style.scss';

const Statistics = () => {
  return (
    <div className='statistics'>
      <div className='list-header'>
        <h1>Statistics</h1>
        <HistoryButtons>
          <span>2020</span>
        </HistoryButtons>
      </div>
      <Graphics />
    </div>
  );
};

export default Statistics;
