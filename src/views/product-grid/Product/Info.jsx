import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Lucide } from "@/base-components";
import useDidMountEffect from "../../../hook/useDidMountEffect";
const Info = ({ product }) => {
  const [Brand, setBrand] = useState({ brand_name: "" });
  const [Fabric, setFabric] = useState({ Fabricname: "" });
  const [Pattern, setPattern] = useState({ patternname: "" });
  const [Category, setCategory] = useState({ category: "" });
  const [Product, setProduct] = useState([]);
  const brand = product.brand?.brand_name;
  console.log(brand);
  const category = product.cloth_category;
  const fabric = product.cloth_category;

  useDidMountEffect(() => {
    const [arr] = product.product;
    setProduct(arr);
  }, [product]);
  // console.log(brand);
  // useEffect(() => {
  //   setBrand(brand);
  // }, [brand]);
  // const img = [
  //   ...new Set(
  //     [].concat.apply(
  //       [],
  //       product.map((e) => [
  //         e.code.toUpperCase(),
  //         e.design_name,
  //         e.brand_name,
  //         e.design_descriptionm,
  //         e.title,
  //         e.category_name,
  //         e.pattern_design_name,
  //         e.price,
  //         e.product_stock_barcode,
  //       ])
  //     )
  //   ),
  // ];
  console.log(Product);

  return (
    <div className="">
      <div className="grid grid-cols-11 gap-5 text-base mt-10 lg:text-lg">
        <div className="col-span-2 grid-rows-4 justify-items-end flex flex-col  text-right  ">
          <label htmlFor="horizontal-form-1" className="">
            รหัส :
          </label>
          <label htmlFor="horizontal-form-1" className="">
            Barcode:
          </label>
          <label htmlFor="horizontal-form-2" className=" ">
            ชื่อ :
          </label>
          <label htmlFor="horizontal-form-1" className="">
            แบรนด์ :
          </label>
        </div>
        <div className="col-span-3 grid-rows-4 h-full ">
          <span className="flex">{product.code}</span>
          <span className="flex">{Product?.product_id}</span>
          <span className="flex">{product.design_name}</span>

          <span id="brand" className="flex">
            {Object.values(Brand)}
            {product.brand?.brand_name}
          </span>
        </div>
        <div className="col-span-2 grid-rows-4 flex flex-col  text-right ">
          <label htmlFor="horizontal-form-1" className="">
            ผ้า :
          </label>
          <label htmlFor="horizontal-form-1" className="">
            ประเภท :
          </label>
          <label htmlFor="horizontal-form-1" className="">
            ช่างแพทเทิร์น
          </label>
          <label htmlFor="horizontal-form-1" className="">
            ราคา :
          </label>
        </div>
        <div className="col-span-3 grid-rows-4 h-full flex flex-col ">
          <span className="">{Product?.fabric?.title}</span>
          <span className=" ">{product?.cloth_category?.category_name}</span>
          <span className="">{product?.pattern_design?.pattern_design_name}</span>
          <span className="">{Product?.price}</span>
        </div>
      </div>
      <div className="grid grid-cols-11 gap-5 mt-5 text-lg lg:text-base">
        <div className=" col-span-2 text-right">
          <label htmlFor="horizontal-form-1" className="">
            คำอธิบาย :
          </label>
        </div>
        <div className=" col-span-8 text-right">
          <span className=" text-lg">{product.design_description}</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
