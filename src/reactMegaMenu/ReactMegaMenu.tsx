import { createContext } from "react";

import Menu from "../components/menu/Menu";
import type { MenuType, ReactMegaMenuType } from "../types/megaMenuType";
import type { ContextType } from "../types/contextType";
import defaultOptions from "../defaults/defaultOptions";
import "../styles/main.css";
import "./reactMegaMenu.css";

const MainContext = createContext<ContextType>({
  options: undefined,
})

export default function ReactMegaMenu({ direction = "ltr", menus, options }: ReactMegaMenuType): React.JSX.Element {

  return (
    <>
      <MainContext.Provider value={{ options: { ...defaultOptions, ...options } }}>
        <div className="rmm-megamenu-main" dir={direction}>
          {
            menus.map((menu: MenuType) => (
              <div key={menu.id} className="rmm-megamenu-menu">
                <Menu menu={menu} />
              </div>
            ))
          }
        </div>
      </MainContext.Provider>
    </>
  )
}

export {
  MainContext
}