import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setViewedState } from '../../redux/reducers/NotificationSlice';
import IconButton from './IconButton';
import { NotificationSVG } from '../../assets/svgAssets';
import ModalNotifications from '../Modals/ModalNotifications';
import { useOnClickOutside } from 'usehooks-ts';

const NotificationButton = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const dispatch = useAppDispatch();

  const notifQuantity = useAppSelector(
    (state) => state.notifications.notifications.length
  );

  const newNotif = useAppSelector((state) =>
    state.notifications.notifications.some((notif) => {
      return notif.viewed === false;
    })
  );

  const notificationButtonRef = useRef<HTMLButtonElement>(null);
  const notificationWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (notifQuantity === 0) {
      setShowNotifications(false);
    }
  }, [notifQuantity]);

  const handleNotificationsClick = () => {
    setShowNotifications(true);
  };

  const handleOnClickOutside = () => {
    if (showNotifications) {
      dispatch(setViewedState());
    }
    setShowNotifications(false);
  };

  useOnClickOutside(notificationWindowRef, handleOnClickOutside);

  return (
    <>
      <IconButton
        ref={notificationButtonRef}
        onClick={handleNotificationsClick}>
        <NotificationSVG
          className={`notification ${newNotif && 'active-notification'}`}
        />
      </IconButton>

      {showNotifications && <ModalNotifications ref={notificationWindowRef} />}
    </>
  );
};

export default NotificationButton;
