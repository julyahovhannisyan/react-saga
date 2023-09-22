import { IFile, IUsersList } from "../../models/users";
import {
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_FAILURE,
  USERS_SORT_REQUEST,
  USERS_SORT_SUCCESS,
  USERS_SORT_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_ADD_FAILURE,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILURE,
  USER_UPLOAD_IMAGE_REQUEST,
  USER_UPLOAD_IMAGE_FAILURE,
  USER_UPLOAD_IMAGE_SUCCESS,
  TOTAL_USERS_REQUEST,
  TOTAL_USERS_SUCCESS,
  TOTAL_USERS_FAILURE,
} from "./actionType";

export interface UsersState {
  pending: boolean;
  page: number;
  limit: number;
  sortFildName: string;
  sortDirection: string;
  usersList: IUsersList[];
  user: IUsersList;
  newUser: any;
  totalUsers: IUsersList[];
  updatedUser: any;
  image: IFile;
  error: string | null;
}

// users
export interface UsersRequestPayload {
  page: number;
  limit: number;
}

export interface UsersSuccessPayload {
  usersList: IUsersList[];
}

export interface UsersFailurePayload {
  error: string;
}

export interface UsersRequest {
  type: typeof USERS_REQUEST;
  payload: UsersRequestPayload;
}

export type UsersSuccess = {
  type: typeof USERS_SUCCESS;
  payload: UsersSuccessPayload;
};

export type UsersFailure = {
  type: typeof USERS_FAILURE;
  payload: UsersFailurePayload;
};

// total user
export interface TotalUsersRequestPayload {
  type: typeof TOTAL_USERS_REQUEST
}

export interface TotalUsersFailurePayload {
  error: string;
}

export interface TotalUsersSuccessPayload {
  totalUsers: IUsersList;
}

export interface TotalUsersRequest {
  type: typeof TOTAL_USERS_REQUEST;
  payload: TotalUsersRequestPayload;
}

export type TotalUsersSuccess = {
  type: typeof TOTAL_USERS_SUCCESS;
  payload: TotalUsersSuccessPayload;
};

export type TotalUsersFailure = {
  type: typeof TOTAL_USERS_FAILURE;
  payload: TotalUsersFailurePayload;
};

// user
export interface UserRequestPayload {
  id: number;
}

export interface UserFailurePayload {
  error: string;
}

export interface UserSuccessPayload {
  user: IUsersList;
}

export interface UserRequest {
  type: typeof USER_REQUEST;
  payload: UserRequestPayload;
}

export type UserSuccess = {
  type: typeof USER_SUCCESS;
  payload: UserSuccessPayload;
};

export type UserFailure = {
  type: typeof USER_FAILURE;
  payload: UserFailurePayload;
};

// sort
export interface UsersSortPayload {
  fieldName: string;
  direction: string;
}

export interface UsersSortFailurePayload {
  error: string;
}

export interface UsersSortSuccessPayload {
  usersList: IUsersList[];
}

export interface UsersSortRequest {
  type: typeof USERS_SORT_REQUEST;
  payload: UsersSortPayload;
}

export type UsersSortSuccess = {
  type: typeof USERS_SORT_SUCCESS;
  payload: UsersSortSuccessPayload;
};

export type UsersSortFailure = {
  type: typeof USERS_SORT_FAILURE;
  payload: UsersSortFailurePayload;
};

//delete
export interface UserDeleteRequestPayload {
  id: number;
}

export interface UserDeleteFailurePayload {
  error: string;
}

export interface UserDeleteSuccessPayload {
  id: number;
}

export interface UserDeleteRequest {
  type: typeof USER_DELETE_REQUEST;
  payload: UserDeleteRequestPayload;
}

export type UserDeleteSuccess = {
  type: typeof USER_DELETE_SUCCESS;
  payload: UserDeleteSuccessPayload;
};

export type UserDeleteFailure = {
  type: typeof USER_DELETE_FAILURE;
  payload: UserDeleteFailurePayload;
};

//add
export interface UserAddRequestPayload {
  email: string;
  location: string;
  name: string;
  photo?: string;
}

export interface UserAddFailurePayload {
  error: string;
}

export interface UserAddSuccessPayload {
  newUser: any;    //type: typeof USER_ADD_SUCCESS;
}

export interface UserAddRequest {
  type: typeof USER_ADD_REQUEST;
  payload: UserAddRequestPayload;
}

export type UserAddSuccess = {
  type: typeof USER_ADD_SUCCESS;
  payload: UserAddSuccessPayload;
};

export type UserAddFailure = {
  type: typeof USER_ADD_FAILURE;
  payload: UserAddFailurePayload;
};

//update
export interface UserUpdateRequestPayload {
  id: number;
  values: {
    name: string;
    photo: any;
    email: string;
    location: string;
  };
}

export interface UserUpdateFailurePayload {
  error: string;
}

export interface UserUpdateSuccessPayload {
  updatedUser: any;
}

export interface UserUpdateRequest {
  type: typeof USER_UPDATE_REQUEST;
  payload: UserUpdateRequestPayload;
}

export type UserUpdateSuccess = {
  type: typeof USER_UPDATE_SUCCESS;
  payload: UserUpdateSuccessPayload;
};

export type UserUpdateFailure = {
  type: typeof USER_UPDATE_FAILURE;
  payload: UserUpdateFailurePayload;
};

//upload image
export interface UserUploadImageRequestPayload {
  image: any;
}

export interface UserUploadImageFailurePayload {
  error: string;
}

export interface UserUploudImageSuccessPayload {
  type: typeof USER_UPLOAD_IMAGE_SUCCESS
}

export interface UserUploadImageRequest {
  type: typeof USER_UPLOAD_IMAGE_REQUEST;
  payload: UserUploadImageRequestPayload;
}

export type UserUploadImageSuccess = {
  type: typeof USER_UPLOAD_IMAGE_SUCCESS;
};

export type UserUploadImageFailure = {
  type: typeof USER_UPLOAD_IMAGE_FAILURE;
  payload: UserUploadImageFailurePayload;
};

export type UsersActions =
  | UsersRequest
  | UsersSuccess
  | UsersFailure
  | TotalUsersRequest
  | TotalUsersSuccess
  | TotalUsersFailure
  | UsersSortRequest
  | UsersSortSuccess
  | UsersSortFailure
  | UserAddRequest
  | UserAddSuccess
  | UserAddFailure
  | UserUpdateRequest
  | UserUpdateSuccess
  | UserUpdateFailure
  | UserRequest
  | UserSuccess
  | UserFailure
  | UserDeleteRequest
  | UserDeleteSuccess
  | UserDeleteFailure
  | UserUploadImageFailure
  | UserUploadImageRequest
  | UserUploadImageSuccess;
