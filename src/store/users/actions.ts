import {
  USERS_REQUEST,
  USERS_FAILURE,
  USERS_SUCCESS,
  USERS_SORT_REQUEST,
  USERS_SORT_SUCCESS,
  USERS_SORT_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILURE,
  USER_ADD_SUCCESS,
  USER_ADD_FAILURE,
  USER_ADD_REQUEST,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_UPLOAD_IMAGE_REQUEST,
  USER_UPLOAD_IMAGE_SUCCESS,
  USER_UPLOAD_IMAGE_FAILURE,
  TOTAL_USERS_SUCCESS,
  TOTAL_USERS_REQUEST,
  TOTAL_USERS_FAILURE,
} from "./actionType";

import {
  UsersRequest,
  UsersSuccess,
  UsersSuccessPayload,
  UsersFailure,
  UsersFailurePayload,
  UsersRequestPayload,
  UsersSortRequest,
  UsersSortPayload,
  UsersSortSuccessPayload,
  UsersSortSuccess,
  UsersSortFailure,
  UsersSortFailurePayload,
  UserRequest,
  UserRequestPayload,
  UserFailurePayload,
  UserFailure,
  UserSuccessPayload,
  UserSuccess,
  UserDeleteRequestPayload,
  UserDeleteRequest,
  UserDeleteSuccessPayload,
  UserDeleteSuccess,
  UserDeleteFailurePayload,
  UserDeleteFailure,
  UserAddSuccess,
  UserAddFailure,
  UserAddRequest,
  UserAddRequestPayload,
  UserAddSuccessPayload,
  UserAddFailurePayload,
  UserUpdateSuccessPayload,
  UserUpdateRequestPayload,
  UserUpdateRequest,
  UserUpdateSuccess,
  UserUpdateFailurePayload,
  UserUpdateFailure,
  UserUploadImageRequestPayload,
  UserUploadImageRequest,
  UserUploadImageSuccess,
  UserUploudImageSuccessPayload,
  UserUploadImageFailurePayload,
  UserUploadImageFailure,
  TotalUsersFailure,
  TotalUsersSuccess,
  TotalUsersRequest,
  TotalUsersSuccessPayload,
  TotalUsersRequestPayload,
  TotalUsersFailurePayload,
} from "./types";

//users
export const usersRequest = (payload: UsersRequestPayload): UsersRequest => ({
  type: USERS_REQUEST,
  payload,
});

export const usersSuccess = (payload: UsersSuccessPayload): UsersSuccess => ({
  type: USERS_SUCCESS,
  payload,
});

export const usersFailure = (payload: UsersFailurePayload): UsersFailure => ({
  type: USERS_FAILURE,
  payload,
});

//total users
export const totalUsersRequest = (payload: TotalUsersRequestPayload): TotalUsersRequest => ({
  type: TOTAL_USERS_REQUEST,
  payload
});

export const totalUsersSuccess = (payload: TotalUsersSuccessPayload): TotalUsersSuccess => ({
  type: TOTAL_USERS_SUCCESS,
  payload,
});

export const totalUsersFailure = (payload: TotalUsersFailurePayload): TotalUsersFailure => ({
  type: TOTAL_USERS_FAILURE,
  payload,
});

//user
export const userRequest = (payload: UserRequestPayload): UserRequest => ({
  type: USER_REQUEST,
  payload,
});

export const userSuccess = (payload: UserSuccessPayload): UserSuccess => ({
  type: USER_SUCCESS,
  payload,
});

export const userFailure = (payload: UserFailurePayload): UserFailure => ({
  type: USER_FAILURE,
  payload,
});

//delete
export const userDeleteRequest = (
  payload: UserDeleteRequestPayload
): UserDeleteRequest => ({
  type: USER_DELETE_REQUEST,
  payload,
});

export const userDeleteSuccess = (
  payload: UserDeleteSuccessPayload
): UserDeleteSuccess => ({
  type: USER_DELETE_SUCCESS,
  payload,
});

export const userDeleteFailure = (
  payload: UserDeleteFailurePayload
): UserDeleteFailure => ({
  type: USER_DELETE_FAILURE,
  payload,
});

//update
export const userUpdateRequest = (
  payload: UserUpdateRequestPayload
): UserUpdateRequest => ({
  type: USER_UPDATE_REQUEST,
  payload,
});

export const userUpdateSuccess = (
  payload: UserUpdateSuccessPayload
): UserUpdateSuccess => ({
  type: USER_UPDATE_SUCCESS,
  payload,
});

export const userUpdateFailure = (
  payload: UserUpdateFailurePayload
): UserUpdateFailure => ({
  type: USER_UPDATE_FAILURE,
  payload,
});

//add
export const userAddRequest = (
  payload: UserAddRequestPayload
): UserAddRequest => ({
  type: USER_ADD_REQUEST,
  payload,
});

export const userAddSuccess = (
  payload: UserAddSuccessPayload
): UserAddSuccess => ({
  type: USER_ADD_SUCCESS,
  payload
});

export const userAddFailure = (
  payload: UserAddFailurePayload
): UserAddFailure => ({
  type: USER_ADD_FAILURE,
  payload,
});

//sort
export const usersSortRequest = (
  payload: UsersSortPayload
): UsersSortRequest => ({
  type: USERS_SORT_REQUEST,
  payload,
});

export const usersSortSuccess = (
  payload: UsersSortSuccessPayload
): UsersSortSuccess => ({
  type: USERS_SORT_SUCCESS,
  payload,
});

export const usersSortFailure = (
  payload: UsersSortFailurePayload
): UsersSortFailure => ({
  type: USERS_SORT_FAILURE,
  payload,
});

//upload image
export const userUploadImageRequest = (
  payload: UserUploadImageRequestPayload
): UserUploadImageRequest => ({
  type: USER_UPLOAD_IMAGE_REQUEST,
  payload,
});

export const userUploadImageSuccess = (
  payload: UserUploudImageSuccessPayload
): UserUploadImageSuccess => ({
  type: USER_UPLOAD_IMAGE_SUCCESS
});

export const userUploadImageFailure = (
  payload: UserUploadImageFailurePayload
): UserUploadImageFailure => ({
  type: USER_UPLOAD_IMAGE_FAILURE,
  payload,
});
