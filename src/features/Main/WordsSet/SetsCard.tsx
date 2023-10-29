import IconButton from '../../UI/IconButton';
import { HeartSVG } from '../../../assets/svgAssets';
import './style.scss';

interface CardProps {
  imageSrc: string;
  name: string;
  style?: object;
  favorite?: boolean;
  onClickLikeButton?: () => void;
}

const Card = ({
  imageSrc,
  name,
  style,
  favorite,
  onClickLikeButton,
}: CardProps) => {
  return (
    <div className='set-card' style={style && style}>
      <div className={`card-img ${favorite ? 'isLiked' : ''}`}>
        <img src={imageSrc} width='100px' height='100px' alt='' />
        <IconButton className='like-button' onClick={onClickLikeButton}>
          <HeartSVG />
        </IconButton>
      </div>
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
