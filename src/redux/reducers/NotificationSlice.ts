import { PayloadAction } from '@reduxjs/toolkit';
import { NotificationElement } from '../../models/Notification';
import { createSlice } from '@reduxjs/toolkit';

interface NotificationsState {
  notifications: NotificationElement[];
}

const initialState: NotificationsState = {
  notifications: [
    {
      id: 1,
      text: 'Welcome to the English learning site',
      viewed: false,
    },
    {
      id: 2,
      text: `We are sincerely glad that you decide to visit our web site.
      You will find there nothing more than the main page and how it works.
      There are a few animations, and there is some logic in components.
      But it doesn't work with any servers or databases, yet.
      `,
      viewed: true,
    },
    {
      id: 3,
      text: `We are sincerely glad that you decide to visit our web site.
      You will find there nothing more than the main page and how it works.
      There are a few animations, and there is some logic in components.
      But it doesn't work with any servers or databases, yet.
      `,
      viewed: true,
    },
    {
      id: 4,
      text: `We are sincerely glad that you decide to visit our web site.
      You will find there nothing more than the main page and how it works.
      There are a few animations, and there is some logic in components.
      But it doesn't work with any servers or databases, yet.
      `,
      viewed: true,
    },
    {
      id: 5,
      text: `We are sincerely glad that you decide to visit our web site.
      You will find there nothing more than the main page and how it works.
      There are a few animations, and there is some logic in components.
      But it doesn't work with any servers or databases, yet.
      `,
      viewed: true,
    },
    {
      id: 6,
      text: `We are sincerely glad that you decide to visit our web site.
      You will find there nothing more than the main page and how it works.
      There are a few animations, and there is some logic in components.
      But it doesn't work with any servers or databases, yet.
      `,
      viewed: true,
    },
    {
      id: 7,
      text: `We are sincerely glad that you decide to visit our web site.
      You will find there nothing more than the main page and how it works.
      There are a few animations, and there is some logic in components.
      But it doesn't work with any servers or databases, yet.
      `,
      viewed: true,
    },
  ],
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setViewedState: (state) => {
      state.notifications = state.notifications.map((elem) => {
        return { ...elem, viewed: true };
      });
    },
    addNotification: (state, action: PayloadAction<NotificationElement>) => {
      state.notifications.push(action.payload);
    },
    deleteNotification: (state, action: PayloadAction<NotificationElement>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload.id
      );
    },
  },
});

export const { setViewedState, addNotification, deleteNotification } =
  notificationsSlice.actions;
export default notificationsSlice.reducer;
