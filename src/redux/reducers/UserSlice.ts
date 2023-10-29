import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import User from '../../models/User';

const initialState: User = {
  uid: '203941802384732932',
  userStatus: 'admin',
  name: 'Annie Leonchart',
  email: 'annie_leonchart@mail.com',
  completedExams: ['241', '3920', '1', '32'],
  completedLessonsQuantity: 24,
  completedSets: ['012', '001', '002', '003', '004'],
  favoriteSets: [1, 3, 4],
  terms: 1,
  wordsInVocab: ['occupation', 'borderland', 'ripple', 'amidst'],
};

const clearInitState: User = {
  uid: undefined,
  userStatus: 'user',
  name: 'Guest',
  email: '',
  completedExams: [],
  completedLessonsQuantity: 0,
  completedSets: [],
  favoriteSets: [],
  terms: 0,
  wordsInVocab: ['hello', 'world'],
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      if (action.payload?.uid) {
        state = action.payload;
      }
    },
    resetUser: (state) => {
      state = initialState;
    },
    addCompletedExams: (state, action) => {
      if (typeof action.payload === 'string') {
        state.completedExams.push(action.payload);
      }
    },
    addCompletedLessonsQuantity: (state) => {
      state.completedLessonsQuantity += 1;
    },
    changeFavoriteSets: (state, action: PayloadAction<number>) => {
      if (typeof action.payload === 'number') {
        state.favoriteSets.some((elem) => elem === action.payload)
          ? (state.favoriteSets = state.favoriteSets.filter(
              (elem) => elem !== action.payload
            ))
          : state.favoriteSets.push(action.payload);
      }
    },
  },
});

export const {
  setUser,
  resetUser,
  addCompletedExams,
  addCompletedLessonsQuantity,
  changeFavoriteSets,
} = userSlice.actions;
export default userSlice.reducer;
