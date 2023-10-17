import IconButton from '../../UI/IconButton';
import { HeartSVG } from '../../assets/svgAssets';
import './style.scss';

interface CardProps {
  src: string;
}

const Card = ({ src }: CardProps) => {
  return (
    <div className='set-card'>
      <div className='card-img'>
        <img
          src='https://s3-alpha-sig.figma.com/img/afcc/bb32/2710203dc62174522009d28ae64f1597?Expires=1698019200&Signature=SjTurmEkk4fpUxzI3TT31i1i4~rRbxTCvfhbWdIlSVmvSXRlAR2gXI061rciMPrQnVeVf-DxVJARZybVjo-FOjA4FCdLn~Thkcc0N4AnG20~wTD~0bVXZJE4f69Ztu1jIYDgo9x11uoz9cnYQduuyWJXcvJL2zzFJqSIAQ9s8e6QFcroFh8Rs4foDTdNX7hTQGrr108jKsYyUApR8Bi1QrvZc-TeddbvUhzA2znvqb6Tx5nKcRn74iAcSV56tA9uHQunG1jScvmP7WtpFtZs1YZ4Ry3-yeQ247VMU8MFy7Lzj0PVcdhO7W69bPtwBtQ8AW~IkVhd3XsAGE8nBfDPCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          width='100px'
          height='100px'
          alt=''
        />
        <IconButton className='like-button'>
          <HeartSVG />
        </IconButton>
      </div>
      <h2>Books and Library</h2>
    </div>
  );
};

export default Card;
