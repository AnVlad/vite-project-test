import { useEffect, useState } from 'react';
import './style.scss';

const StartCard = ({ style }: { style?: object }) => {
  const [margin, setMargin] = useState(style);

  const [mouseEntered, setMouseEntered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMargin({
        marginLeft: '0',
      });
    }, 500);
  }, []);

  useEffect(() => {
    if (mouseEntered) {
      setMargin({
        marginLeft: '10px',
      });
    } else {
      setMargin({
        marginLeft: '0',
      });
    }
  }, [mouseEntered]);

  const handleMouseEnter = () => {
    setMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setMouseEntered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='start-card'
      style={margin}>
      <div className='icon'>
        <img
          src='https://s3-alpha-sig.figma.com/img/b3aa/e9c2/ca05cde4f051af19d7f58e17bd15956b?Expires=1698624000&Signature=kkwX63-wMd5f~R1yyaeFAFofahNrfsLzD2yUjIKChjlXjERe-5CM25lqkKVP01R9h9gi77F5cPhXJLYSwfarSXf8FM5sGfqiqMJx~EXyuK8vFfLLcVmGpQAHgPF5EXPPRp1d97s9sWkQhUFaMffD8rppsuUcteJFYCY0i5zQ4~beyLsDA719Q-hpLvPLONlAljHuZPPwxCcL1KhDCGbtQo9JmsqrK8IXD9kNw6tt34cX1EbqmmA1hGeCZQiFHJY1-nA11Wj9pHW~5-9gpruv5bSgZ8F0kuSNTM~w0odBD5x3WQPua4HqiQp23kLN9Ir7k7C9B7CGg-K6nApL8nqD3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alt=''
          height={56}
          width={56}
        />
      </div>
      <div className='details'>
        <h1 className='name'>Exam</h1>
        <div className='time'>20 min</div>
      </div>
    </div>
  );
};

export default StartCard;
