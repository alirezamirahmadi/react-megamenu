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
  },
  {
    id: "2",
    title: "Monitor",
    href: "#",
    items: [
      { id: "1", title: "LG 22fm", href: "#" },
      { id: "2", title: "LG 20se", href: "#" },
      { id: "3", title: "samsung 19ye", href: "#" },
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
    ]
  },
]

export default function ImageExample(): React.JSX.Element {
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
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
            </a>
            <div className="example-megamenu">
              <ReactMegaMenu menus={menu} options={{
                image: {
                  src: "https://m.media-amazon.com/images/G/31/Amazon-Global-Selling-IN/what_is_international_trade.jpg",
                  href: "#",
                  title: "Preview the new Flowbite dashboard navigation.",
                  button: <button>Click me!</button>
                }
              }} />
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