import { AppState } from "../rootReducer";

import { createSelector } from 'reselect';

const getUsers = (state: AppState) => state.users['usersList'];;

export const getUsersSelector = createSelector([getUsers], users => {
  return users;
});

const getTotalUsers = (state: AppState) => state.users['totalUsers'];;

export const getTotalUsersSelector = createSelector([getTotalUsers], totalUsers => {
  return totalUsers;
});

const getUser = (state: AppState) => state.users['user'];;

export const getUserSelector = createSelector([getUser], user => {
  return user;
});

const getPending = (state: AppState) => state.users['pending'];;

export const getPendingSelector = createSelector([getPending], pending => {
  return pending;
});

const getError = (state: AppState) => state.users['error'];;

export const getErrorSelector = createSelector([getError], error => {
  return error;
});

