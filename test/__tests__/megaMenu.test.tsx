import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import MegaMenu from '../../src/components/megaMenu/MegaMenu';
import type { MenuType } from '../../src/types/megaMenuType';

test("it show megamenu", () => {
  const menus: MenuType[] = [
    {
      id: "1", title: "HeadMenu", href: "#",
      items: [{ id: "1", title: "ItemMenu", href: "#" }],
      description: "description",
    },
    {
      id: "2", title: "HeadMenu", href: "#",
      items: [{ id: "1", title: "ItemMenu", href: "#" }],
      description: "description",
    },
  ]

  render(<BrowserRouter><MegaMenu menus={menus} /></BrowserRouter>)

  expect(screen.getAllByText("HeadMenu")).toHaveLength(2);
  expect(screen.getAllByText("ItemMenu")).toHaveLength(2);
  expect(screen.getAllByText("description")).toHaveLength(2);
})

