import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  usersFailure,
  usersSuccess,
  usersSortSuccess,
  usersSortFailure,
  userSuccess,
  userFailure,
  userAddSuccess,
  userAddFailure,
  userUpdateSuccess,
  userUpdateFailure,
  userDeleteSuccess,
  userDeleteFailure,
  userUploadImageSuccess,
  userUploadImageFailure,
  totalUsersSuccess,
  totalUsersFailure,
} from "./actions";
import {
  TOTAL_USERS_REQUEST,
  USERS_REQUEST,
  USERS_SORT_REQUEST,
  USER_ADD_REQUEST,
  USER_DELETE_REQUEST,
  USER_REQUEST,
  USER_UPDATE_REQUEST,
  USER_UPLOAD_IMAGE_REQUEST,
  USER_UPLOAD_IMAGE_SUCCESS,
} from "./actionType";
import axiosInstance from "../../configs/development.config";
import { IFile, IUsersList } from "../../models/users";

const users = async (payload: { page: number; limit: number }) => {
  const { page, limit } = payload;
  const url = `/users?_page=${page}&_limit=${limit}&_page=1&_limit=10`;
  const response = await axiosInstance.get<IUsersList[]>(url);

  return response.data;
};

function* UsersSaga(action: any) {
  try {
    const response: IUsersList[] = yield call(users, action.payload);

    yield put(
      usersSuccess({
        usersList: response,
      })
    );
  } catch (e: any) {
    yield put(
      usersFailure({
        error: e.message,
      })
    );
  }
}

const totalUsers = async (payload: any) => {
  const url = `/users`;
  const response = await axiosInstance.get<IUsersList[]>(url);

  return response.data;
};

function* TotalUsersSaga(action: any) {
  try {
    const response: IUsersList = yield call(totalUsers, action.payload);

    yield put(
      totalUsersSuccess({
        totalUsers: response,
      })
    );
  } catch (e: any) {
    yield put(
      totalUsersFailure({
        error: e.message,
      })
    );
  }
}

const user = async (payload: { id: number }) => {
  const { id } = payload;
  const url = `/users/${id}`;
  const response = await axiosInstance.get<IUsersList[]>(url);

  return response.data;
};

function* UserSaga(action: any) {
  try {
    const response: IUsersList = yield call(user, action.payload);

    yield put(
      userSuccess({
        user: response,
      })
    );
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      })
    );
  }
}

const addUser = async (payload: {
  email: string;
  location: string;
  userName: string;
  photo?: string;
}) => {
  const url = `/users`;
  const response = await axiosInstance.post<IUsersList[]>(url, {
    body: payload,
  });

  return response.data;
};

function* AddUserSaga(action: any) {
  try {
    const response: IUsersList = yield call(addUser, action.payload);

    yield put(
      userAddSuccess({
        newUser: response,
      })
    );
  } catch (e: any) {
    yield put(
      userAddFailure({
        error: e.message,
      })
    );
  }
}

const updateUser = async (payload: {
  id: number;
  values: {
    email: string;
    location: string;
    userName: string;
    photo?: string;
  };
}) => {
  const url = `/users/${payload.id}`;
  const response = await axiosInstance.put<IUsersList>(url, {
    body: payload.values,
  });

  return response.data;
};

function* UpdateUserSaga(action: any) {
  try {
    const response: IUsersList = yield call(updateUser, action.payload);

    yield put(
      userUpdateSuccess({
        updatedUser: response,
      })
    );
  } catch (e: any) {
    yield put(
      userUpdateFailure({
        error: e.message,
      })
    );
  }
}

const sortedUser = async (payload: { fieldName: string; direction: string }) => {
  const { fieldName, direction } = payload;
  const url = `/users?_sort=${fieldName}&_order=${direction}`;
  const response = await axiosInstance.get<IUsersList[]>(url);

  return response.data;
};

function* SortedUsersSaga(action: any) {
  try {
    const response: IUsersList[] = yield call(sortedUser, action.payload);

    yield put(
      usersSortSuccess({
        usersList: response,
      })
    );
  } catch (e: any) {
    yield put(
      usersSortFailure({
        error: e.message,
      })
    );
  }
}

const deleteUser = async (payload: { id: number }) => {
  const url = `/users/${payload.id}`;
  const response = await axiosInstance.delete<IUsersList>(url);

  return response.data;
};

function* DeleteUserSaga(action: any) {
  try {

    yield call(deleteUser, action.payload);

    yield put(
      userDeleteSuccess({
        id: action.payload.id,
      })
    );
  } catch (e: any) {
    yield put(
      userDeleteFailure({
        error: e.message,
      })
    );
  }
}

const uploadUserImage = async (payload: { image: IFile }) => {
  const url = `/images`;
  const response = await axiosInstance.post<any>(url, {
    body: payload,
  });

  return response;
};

function* UploadedUserImageSaga(action: any) {
  try {
    yield call(uploadUserImage, action.payload);
    yield put(userUploadImageSuccess(action.payload));
  } catch (e: any) {
    yield put(
      userUploadImageFailure({
        error: e.message,
      })
    );
  }
}

export function* usersSaga() {
  yield all([takeLatest(USERS_REQUEST, UsersSaga)]);
  yield all([takeLatest(TOTAL_USERS_REQUEST, TotalUsersSaga)]);
  yield all([takeLatest(USER_REQUEST, UserSaga)]);
  yield all([takeLatest(USER_ADD_REQUEST, AddUserSaga)]);
  yield all([takeLatest(USER_UPDATE_REQUEST, UpdateUserSaga)]);
  yield all([takeLatest(USER_DELETE_REQUEST, DeleteUserSaga)]);
  yield all([takeLatest(USERS_SORT_REQUEST, SortedUsersSaga)]);
  yield all([takeLatest(USER_UPLOAD_IMAGE_REQUEST, UploadedUserImageSaga)]);
}
