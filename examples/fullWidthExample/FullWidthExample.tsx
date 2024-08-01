import * as React from "react";

import ReactMegaMenu from "../../src/reactMegaMenu/ReactMegaMenu";
import { MenuType } from "../../src/types/megaMenuType";
import "../styles/example.css";

const menu: MenuType[] = [
  {
    id: "1",
    title: "Phone",
    href: "#",
    items: [
      { id: "1", title: "Redmi 9", href: "#" },
      { id: "2", title: "Redmi 10", href: "#" },
      { id: "3", title: "Redmi 11", href: "#" },
    ],
    description: "my phones are very useful",
  },
  {
    id: "2",
    title: "Monitor",
    href: "#",
    items: [
      { id: "1", title: "LG 22fm", href: "#" },
      { id: "2", title: "LG 20se", href: "#" },
      { id: "3", title: "samsung 19ye", href: "#" },
      { id: "4", title: "samsung 24qwe", href: "#" },
    ]
  },
  {
    id: "3",
    title: "Laptop",
    href: "#",
    items: [
      { id: "1", title: "Asus a1", href: "#" },
      { id: "2", title: "Asus gt23", href: "#" },
      { id: "3", title: "Dell er56", href: "#" },
      { id: "4", title: "Lenovo rt", href: "#" },
      { id: "5", title: "Dell fg23", href: "#" },
    ]
  },
]

export default function FullWidthExample(): React.JSX.Element {
  return (
    <>
      <nav>
        <ul className="example-ul">
          <li className="example-li">
            <a href="#">Home</a>
          </li>
          <li className="example-li">
            <a href="#">
              Products
              <svg className="example-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </a>
            <div className="example-megamenu">
              <ReactMegaMenu menus={menu} options={{ fullWidth: true }} />
            </div>
          </li>
          <li className="example-li">
            <a href="#">Team</a>
          </li>
          <li className="example-li">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

    </>
  )
}