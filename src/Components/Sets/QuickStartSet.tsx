import StartCard from '../Cards/StartCard';
import './style.scss';

const QuickStartSet = () => {
  return (
    <div className='quick-start-set'>
      <h1>Quick Start</h1>
      <div className='cards-list'>
        <StartCard />
        <StartCard />
        <StartCard />
      </div>
    </div>
  );
};

export default QuickStartSet;
