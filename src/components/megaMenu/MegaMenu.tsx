import { useContext, useState } from "react";

import Menu from "../menu/Menu";
import type { MenuType } from "../../types/megaMenuType";
import { MainContext } from "../../reactMegaMenu/ReactMegaMenu";
import "./megaMenu.css";
import { OptionType } from "../../types/optionType";

export default function MegaMenu({ menus }: { menus: MenuType[] }): React.JSX.Element {

  const mainContext = useContext(MainContext);
  const [options,] = useState<OptionType | null>(mainContext.options ?? null);

  return (
    <>
      <div className="rmm-megamenu-main" style={{ backgroundColor: options?.color?.backgroundColor, borderColor: options?.color?.borderColor, width: options?.fullWidth ? "100%" : "fit-content" }}>
        {
          menus.map((menu: MenuType) => (
            <div key={menu.id} className="rmm-megamenu-menu">
              <Menu menu={menu} />
            </div>
          ))
        }
        {
          options?.CTA &&
          <div className="rmm-megamenu-cta">
            <span className="rmm-megamenu-cta__title">{options.CTA.title}</span>
            <span className="rmm-megamenu-cta__des">{options.CTA.description}</span>
            {options.CTA.button}
          </div>
        }
        {
          options?.image &&
          <a href={options.image.href} className="rmm-megamenu-img" style={{ backgroundImage: `url(${options.image.src})` }}>
            <p className="rmm-megamenu-img__title">{options.image.title}</p>
            {options.image.button}
          </a>
        }
      </div>
    </>
  )
}

export {
  MainContext
}