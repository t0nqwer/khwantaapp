import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/side-menu/Main";
import SimpleMenu from "../layouts/simple-menu/Main";
import TopMenu from "../layouts/top-menu/Main";
import Page1 from "../views/page-1/Main";
import AddDesign from "../views/AddDesign/Main";
import AddProduct from "../views/AddProduct/Main";
import OtherProduct from "../views/OtherProduct/Main";
import AddImportProduct from "../views/AddImportProduct/Main"
import ProductGrid from "../views/product-grid/Main";
import Product from "../views/product-grid/Product/product";
import Stock from "../views/Stock/Main";
import Warehouse from "../views/warehouse/Main";

function Router({ setCurrentId }) {
  const routes = [
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/",
          element: <Page1 />,
        },
        {
          path: "product",
          element: <ProductGrid setCurrentId={setCurrentId} />,
        },
        {
          path: "add-design",
          element: <AddDesign />,
        },
        {
          path: "add-cloth",
          element: <AddProduct />,
        },
        {
          path: "add-Other-Product",
          element: <OtherProduct />,
        },
        {
          path: "add-Outside-Product",
          element: <AddImportProduct />,
        },
        {
          path: "add-Fabric",
          element: <AddDesign />,
        },
        {
          path: "product/:id",
          element: <Product />,
        },
        {
          path: "product/search/",
          element: <ProductGrid />,
        },
        {
          path: "Stock",
          element: <Stock />,
        },
        {
          path: "Stock/:db",
          element: <Warehouse />,
        },
      ],
    },
    {
      path: "/simple-menu",
      element: <SimpleMenu />,
      children: [
        {
          path: "page-1",
          element: <Page1 />,
        },
        {
          path: "product",
          element: <ProductGrid setCurrentId={setCurrentId} />,
        },
        {
          path: "add-product",
          element: <AddDesign />,
        },
      ],
    },
    {
      path: "/top-menu",
      element: <TopMenu />,
      children: [
        {
          path: "page-1",
          element: <Page1 />,
        },
        {
          path: "product",
          element: <ProductGrid setCurrentId={setCurrentId} />,
        },
        {
          path: "add-product",
          element: <AddDesign />,
        },
      ],
    },
  ];

  return useRoutes(routes);
}

export default Router;
