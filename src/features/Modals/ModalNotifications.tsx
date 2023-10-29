import { MouseEvent, forwardRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deleteNotification } from '../../redux/reducers/NotificationSlice';
import { NotificationElement } from '../../models/Notification';

import './style.scss';

interface ModalNotificationsProps {
  position?: object;
}

const ModalNotifications = forwardRef<HTMLDivElement, ModalNotificationsProps>(
  ({ position, ...rest }, ref) => {
    const handleClickOnNotifications = (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
    };

    const dispatch = useAppDispatch();

    const notifications = useAppSelector(
      (state) => state.notifications.notifications
    );

    const notificationsQuantity = useAppSelector(
      (state) => state.notifications.notifications.length
    );

    const handleDeleteNotification = (notification: NotificationElement) => {
      if (!notification.id) return;
      dispatch(deleteNotification(notification));
    };

    return (
      <div
        onClick={handleClickOnNotifications}
        className='modal-notifications'
        style={position}
        ref={ref}
        {...rest}>
        <div className='notifications-wrap'>
          {notificationsQuantity > 0 &&
            notifications.map((notification) => {
              return (
                <div
                  className={`notification ${notification.viewed && 'viewed'}`}
                  key={notification.id}
                  onClick={() => handleDeleteNotification(notification)}>
                  {notification.text}
                </div>
              );
            })}
          {notificationsQuantity === 0 && (
            <div className='notification viewed'>
              There is no notifications currently
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default ModalNotifications;
