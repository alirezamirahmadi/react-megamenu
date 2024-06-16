import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ReactMegaMenu from '../../src/reactMegaMenu/ReactMegaMenu';
import type { MenuType } from '../../src/types/megaMenuType';

test("it show CTA button on megamenu", () => {
  const menus: MenuType[] = [
    {
      id: "1", title: "HeadMenu", href: "#",
      items: [{ id: "1", title: "ItemMenu", href: "#" }],
      description: "description",
    },
  ]

  render(<ReactMegaMenu menus={menus} options={{
    CTA: {
      title: "CTA title", description: "CTA description",
      button: <button>CTA button</button>
    }
  }} />)

  const button = screen.getByRole('button', { name: 'CTA button' });

  expect(screen.getByText("CTA title"));
  expect(screen.getByText("CTA description"));
  expect(button).toBeInTheDocument();
})

test("it show image on megamenu", () => {
  const menus: MenuType[] = [
    {
      id: "1", title: "HeadMenu", href: "#",
      items: [{ id: "1", title: "ItemMenu", href: "#" }],
      description: "description",
    },
  ]

  render(<ReactMegaMenu menus={menus} options={{
    image:{
      src:"",
      href:"#",
      title:"image title",
      button: <button>image button</button>
    }
  }} />)

  const button = screen.getByRole("button", { name: "image button" });

  expect(screen.getByText("image title"));
  expect(button).toBeInTheDocument();
})

