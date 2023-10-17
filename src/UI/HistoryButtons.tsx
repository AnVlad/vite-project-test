import { ReactNode, HTMLAttributes } from 'react';
import { ArrowLeftSVG, ArrowRightSVG } from '../assets/svgAssets';

interface HistoryButtonsProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  activeLeftButton?: boolean;
  activeRightButton?: boolean;
  onClickLeftButton?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickRightButton?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const HistoryButtons: React.FC<HistoryButtonsProps> = ({
  children,
  activeLeftButton = false,
  activeRightButton = false,
  onClickLeftButton,
  onClickRightButton,
}) => {
  const handleLeftButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (onClickLeftButton) {
      onClickLeftButton(event);
    }
  };

  const handleRightButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (onClickRightButton) {
      onClickRightButton(event);
    }
  };

  return (
    <div className='history-buttons'>
      <button
        className={`move-history-button ${activeLeftButton && 'active'}`}
        onClick={handleLeftButtonClick}>
        <ArrowLeftSVG />
      </button>
      <>{children}</>
      <button
        className={`move-history-button ${activeRightButton && 'active'}`}
        onClick={handleRightButtonClick}>
        <ArrowRightSVG />
      </button>
    </div>
  );
};

export default HistoryButtons;
