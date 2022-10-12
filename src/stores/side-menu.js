import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        pathname: "/",
        title: "Page 1",
      },
      {
        icon: "ShoppingBag",
        pathname: "/product?page=1",
        title: "สินค้า",
      },
      {
        icon: "ListPlus",
        title: "เพิ่มสินค้า",
        subMenu: [
          { icon: "", pathname: "/add-design", title: "เพิ่มแบบเสื้อผ้า" },
          { icon: "", pathname: "/add-cloth", title: "เพิ่มสินค้า(เสื้อผ้า)" },
          { icon: "", pathname: "/add-Other-Product", title: "เพิ่มสินค้า(อื่นๆ)" },
          { icon: "", pathname: "/add-Outside-Product", title: "เพิ่มสินค้า(รับซื้อ)" },
          { icon: "", pathname: "/add-Fabric", title: "เพิ่มผ้า" },
        ],
      },
      {
        icon: "HardDrive",
        pathname: "/Stock",
        title: "สต๊อค",
      },
    ],
  },
});

export { sideMenu };
