import { MenuType } from "./src/types/megaMenuType";
import ReactMegaMenu from "./src/reactMegaMenu/ReactMegaMenu";

function App() {

  const menu: MenuType[] = [
    {
      id: "1",
      title: "AnnaLena",
      href: "#",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>,
      items: [
        {
          id: "1", title: "apple1", href: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
          </svg>,
        },
        { id: "2", title: "apple2", href: "#" },
        { id: "3", title: "apple3", href: "#" },
        { id: "4", title: "apple4", href: "#" },
        { id: "5", title: "apple5", href: "#" },
      ],
      description: "anna and lena are my love :))",
    },
    {
      id: "2",
      title: "LenaAnna",
      href: "#",
      items: [
        { id: "1", title: "orange1", href: "#" },
        { id: "2", title: "orange2", href: "#" },
        { id: "3", title: "orange3", href: "#" },
        { id: "4", title: "orange4", href: "#" },
        { id: "5", title: "orange5", href: "#" },
      ],
      description: "anna and lena are my love :))",
    },
    {
      id: "3",
      title: "Fakhri",
      href: "#",
      items: [
        { id: "1", title: "fig1", href: "#" },
        { id: "2", title: "fig2", href: "#" },
        { id: "3", title: "fig3", href: "#" },
        { id: "4", title: "fig4", href: "#" },
        { id: "5", title: "fig5", href: "#" },
      ],
      description: "anna and lena are my love :))",
    },
  ]

  return (
    <>
      <h1>React MegaMenu</h1>
      <ReactMegaMenu menus={menu} options={{
        color: { backgroundColor: "#ccc", headTitle: "#fff", description: "#000", itemTitle: "#ff0000" }, fullWidth: false,
        CTA: {
          title: "Our Brands", description: "At Flowbite, we have a portfolio of brands that cater to a variety of preferences.",
          button: <button>Click me!</button>
        }
      }} />
    </>
  )
}

export default App
