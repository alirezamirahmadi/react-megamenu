import { createContext } from "react";
import { BrowserRouter } from 'react-router-dom';

import MegaMenu from "../components/megaMenu/MegaMenu";
import type { ReactMegaMenuType } from "../types/megaMenuType";
import type { ContextType } from "../types/contextType";
import defaultOptions from "../defaults/defaultOptions";
import "../styles/main.css";

const MainContext = createContext<ContextType>({
  options: undefined,
})

export default function ReactMegaMenu({ direction = "ltr", menus, options }: ReactMegaMenuType): React.JSX.Element {

  return (
    <>
      <MainContext.Provider value={{ options: { ...defaultOptions, ...options } }}>
        <BrowserRouter>
          <div dir={direction}>
            <MegaMenu menus={menus} />
          </div>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  )
}

export {
  MainContext
}