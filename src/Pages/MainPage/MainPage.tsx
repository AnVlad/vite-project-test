import { useState } from 'react';

import './style.scss';
import Statistics from '../../features/Main/Statistics/Statistics';
import ProfileCard from '../../features/AsideSection/UserProfile/ProfileCard';
import QuickStartSet from '../../features/AsideSection/QuickStartSet/QuickStartSet';
import WordsSetsLayout from '../../features/Layouts/WordsSetsLayout';
import DesktopNav from '../../features/Navigation/DesktopNav';
import HeaderBar from '../../features/Main/Header/HeaderBar';

const MainPage = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className='wrapper'>
      <DesktopNav showNav={showNav} />
      <main>
        <HeaderBar showNav={showNav} setShowNav={setShowNav} />
        <WordsSetsLayout />
        <Statistics />
      </main>
      <aside>
        <ProfileCard />
        <QuickStartSet />
      </aside>
    </div>
  );
};

export default MainPage;
