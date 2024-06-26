import { useContext } from "react";
import { Link } from 'react-router-dom'

import type { MenuType, ItemType } from "../../types/megaMenuType";
import { MainContext } from "../../reactMegaMenu/ReactMegaMenu";
import './menu.css';

export default function Menu({ menu }: { menu: MenuType }): React.JSX.Element {

  const mainContext = useContext(MainContext);

  return (
    <>
      <div className="rmm-menu-main">
        <div className="rmm-menu-head">
          {menu.icon && <div className="rmm-menu-head__icon" style={{ color: mainContext.options?.color?.headTitle }}>{menu.icon}</div>}
          <Link to={menu.href ?? '#'} className="rmm-menu-head__link">
            <span className="rmm-menu-head__title" style={{ color: mainContext.options?.color?.headTitle }}>{menu.title}</span>
            {menu.description && <span className="rmm-menu-head__des" style={{ color: mainContext.options?.color?.description }}>{menu.description}</span>}
          </Link>
        </div>
        <ul className="rmm-menu-ul">
          {
            menu.items.map((item: ItemType) => (
              <li key={item.id} className="rmm-menu-item">
                {item.icon && <div className="rmm-menu-item__icon" style={{ color: mainContext.options?.color?.itemTitle }}>{item.icon}</div>}
                <Link to={item.href} className="rmm-menu-item__link">
                  <span className="rmm-menu-item__title" style={{ color: mainContext.options?.color?.itemTitle }}>{item.title}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}