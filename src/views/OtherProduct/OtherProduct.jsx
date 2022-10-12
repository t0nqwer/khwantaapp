import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Lucide, Tippy, TomSelect, Alert, ClassicEditor, Modal, ModalBody } from "@/base-components";

import { isEmpty } from "lodash";
// import { useEffect } from "preact/hooks";

const Productinfo = (props) => {
  //redux----------------------------------------------------------------
  const posts = useSelector((state) => state.inputs);
  const category = useSelector((state) => state.category);
  console.log(category);
  const fabric = useSelector((state) => state.fabric);
  console.log(fabric);
  const brand = useSelector((state) => state.brand);
  //----------------------------------------------------------------
  //state----------------------------------------------------------------
  //----------------------------------------------------------------

  const [isActive, setIsActive] = useState(false);
  const [priceCheck, setPriceCheck] = useState(false);
  const [cataCheck, setCataCheck] = useState(false);

  const [ProductData, setProductData] = useState({
    code: "",
    title: "",
    description: "",
    category: "",
    pattern: "",
    price: "",
    fabric: "",
    brand: "",
  });
  //----------------------------------------------------------------
  //function----------------------------------------------------------------
  //----------------------------------------------------------------
  useEffect(() => {
    // let proid = `${ProductData.code}${ProductData.category}${ProductData.fabric}`;
    // console.log(proid);
    props.OnProductInfoHandler(ProductData);
  }, [ProductData]);

  const checkid = [
    {
      title: "test1",
    },
    {
      title: "test2",
    },
    {
      title: "test3",
    },
  ];

  const codehandler = (e) => {
    for (let i = 0; i < checkid.length; i++) {
      if (e.target.value === checkid[i].title) {
        setIsActive(true);
        setProductData({ ...ProductData, code: "" });
        break;
      }
      setProductData({ ...ProductData, code: e.target.value });
      setIsActive(false);
    }
    // console.log(ProductData);
  };

  const namehandler = (e) => {
    setProductData({ ...ProductData, title: e.target.value });
  };
  const descriptionhandler = (e) => {
    setProductData({ ...ProductData, description: e.target.value });
  };
  const brandhandler = (e) => {
    setProductData({ ...ProductData, brand: e.target.id });
  };
  const fabrichandler = (e) => {
    setProductData({ ...ProductData, fabric: e.target.selectedOptions[0].id });
  };
  const categoryhandler = (e) => {
    const Mpattern = document.getElementById("pattern2");
    if (e.target.value === "ผ้าพันคอ") {
      Mpattern.setAttribute("disabled", "");
      Mpattern.selectedIndex = 0;
      setCataCheck(!cataCheck);
    } else {
      Mpattern.removeAttribute("disabled");
    }
    setProductData({ ...ProductData, category: e.target.selectedOptions[0].id });
  };
  const pricehandler = (e) => {
    console.log(~~e.target.value);

    if (~~e.target.value === 0) {
      console.log("worng");
      setPriceCheck(true);
      return;
    }
    setPriceCheck(false);
    setProductData({ ...ProductData, price: e.target.value });
  };
  const patternhandler = (e) => {
    setProductData({ ...ProductData, pattern: e.target.selectedOptions[0].id });
  };
  useEffect(() => {
    setProductData({ ...ProductData, pattern: "" });
  }, [cataCheck]);
  return (
    <>
      <div className="intro-y box p-5 mt-5 ">
        <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
          <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
            <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> ข้อมูลสินค้า
          </div>
          <div className="mt-5">
            <div className="form-inline mt-5">
              <label htmlFor="horizontal-form-2" className="form-label sm:w-20">
                ชื่อ
              </label>
              <span></span>
            </div>
            <div className="form-inline mt-5">
              <label htmlFor="horizontal-form-1" className="form-label sm:w-20">
                รหัส
              </label>

              <input id="horizontal-form-1" type="text" className="form-control" placeholder="ty123t1" onChange={codehandler} />

              <span className={`text-danger ml-3 ${isActive ? "" : "hidden"}`}> รหัสนี้มีในระบบแล้ว</span>
            </div>
            <div className="input-form mt-5">
              <div className="form-inline">
                <label htmlFor="horizontal-form-1" className="form-label sm:w-20">
                  ผ้า
                </label>

                <select id="category" className="form-select" onChange={fabrichandler}>
                  <option></option>
                  {fabric.map((fabric) => (
                    <option key={fabric.fabric_id} id={fabric.fabric_id}>
                      {fabric.fabric_type_id === 1 ? "ฝ้าย" : "ไหม"} {fabric.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="input-form mt-5">
              <div className="form-inline">
                <label htmlFor="horizontal-form-1" className="form-label sm:w-20">
                  คำอธิบาย
                </label>
                <textarea
                  id="validation-form-6"
                  name="comment"
                  className="form-control"
                  placeholder="Type your comments"
                  onChange={descriptionhandler}
                ></textarea>
              </div>
            </div>

            <div className="form-inline mt-5">
              <label htmlFor="horizontal-form-1" className="form-label sm:w-20">
                ราคา
              </label>
              <input id="horizontal-form-1" type="text" className="form-control" placeholder="1000" onChange={pricehandler} />
              <span className={`text-danger ml-3 ${priceCheck ? "" : "hidden"}`}> โปรดใส่แค่ตัวเลข</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productinfo;
