import { MenuType, ItemType } from "../../types/megaMenuType";
import './menu.css';

export default function Menu({ menu }: { menu: MenuType }): React.JSX.Element {

  return (
    <>
      <div className="rmm-menu-main">
        <div className="rmm-menu-head">
          {menu.icon && <div className="rmm-menu-head__icon">{menu.icon}</div>}
          <a href={menu.href ?? '#'} className="rmm-menu-head__link">
            <span className="rmm-menu-head__title">{menu.title}</span>
            {menu.description && <span className="rmm-menu-head__des">{menu.description}</span>}
          </a>
        </div>
        <ul className="rmm-menu-ul">
          {
            menu.items.map((item: ItemType) => (
              <li key={item.title} className="rmm-menu-item">
                {item.icon && <div className="rmm-menu-item__icon">{item.icon}</div>}
                <a href={item.href} className="rmm-menu-item__link">
                  <span className="rmm-menu-item__title">{item.title}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}