import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import Menu from '../../src/components/menu/Menu';
import type { MenuType } from '../../src/types/megaMenuType';

test("it show head in the menu", () => {
  const menu: MenuType =
  {
    id: "1", title: "HeadMenu", href: "#",
    items: [{ id: "1", title: "ItemMenu", href: "#" }],
    description: "description",
  }

  render(<BrowserRouter><Menu menu={menu} /></BrowserRouter>);

  expect(screen.getByText("HeadMenu"));
})

test("it show description in the menu", () => {
  const menu: MenuType =
  {
    id: "1", title: "HeadMenu", href: "#",
    items: [{ id: "1", title: "ItemMenu", href: "#" }],
    description: "description",
  }

  render(<BrowserRouter><Menu menu={menu} /></BrowserRouter>);

  expect(screen.getByText("description"));
})

test("it show item in the menu", () => {
  const menu: MenuType =
  {
    id: "1", title: "HeadMenu", href: "#",
    items: [{ id: "1", title: "ItemMenu", href: "#" }],
    description: "description",
  }

  render(<BrowserRouter><Menu menu={menu} /></BrowserRouter>);

  expect(screen.getByText("ItemMenu"));
})