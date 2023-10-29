import './style.scss';
import { useEffect, useRef, useState } from 'react';
import CustomNavLink from './CustomNavLink';
import {
  BookSVG,
  DateSVG,
  ExploreSVG,
  HomeSVG,
  LogOutSVG,
  SetSVG,
} from '../../assets/svgAssets';
import PremiumAdv from './Advertisements/PremiumAdv';

const DesktopNav = ({ showNav }: { showNav: boolean }) => {
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

  const defPropsToNavLink = {
    setPosition: setPosition,
    activeElement: activeElement,
    setActiveElement: setActiveElement,
  };

  return (
    <nav className={`${showNav ? '' : 'disable'}`}>
      <div className='background-filler' style={position}>
        <div className='box'>
          <div className='curve'></div>
        </div>
      </div>
      <div className='burger-button-place'></div>
      <div className='wrap'>
        <CustomNavLink to='dashboard' name='Dashboard' {...defPropsToNavLink}>
          <HomeSVG />
          Dashboard
        </CustomNavLink>
        <CustomNavLink to='explore' name='Explore' {...defPropsToNavLink}>
          <ExploreSVG />
          Explore
        </CustomNavLink>
        <CustomNavLink to='dictionary' name='Dictionary' {...defPropsToNavLink}>
          <BookSVG />
          Dictionary
        </CustomNavLink>
        <CustomNavLink to='schedule' name='Schedule' {...defPropsToNavLink}>
          <DateSVG />
          Schedule
        </CustomNavLink>
        <div className='decor-element'></div>
        <CustomNavLink to='setting' name='Settings' {...defPropsToNavLink}>
          <SetSVG />
          Settings
        </CustomNavLink>
        <CustomNavLink to='/' name='Log Out' {...defPropsToNavLink}>
          <LogOutSVG />
          Log Out
        </CustomNavLink>
      </div>

      <PremiumAdv />
    </nav>
  );
};

export default DesktopNav;
