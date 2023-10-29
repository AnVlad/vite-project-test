import StartCard from './StartCard';
import './style.scss';

const QuickStartSet = () => {
  return (
    <div className='quick-start-set'>
      <h1>Quick Start</h1>
      <div className='cards-list'>
        <StartCard style={{ marginLeft: '0' }} />
        <StartCard style={{ marginLeft: '40px' }} />
        <StartCard style={{ marginLeft: '80px' }} />
      </div>
    </div>
  );
};

export default QuickStartSet;
