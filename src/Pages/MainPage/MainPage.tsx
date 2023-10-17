import HeaderBar from '../../Components/Header/HeaderBar';
import WordSetsCarousel from '../../Components/Sets/WordSetsCarousel';

import './style.scss';
import Statistics from '../../Components/Sets/Statistics';
import ProfileCard from '../../Components/UserProfile/ProfileCard';
import QuickStartSet from '../../Components/Sets/QuickStartSet';

const MainPage = () => {
  return (
    <>
      <main>
        <HeaderBar />
        <WordSetsCarousel />
        <Statistics />
      </main>
      <aside>
        <ProfileCard />
        <QuickStartSet />
      </aside>
    </>
  );
};

export default MainPage;
