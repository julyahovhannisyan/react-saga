export interface IUsersList {
  id: number;
  name: string;
  email: string;
  photo: string;
  location: string;
  registeredDate?: string;
  lastActiveDate?: string;
  disabled?: boolean;
}

export interface IUserInfo {
  name: string;
  photo: string;
  email: string;
  location: string;
}

export interface IFile {
  url: string;
  name: string;
}
