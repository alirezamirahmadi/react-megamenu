import { useContext } from "react";

import Menu from "../menu/Menu";
import type { MenuType } from "../../types/megaMenuType";
import { MainContext } from "../../reactMegaMenu/ReactMegaMenu";
import "./megaMenu.css";

export default function MegaMenu({ menus }: { menus: MenuType[] }): React.JSX.Element {

  const mainContext = useContext(MainContext);

  return (
    <>
      <div className="rmm-megamenu-main" style={{ backgroundColor: mainContext.options?.color?.backgroundColor, borderColor: mainContext.options?.color?.borderColor, width: mainContext.options?.fullWidth ? "100%" : "fit-content" }}>
        {
          menus.map((menu: MenuType) => (
            <div key={menu.id} className="rmm-megamenu-menu">
              <Menu menu={menu} />
            </div>
          ))
        }
        {
          mainContext.options?.CTA &&
          <div className="rmm-megamenu-cta">
            <span className="rmm-megamenu-cta__title">{mainContext.options.CTA.title}</span>
            <span className="rmm-megamenu-cta__des">{mainContext.options.CTA.description}</span>
            {mainContext.options.CTA.button}
          </div>
        }
      </div>
    </>
  )
}

export {
  MainContext
}