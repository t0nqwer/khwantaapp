import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Lucide, Tippy, TomSelect, Alert, ClassicEditor, Modal, ModalBody } from "@/base-components";
import { data } from "autoprefixer";

const Productinfo = (props) => {
  //redux----------------------------------------------------------------

  const fabric = useSelector((state) => state.FabricType);

  const typedata = fabric[1];

  //----------------------------------------------------------------
  //state----------------------------------------------------------------
  //----------------------------------------------------------------

  const [isActive, setIsActive] = useState(false);
  const [priceCheck, setPriceCheck] = useState(false);
  const [cataCheck, setCataCheck] = useState(false);

  const [Data, setData] = useState({
    type: "",
    type_id: "",
    weaving: "",
    weaving_id: "",
    color: "",
    color_id: "",
    pattern: "",
    pattern_id: "",
  });
  //----------------------------------------------------------------
  //function----------------------------------------------------------------
  //----------------------------------------------------------------
  useEffect(() => {
  
    props.OnInfoHandler(Data);
  }, [Data]);
  const typehandler = (e) => {
    setData({ ...Data, type_id: e.target.selectedOptions[0].id, type: e.target.value });
  };

  // useEffect(() => {
  //   const W_id = fabric[0].filter((o) => o.weaving_name === weaving);
  //   setData({ ...Data, weaving_id: W_id[0].weaving_id, weaving: weaving });
  // }, [weaving]);

  const colorhandler = (e) => {
    setData({ ...Data, color_id: e.target.selectedOptions[0].id, color: e.target.value });
  };

  const patternhandler = (e) => {
    setData({ ...Data, pattern_id: e.target.selectedOptions[0].id, pattern: e.target.value });
  };
  const weavinghandler = (e) => {
    setData({ ...Data, weaving_id: e.target.selectedOptions[0].id, weaving: e.target.value });
  };

  return (
    <>
      <div className="intro-y box p-5 mt-5 ">
        <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
          <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
            <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> ข้อมูลสินค้า
          </div>
          <div className="mt-5">
            <div className="input-form mt-5">
              <div className="form-inline">
                <label htmlFor="horizontal-form-1" className="form-label sm:w-28">
                  ผ้า
                </label>
                <span>
                  {Data.type} {Data.weaving} {Data.color} {Data.pattern}{" "}
                </span>
              </div>
            </div>
            <div className="input-form mt-5">
              <div className="form-inline">
                <label htmlFor="horizontal-form-1" className="form-label sm:w-28">
                  ประเภทเส้นด้าย
                </label>
                <select id="category" className="form-select" onChange={typehandler}>
                  <option></option>
                  {fabric[1].map((fabric) => (
                    <option key={fabric.fabric_type_id} id={fabric.fabric_type_id} value={fabric.type}>
                      {fabric.type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="input-form mt-5">
              <div className="form-inline">
                <label htmlFor="horizontal-form-1" className="form-label sm:w-28">
                  เทคนิคการทอ
                </label>
                <select id="category" className="form-select" onChange={weavinghandler}>
                  <option></option>
                  {fabric[0].map((fabric) => (
                    <option key={fabric.weaving_id} id={fabric.weaving_id} value={fabric.weaving_name}>
                      {fabric.weaving_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="input-form mt-5">
              <div className="form-inline">
                <label htmlFor="horizontal-form-1" className="form-label sm:w-28">
                  สี
                </label>

                <select id="category" className="form-select" onChange={colorhandler}>
                  <option></option>
                  {fabric[2].map((fabric) => (
                    <option
                      key={fabric.FabricColorTechnique_id}
                      id={fabric.FabricColorTechnique_id}
                      value={fabric.FabricColorTechnique_name}
                    >
                      {fabric.FabricColorTechnique_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="input-form mt-5">
              <div className="form-inline">
                <label htmlFor="horizontal-form-1" className="form-label sm:w-28">
                  ลาย
                </label>

                <select id="category" className="form-select" onChange={patternhandler}>
                  <option></option>
                  {fabric[3].map((fabric) => (
                    <option key={fabric.FabricPattern_Id} id={fabric.FabricPattern_Id} value={fabric.FabricPatternName}>
                      {fabric.FabricPatternName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productinfo;
