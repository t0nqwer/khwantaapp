import React from "react";
import { useDispatch } from "react-redux";
import { Lucide } from "@/base-components";
import { useNavigate } from "react-router-dom";
import JsBarcode from "jsbarcode";
import { DOMImplementation, XMLSerializer } from "@xmldom/xmldom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // document.onkeypress = function (e) {
  //   e = e || window.event;
  //   console.log(e);
  // };
  console.log(product);

  const openPost = (e) => {
    navigate(`/product/${product.code}-${product.product_id}`);
  };
  let data = [
    {
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: "SAMPLE HEADING",
      style: `text-align:center;`,
      css: { "font-weight": "700", "font-size": "18px" },
    },
  ];

  const testFnc = (e) => {
    // e.preventDefault();
    // window.print();
  };

  return (
    <div className="box">
      <div className="p-5">
        <div className=" h-128 2xl:h-96 image-fit rounded-md overflow-hidden before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:opacity-40  before:from-black before:to-transparent/10">
          <img alt="Midone - HTML Admin Template" className="rounded-md" src={product.cloth_front_img} />
          <div className="absolute w-full bottom-0 text-white px-5 pb-4  z-10 bg-gradient-to-t from-zinc-700 to-transparent/0">
            <a href="" className="block font-medium pt-4 text-xl ">
              {product.design_name}
            </a>
            <span className="text-white/90 text-sm mt-3">{product.code.toUpperCase()}</span>
          </div>
        </div>
        <div className="text-slate-600 dark:text-slate-500 mt-5">
          <div className="flex items-center">
            <Lucide icon="Link" className="w-4 h-4 mr-2" /> ราคา: {product.price}฿
          </div>
          <div className="flex items-center mt-2">
            <Lucide icon="Layers" className="w-4 h-4 mr-2" /> ผ้า: {product.title}
          </div>
          <div className="flex items-center mt-2">
            <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" /> แบรนด์: {product.brand_name}
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end items-center p-5 border-t border-slate-200/60 dark:border-darkmode-400">
        <a className="flex items-center text-primary mr-auto" onClick={openPost} href="#">
          <Lucide icon="Eye" className="w-4 h-4 mr-1" /> ดูรายละเอียดสินค้า
        </a>
        <a className="flex items-center mr-3" href="#">
          <Lucide icon="Printer" className="w-4 h-4 mr-1" onClick={testFnc} /> Print
        </a>
        <a className="flex items-center text-danger" href="#">
          <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Delete
        </a>
      </div>
    </div>
  );
};

export default Product;
