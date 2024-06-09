import { OptionType } from "./OptionType";

type ItemType = {
  title: string,
  href?: string,
  icon?: React.ReactElement,
}

type MenuType = {
  title: string,
  href?: string,
  icon?: React.ReactElement,
  description?: string,
  items: ItemType[],
}

type ReactMegaMenuType = {
  direction?: 'rtl' | 'ltr' | 'inherit',
  menuItems: MenuType[],
  options?: OptionType,
}

export type {
  ReactMegaMenuType
}