import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { Lucide, Tippy, TomSelect, Alert, ClassicEditor, Modal, ModalBody } from "@/base-components";

import { isEmpty } from "lodash";

// import { useEffect } from "preact/hooks";

const Productinfo = (props) => {
  //redux----------------------------------------------------------------

  const fabric = useSelector((state) => state.fabric);

  const { Design } = useSelector((state) => state.product);
  //----------------------------------------------------------------
  //state----------------------------------------------------------------
  //----------------------------------------------------------------


  const [priceCheck, setPriceCheck] = useState(false);

  const [select1, setSelect1] = useState("100");
  const [select2, setSelect2] = useState("100");


  const [ProductData, setProductData] = useState({
    code: "",
    title: "",
    codeName: "",
    description: "",
    price: "",
    fabric: "",
    fabricName: "",
  });
  //----------------------------------------------------------------
  //function----------------------------------------------------------------
  //----------------------------------------------------------------

  useEffect(() => {
    const title = Design.filter((o) => o.code === select1);
 
    setProductData({
      ...ProductData,
      code: title[0]?.code,
      codeName: title[0]?.design_name,
      title: `${title[0]?.design_name}${ProductData.fabricName}`,
    });
  }, [select1]);

  useEffect(() => {
    const titlee = fabric.filter((o) => o.fabric_id === +select2);
    const fabrictype = titlee[0]?.fabric_type_id === 1 ? "ฝ้าย" : "ไหม";
    setProductData({
      ...ProductData,
      fabric: select2,
      fabricName: `ผ้า${fabrictype}${titlee[0]?.title}`,
      title: `${ProductData.codeName}ผ้า${fabrictype}${titlee[0]?.title}`,
    });
  }, [select2]);

  useEffect(() => {
    props.OnProductInfoHandler(ProductData);
  }, [ProductData]);

  const descriptionhandler = (e) => {
    setProductData({ ...ProductData, description: e.target.value });
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
              <span>{ProductData.title}</span>
            </div>
            <div className="form-inline mt-5">
              <label htmlFor="horizontal-form-1" className="form-label sm:w-20">
                รหัส
              </label>

              <TomSelect
                value={select1}
                onChange={setSelect1}
                options={{
                  placeholder: "ค้นหารหัสสินค้า",
                }}
                className=" w-full"
              >
                {Design.map((e) => (
                  <option key={e.code} value={e.code}>
                    {e.code}
                  </option>
                ))}
                <option defaultValue value="100"></option>
              </TomSelect>
            </div>
            <div className="input-form mt-5">
              <div className="form-inline">
                <label htmlFor="horizontal-form-1" className="form-label sm:w-20">
                  ผ้า
                </label>

                <TomSelect
                  value={select2}
                  onChange={setSelect2}
                  options={{
                    placeholder: "ค้นหาผ้า",
                  }}
                  className=" w-full"
                >
                  <option defaultValue value="100"></option>
                  {fabric.map((fabric) => (
                    <option key={fabric.fabric_id} id={fabric.fabric_id} value={fabric.fabric_id}>
                      {fabric.fabric_type_id === 1 ? "ฝ้าย" : "ไหม"} {fabric.title}
                    </option>
                  ))}
                </TomSelect>
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
