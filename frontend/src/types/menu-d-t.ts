export interface IMenuItem {
  id: number;
  label: string;
  url: string;
  img?: string;
  submenu?: IMenuItem[];
  home_menu?: boolean;
}

interface MenuLink {
  id: number;
  label: string;
  url: string;
  img?: string;
}

export interface IMenuItemTwo {
  id: number;
  label: string;
  url: string;
  home_menus?: MenuLink[];
  pagesMenus?: {id:number;links:MenuLink[]}[];
  submenu?: MenuLink[];
}