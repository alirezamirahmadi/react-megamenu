import { OptionType } from "./optionType";

type ItemType = {
  id: string,
  title: string,
  href: string,
  icon?: React.ReactElement,
}

type MenuType = {
  id: string,
  title: string,
  href?: string,
  icon?: React.ReactElement,
  description?: string,
  items: ItemType[],
}

type ReactMegaMenuType = {
  direction?: 'rtl' | 'ltr' | 'inherit',
  menus: MenuType[],
  options?: OptionType,
}

export type {
  ReactMegaMenuType,
  MenuType,
  ItemType
}