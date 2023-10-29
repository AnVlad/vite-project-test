import { useAppSelector } from '../../../hooks/redux';
import UserIconAvatar from './UserIconAvatar';
import './style.scss';

const ProfileCard = () => {
  const user = useAppSelector((state) => state.user);

  const userEmail = user.email?.split('@').join(' @');

  return (
    <div className='profile-card'>
      <UserIconAvatar className='profile-avatar' />
      <div className='details'>
        <div className='user-name'>{user.name}</div>
        <div className='user-email'>{userEmail}</div>
        <div className='lesson-details'>
          <div className='lessons'>
            <h4>Lessons</h4>
            <p>{user.completedLessonsQuantity}</p>
          </div>
          <div className='terms'>
            <h4>Terms</h4>
            <p>{user.terms}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
