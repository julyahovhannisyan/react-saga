export interface ISideBarItems {
  icon: string;
  text: string;
  path: string;
  children?: IsubMenu[];
}

export interface IsubMenu {
  text: string;
  path: string;
}
