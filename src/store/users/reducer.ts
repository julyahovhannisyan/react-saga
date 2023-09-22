import { IUsersList } from "../../models/users";
import {
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_FAILURE,
  USERS_SORT_REQUEST,
  USERS_SORT_FAILURE,
  USERS_SORT_SUCCESS,
  USER_FAILURE,
  USER_SUCCESS,
  USER_REQUEST,
  USER_DELETE_REQUEST,
  USER_DELETE_FAILURE,
  USER_DELETE_SUCCESS,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_FAILURE,
  USER_ADD_SUCCESS,
  USER_ADD_FAILURE,
  USER_ADD_REQUEST,
  USER_UPLOAD_IMAGE_REQUEST,
  USER_UPLOAD_IMAGE_FAILURE,
  USER_UPLOAD_IMAGE_SUCCESS,
  TOTAL_USERS_REQUEST,
  TOTAL_USERS_SUCCESS,
  TOTAL_USERS_FAILURE,
} from "./actionType";

import { UsersActions, UsersState } from "./types";

export const initialState: UsersState = {
  pending: false,
  page: 1,
  limit: 10,
  sortFildName: "",
  sortDirection: "",
  usersList: [],
  user: {
    id: 0,
    name: "",
    email: "",
    photo: "",
    location: "",
    registeredDate: "",
    lastActiveDate: "",
    disabled: false,
  },
  newUser: {},
  updatedUser: {},
  totalUsers: [],
  image: {url: '', name: ''},
  error: null,
};

const reducers = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case USERS_REQUEST:
      return {
        ...state,
        pending: true,
        page: action.payload.page,
        limit: action.payload.limit,
      };
    case USERS_FAILURE:
      return {
        ...state,
        pending: false,
        usersList: [],
        error: action.payload.error,
      };
    case TOTAL_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        totalUsers: action.payload.totalUsers,
        error: null,
      };
      case TOTAL_USERS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case TOTAL_USERS_FAILURE:
      return {
        ...state,
        pending: false,
        totalUsers: [],
        error: action.payload.error,
      };

    case USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        page: state.page,
        limit: state.limit,
        usersList: action.payload.usersList,
        error: null,
      };
    case USER_REQUEST:
      return {
        ...state,
        pending: true,
        user: action.payload.id,
      };
    case USER_FAILURE:
      return {
        ...state,
        pending: false,
        usersList: [],
        error: action.payload.error,
      };

    case USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null,
      };
    case USERS_SORT_REQUEST:
      return {
        ...state,
        pending: true,
        sortFildName: action.payload.fieldName,
        sortDirection: action.payload.direction,
      };
    case USERS_SORT_FAILURE:
      return {
        ...state,
        pending: false,
        usersList: [],
        error: action.payload.error,
      };

    case USERS_SORT_SUCCESS:
      return {
        ...state,
        pending: false,
        page: 1,
        limit: 10,
        usersList: action.payload.usersList,
        error: null,
      };
    case USER_DELETE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case USER_DELETE_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };

    case USER_DELETE_SUCCESS:
      const deleteId = action.payload.id;
      let users = state.usersList.slice();
      users = users.filter((user: IUsersList) => user.id !== deleteId);

      return {
        ...state,
        usersList: users,
        error: null,
      };
    case USER_UPDATE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case USER_UPDATE_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };

    case USER_UPDATE_SUCCESS:
      const updatedUserId = action.payload.updatedUser.id;
      const updatedUserResponse = action.payload.updatedUser.body;

      let updatedList: IUsersList[] = [...state.usersList].map((c) =>
        c.id === updatedUserId
          ? {
              id: updatedUserId,
              name: updatedUserResponse.name,
              photo: updatedUserResponse.photo,
              email: updatedUserResponse.email,
              location: updatedUserResponse.location,
            }
          : c
      );

      return {
        ...state,
        pending: false,
        userList: updatedList,
      };
    case USER_ADD_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case USER_ADD_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };

    case USER_ADD_SUCCESS:
      const editedUser = action.payload.newUser.body;
      const newUser = {
        id: action.payload.newUser.id,
        name: editedUser.name,
        photo: editedUser.photo,
        location: editedUser.location,
      };

      return {
        ...state,
        pending: false,
        userList: [...state.usersList, newUser],
      };

    case USER_UPLOAD_IMAGE_REQUEST:
      return {
        ...state,
        pending: true,
        image: action.payload.image
      };
    case USER_UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };

    case USER_UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        pending: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducers;
