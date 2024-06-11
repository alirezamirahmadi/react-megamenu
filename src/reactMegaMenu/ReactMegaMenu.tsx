import Menu from "../components/menu/Menu";
import { MenuType, ReactMegaMenuType } from "../types/megaMenuType";
import "../styles/main.css";
import "./reactMegaMenu.css";

export default function ReactMegaMenu({ direction = "ltr", menus, options }: ReactMegaMenuType): React.JSX.Element {
  return (
    <>
      <div className="rmm-megamenu-main" dir={direction}>
        {
          menus.map((menu: MenuType) => (
            <div key={menu.id} className="rmm-megamenu-menu">
              <Menu menu={menu} />
            </div>
          ))
        }
      </div>
    </>
  )
}