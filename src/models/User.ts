import { NotificationElement } from './Notification';

export default interface User {
  uid: string | undefined;
  userStatus: 'user' | 'proUser' | 'admin' | 'moderator';
  name: string | undefined;
  email: string | undefined;
  completedLessonsQuantity: number;
  terms: number;
  favoriteSets: number[];
  completedSets: string[];
  notifications?: NotificationElement[];
  wordsInVocab: string[];
  completedExams: string[];
  statistics?: object[];
}
