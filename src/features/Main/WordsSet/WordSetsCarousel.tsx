import { useEffect, useState, forwardRef, CSSProperties } from 'react';

import './style.scss';
import ListOfSetCards from './ListOfSetCards';
import { useAppSelector } from '../../../hooks/redux';
import HistoryButtons from '../../UI/HistoryButtons';

interface WordSetsCarouselProps {
  visibleElements: number;
}

interface listOfCards {
  id: number;
  imageSrc: string;
  name: string;
  style?: CSSProperties;
}

export interface listOfCardsWithFav extends listOfCards {
  favorite: boolean;
}

const WordSetsCarousel = forwardRef<HTMLDivElement, WordSetsCarouselProps>(
  ({ visibleElements = 3 }, listRef) => {
    const listOfCards: listOfCards[] = [
      {
        id: 1,
        imageSrc:
          'https://s3-alpha-sig.figma.com/img/afcc/bb32/2710203dc62174522009d28ae64f1597?Expires=1698019200&Signature=SjTurmEkk4fpUxzI3TT31i1i4~rRbxTCvfhbWdIlSVmvSXRlAR2gXI061rciMPrQnVeVf-DxVJARZybVjo-FOjA4FCdLn~Thkcc0N4AnG20~wTD~0bVXZJE4f69Ztu1jIYDgo9x11uoz9cnYQduuyWJXcvJL2zzFJqSIAQ9s8e6QFcroFh8Rs4foDTdNX7hTQGrr108jKsYyUApR8Bi1QrvZc-TeddbvUhzA2znvqb6Tx5nKcRn74iAcSV56tA9uHQunG1jScvmP7WtpFtZs1YZ4Ry3-yeQ247VMU8MFy7Lzj0PVcdhO7W69bPtwBtQ8AW~IkVhd3XsAGE8nBfDPCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: 'Books and Library',
        style: {
          background:
            'linear-gradient(330deg, rgba(113,144,235,1) 0%, rgba(255,134,134,1) 80%, rgba(255,255,255,1) 100%)',
        },
      },
      {
        id: 2,
        imageSrc:
          'https://s3-alpha-sig.figma.com/img/0bcc/4d0a/08dd79ebd671821439ca248ebe723006?Expires=1698624000&Signature=nU7k7HLMF63a8gibg8Ppa-GyoC-Gd3ouGsutDNeqqKB-UhXvYLaF0dhrnf2oogDiwnV-l7NRYhYANtx9R5fo5FET09K7UVNX~GgDUel8UGOx4USRLQZVIlMhT00l6~JhVAHVNw-5LgaPAFBr~iqS28E6swojB7rafFLlN2nTQ1S5tJJDWWGtemnik-djj36jcM2~F4ThXUCYYDokwxTbw~DtzaZJ7jJF9~yVQBbDsm7q2yLpt~qkOqwXqyW-iRb8oBP-x9LV00B7iqkbDGAezyzGgVLzMA1O9bnKg91As8dwQSp-~nt4~Vgo3HSNwc2EHc~Gx4UY5~GYpmYS8JxxGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: 'Countries and cities',
        style: {
          background: `linear-gradient(217deg, rgb(255 151 151 / 80%), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgb(203 13 255 / 80%), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgb(231 135 245 / 80%), rgba(0, 0, 255, 0) 70.71%)`,
        },
      },

      {
        id: 3,
        imageSrc:
          'https://s3-alpha-sig.figma.com/img/0593/ca9e/ec1fd8693fd357167a2e507bc8e8b53f?Expires=1698624000&Signature=TdutfHru~mzVbNZvcShO6CS3BN2BpJV-HLdE-uGIKL1vYIpNCceXPuT8pKBs2zVnVbKdlxf2MNxU3AG-wmVO8QO-8LfG6tV2IXyWu3vHUxrneWIEPXR4El8gzhf-GaQf9XyMQCkbKaw3Sjhzel6seqD1GR~qw0OdxocH8MD4qexXhRubdDDz~fLoSVmDTsS-BiOAu2BKg4g0Mu~EEM0UNYpnyqr69G~eXFTsolzbyRbgWSTDhQszBzI4rQ0pT6xGBmrtoRoc5sCCaIKIP3NQvHwVB2Lg8DvuBfa1i0mo9-7crxZrm0BdeCINK2FZlZZENPgAEj5VAXOfYSJFmJ0glw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: "What is o'clock now?",
        style: {
          background: `linear-gradient(217deg, rgb(134 247 255 / 80%), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgb(156 238 254 / 44%), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgb(239 127 255 / 170%), rgba(0, 0, 255, 0) 86.71%)`,
        },
      },
      {
        id: 4,
        imageSrc: '',
        name: 'Books and Library',
      },
      {
        id: 5,
        imageSrc: '',
        name: 'Books and Library',
      },
      {
        id: 6,
        imageSrc: '',
        name: 'Books and Library',
      },
      {
        id: 7,
        imageSrc: '',
        name: 'Books and Library',
      },
    ];

    const favoriteSets = useAppSelector((state) => state.user.favoriteSets);

    const changedListOfCards: listOfCardsWithFav[] = listOfCards.map(
      (element) => {
        return {
          ...element,
          favorite: favoriteSets.some((elem) => elem === element.id),
        };
      }
    );

    const [moveElement, setMoveElement] = useState({
      transform: 'translateX(0%)',
    });
    const [positionOfElements, setPositionOfElements] = useState(0);

    const handleRightClick = () => {
      setPositionOfElements((prev) => prev + 1);
    };
    const handleLeftClick = () => {
      setPositionOfElements((prev) => prev - 1);
    };

    useEffect(() => {
      setPositionOfElements(0);
    }, [visibleElements]);

    useEffect(() => {
      const translateX = `translateX(calc(-${100 * positionOfElements}% - ${
        24 * positionOfElements
      }px))`;

      setMoveElement((prevValue) => ({
        ...prevValue,
        transform: translateX,
      }));
    }, [positionOfElements]);

    const activeRightButton: boolean =
      positionOfElements * visibleElements <
      changedListOfCards.length - visibleElements;

    const activeLeftButton: boolean = positionOfElements * visibleElements > 0;

    return (
      <div className='words-set'>
        <div className='list-header'>
          <h1>Words sets</h1>
          <HistoryButtons
            activeRightButton={activeRightButton}
            onClickRightButton={handleRightClick}
            activeLeftButton={activeLeftButton}
            onClickLeftButton={handleLeftClick}
          />
        </div>
        <div ref={listRef} className='list-wrap'>
          <div style={moveElement} className='cards-list'>
            <ListOfSetCards
              listOfCards={changedListOfCards}
              visibleElements={visibleElements}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default WordSetsCarousel;
