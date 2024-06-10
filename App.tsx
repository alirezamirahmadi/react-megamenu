import { MenuType } from "./src/types/megaMenuType";
import Menu from "./src/components/menu/Menu";
import './src/styles/main.css';
function App() {

  const menu: MenuType = {
    title: "AnnaLena",
    href: "#",
    items: [
      { title: "apple1", href: "#" },
      { title: "apple2", href: "#" },
      { title: "apple3", href: "#" },
      { title: "apple4", href: "#" },
      { title: "apple5", href: "#" },
    ],
    description: "anna and lena are my love :))",
  }

  return (
    <>
      <h1>React MegaMenu</h1>
      <Menu menu={menu} />
    </>
  )
}

export default App
