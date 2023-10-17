import './style.scss';
import { useEffect, useRef, useState, FC, ReactNode } from 'react';
import CustomNavLink from './CustomNavLink';
import {
  BookSVG,
  DateSVG,
  ExploreSVG,
  HomeSVG,
  LogOutSVG,
  SetSVG,
} from '../../assets/svgAssets';
import PremiumAdv from '../Advertisements/PremiumAdv';

interface DesktopNavProps {
  children: ReactNode;
}

const DesktopNav: FC<DesktopNavProps> = ({ children }) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0 });
  const [activeElement, setActiveElement] = useState('Dashboard');

  useEffect(() => {
    const handlePosition = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setPosition({ top: rect.top });
      }
    };

    handlePosition();
  }, []);

  console.log(position);

  return (
    <div className='wrapper'>
      <nav>
        <div className='background-filler' style={position}>
          <div className='box'>
            <div className='curve'></div>
          </div>
        </div>
        <div className='wrap'>
          <CustomNavLink
            to='dashboard'
            name='Dashboard'
            setPosition={setPosition}
            activeElement={activeElement}
            setActiveElement={setActiveElement}>
            <HomeSVG />
            Dashboard
          </CustomNavLink>
          <CustomNavLink
            to='explore'
            name='Explore'
            setPosition={setPosition}
            activeElement={activeElement}
            setActiveElement={setActiveElement}>
            <ExploreSVG />
            Explore
          </CustomNavLink>
          <CustomNavLink
            to='dictionary'
            name='Dictionary'
            setPosition={setPosition}
            activeElement={activeElement}
            setActiveElement={setActiveElement}>
            <BookSVG />
            Dictionary
          </CustomNavLink>
          <CustomNavLink
            to='schedule'
            name='Schedule'
            setPosition={setPosition}
            activeElement={activeElement}
            setActiveElement={setActiveElement}>
            <DateSVG />
            Schedule
          </CustomNavLink>
          <div className='decor-element'></div>
          <CustomNavLink
            to='setting'
            name='Settings'
            setPosition={setPosition}
            activeElement={activeElement}
            setActiveElement={setActiveElement}>
            <SetSVG />
            Settings
          </CustomNavLink>
          <CustomNavLink
            to='/'
            name='Log Out'
            setPosition={setPosition}
            activeElement={activeElement}
            setActiveElement={setActiveElement}>
            <LogOutSVG />
            Log Out
          </CustomNavLink>
        </div>

        <PremiumAdv />
      </nav>
      {children}
    </div>
  );
};

export default DesktopNav;
