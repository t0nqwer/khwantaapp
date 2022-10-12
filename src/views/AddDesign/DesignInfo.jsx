import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Lucide, Tippy, TomSelect, Alert, ClassicEditor, Modal, ModalBody } from "@/base-components";

const Productinfo = (props) => {
  //redux----------------------------------------------------------------
  const pattern = useSelector((state) => state.pattern);
  const category = useSelector((state) => state.category);
  const brand = useSelector((state) => state.brand);
  const { Design } = useSelector((state) => state.product);

  //----------------------------------------------------------------
  //state----------------------------------------------------------------
  //----------------------------------------------------------------

  const [isActive, setIsActive] = useState(false);
  const [cataCheck, setCataCheck] = useState(false);

  const [ProductData, setProductData] = useState({
    code: "",
    title: "",
    description: "",
    category: "",
    categoryname: "",
    pattern: "",
    patternname: "",
    brand: "",
    brandname: "",
  });
  //----------------------------------------------------------------
  //function----------------------------------------------------------------
  //----------------------------------------------------------------
  useEffect(() => {
    // let proid = `${ProductData.code}${ProductData.category}${ProductData.fabric}`;
    // console.log(proid);
    props.OnProductInfoHandler(ProductData);
  }, [ProductData]);

  useEffect(() => {
    setProductData({
      code: "",
      title: "",
      description: "",
      category: "",
      categoryname: "",
      pattern: "",
      patternname: "",
      brand: "",
      brandname: "",
    });
    let element = document.getElementById("pattern2");
    element.value = "100";
    let element2 = document.getElementById("category");
    element2.value = "100";
    brand.map((e) => {
      let checkbox = document.getElementById(e.brand_id);
      checkbox.checked = false;
    });
  }, [props.ResetData]);

  const checkid = Design.map((e) => e.code);


  const codehandler = (e) => {


    for (let i = 0; i < checkid.length; i++) {
      if (e.target.value === checkid[i]) {
        setIsActive(true);
        setProductData({ ...ProductData, code: e.target.value.toLowerCase() });
        break;
      } else {
        setIsActive(false);
        setProductData({ ...ProductData, code: e.target.value.toLowerCase() });
      }
    }

  };

  const namehandler = (e) => {
    setProductData({ ...ProductData, title: e.target.value });
  };
  const descriptionhandler = (e) => {
    setProductData({ ...ProductData, description: e.target.value });
  };
  const brandhandler = (e) => {
    setProductData({ ...ProductData, brand: e.target.id, brandname: e.target.value });
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
    setProductData({ ...ProductData, category: e.target.selectedOptions[0].id, categoryname: e.target.value });
  };

  const patternhandler = (e) => {
    setProductData({ ...ProductData, pattern: e.target.selectedOptions[0].id, patternname: e.target.value });
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
            <div className="form-inline">
              <label htmlFor="horizontal-form-1" className="form-label sm:w-20">
                รหัส
              </label>

              <input
                id="horizontal-form-1"
                value={ProductData.code}
                type="text"
                className="form-control"
                style={{ textTransform: "uppercase" }}
                placeholder="ty123t1"
                onChange={codehandler}
              />

              <span className={`text-danger ml-3 ${isActive ? "" : "hidden"}`}> รหัสนี้มีในระบบแล้ว</span>
            </div>
            <div className="form-inline mt-5">
              <label htmlFor="horizontal-form-2" className="form-label sm:w-20">
                ชื่อ
              </label>
              <input
                id="horizontal-form-2"
                value={ProductData.title}
                type="text"
                className="form-control"
                placeholder="เสื้อคอปาดแขนสั้นผ้าขืดยกดอกลาย 12 ราศี"
                onChange={namehandler}
              />
            </div>
            <div className="form-check mt-5 ">
              <div className="flex flex-col sm:flex-row mt-2">
                <div className="form-inline">
                  <label htmlFor="horizontal-form-1" className="form-label sm:w-20">
                    แบรนด์
                  </label>
                </div>
                {brand.map((brand) => (
                  <div key={brand.brand_id} className="form-check mr-2">
                    <input
                      id={brand.brand_id}
                      className="form-check-input"
                      type="checkbox"
                      value={brand.brand_name}
                      onChange={brandhandler}
                    />
                    <label className="form-check-label" htmlFor="checkbox-switch-4">
                      {brand.brand_name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="input-form mt-5">
              <div className="form-inline">
                <label htmlFor="horizontal-form-1" className="form-label sm:w-20">
                  คำอธิบาย
                </label>
                <textarea
                  id="validation-form-6"
                  value={ProductData.description}
                  name="comment"
                  className="form-control"
                  placeholder="Type your comments"
                  onChange={descriptionhandler}
                ></textarea>
              </div>
            </div>

            <div className="input-form mt-5">
              <div className="form-inline">
                <label htmlFor="horizontal-form-1" className="form-label sm:w-20">
                  ประเภท
                </label>

                <select id="category" className="form-select" onChange={categoryhandler}>
                  <option defaultValue value="100"></option>
                  {category.map((type) => (
                    <option value={type.category_name} key={type.cloth_category_id} id={type.cloth_category_id}>
                      {type.category_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="input-form mt-5">
              <div className="form-inline">
                <label htmlFor="horizontal-form-1" className="form-label sm:w-20">
                  ช่างแพทเทิร์น
                </label>

                <select id="pattern2" className="form-select" onChange={patternhandler}>
                  <option value="100"></option>
                  {pattern.map((post, i) => (
                    <option value={post.pattern_design_name} key={post.pattern_design_id} id={post.pattern_design_id}>
                      {post.pattern_design_name}
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
