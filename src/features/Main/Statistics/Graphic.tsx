import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';
import { useElementSize } from 'usehooks-ts';

import './style.scss';
// import { fillMissingValues } from '../../utils/fillMissingValues';

const Graphics = () => {
  const data = [
    { name: 'January', a: 1, b: 3 },
    { name: 'February' },
    { name: 'March', a: 2, b: 1.8 },
    { name: 'April' },
    { name: 'May', a: 0, b: 3 },
    { name: 'June' },
    { name: 'July' },
    { name: 'August', b: 2.5 },
    { name: 'September', a: 4.5 },
    { name: 'October' },
    { name: 'November', a: 2, b: 4 },
    { name: 'December', a: 1.5, b: 3.5 },
  ];

  const toolTipStyle = {
    backgroundColor: 'black',
    borderRadius: '8px',
    color: 'white',
    fontSize: '16px',
    minWidth: '100px',
  };

  const [graphicRef, { width, height }] = useElementSize();

  return (
    <div className='graphic-statistic' ref={graphicRef}>
      <LineChart width={width} height={height} data={data}>
        <CartesianGrid strokeDasharray='1 0' vertical={false} />
        <XAxis dataKey='name' padding={{ left: 10, right: 10 }} />
        <Tooltip
          itemStyle={toolTipStyle}
          wrapperStyle={toolTipStyle}
          contentStyle={toolTipStyle}
        />
        <Line
          type='monotone'
          dataKey='a'
          stroke='#78D4DA'
          dot={false}
          connectNulls={true}
          strokeWidth={3}
        />
        <Line
          type='monotone'
          dataKey='b'
          stroke='#CBABDA'
          dot={false}
          connectNulls={true}
          strokeWidth={3}
        />
      </LineChart>
    </div>
  );
};

export default Graphics;
