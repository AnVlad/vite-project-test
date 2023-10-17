import HistoryButtons from '../../UI/HistoryButtons';
import Card from '../Cards/SetsCard';
import './style.scss';

const WordSetsCarousel = () => {
  return (
    <div className='words-set'>
      <div className='list-header'>
        <h1>Words sets</h1>
        <HistoryButtons />
      </div>
      <div className='list-wrap'>
        <div className='cards-list'>
          <Card src='' />
          <Card src='' />
          <Card src='' />
          <Card src='' />
          <Card src='' />
        </div>
      </div>
    </div>
  );
};

export default WordSetsCarousel;
