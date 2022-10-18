import { useState, useEffect, useRef } from "react";
import AdddFabric from "./AddFabric";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  Lucide,
  Notification,
  LoadingIcon,
  Modal,
  ModalBody,
} from "@/base-components";
import { addFabric } from "../../actions/fabric";

function Main() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.FabricType[4]);

  //----------getdata--------------

  const [Product, setProduct] = useState({
    type: "",
    type_id: "",
    weaving: "",
    weaving_id: "",
    color: "",
    color_id: "",
    pattern: "",
    pattern_id: "",
  });

  const InfoHandler = (data) => {
    setProduct({
      ...Product,
      type: data.type,
      type_id: data.type_id,
      weaving: data.weaving,
      weaving_id: data.weaving_id,
      color: data.color,
      color_id: data.color_id,
      pattern: data.pattern,
      pattern_id: data.pattern_id,
    });
  };

  const SaveProduct = () => {
    if (Product.type.length === 0) return TypeNotificationToggle();
    if (Product.weaving.length === 0) return WeavingNotificationToggle();
    if (Product.color.length === 0) return ColorNotificationToggle();
    dispatch(addFabric(Product));
  };

  const TypeNotification = useRef();
  const TypeNotificationToggle = () => {
    // Show notification
    TypeNotification.current.showToast();
  };
  const WeavingNotification = useRef();
  const WeavingNotificationToggle = () => {
    // Show notification
    WeavingNotification.current.showToast();
  };
  const ColorNotification = useRef();
  const ColorNotificationToggle = () => {
    // Show notification
    ColorNotification.current.showToast();
  };
  return (
    <>
      {/* isloading */}
      {isLoading ? (
        <div className="  z-50 flex flex-row fixed min-h-screen justify-center items-center left-1  min-w-full   opacity-100">
          <LoadingIcon icon="grid" className="absolute w-20 h-20" />
          <div className="bg-teal-800 w-screen h-screen opacity-40"></div>
        </div>
      ) : (
        ""
      )}
      {/* notification */}
      <Notification
        getRef={(el) => {
          TypeNotification.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium">โปรดประเภทเลือเส้นด้าย</div>
      </Notification>
      <Notification
        getRef={(el) => {
          WeavingNotification.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium">โปรดเลือกเทคนิคการทอ</div>
      </Notification>
      <Notification
        getRef={(el) => {
          ColorNotification.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium">โปรดเลือกวิธีย้อมสีผ้า</div>
      </Notification>
      {/* main */}
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">เพิ่มผ้า</h2>
      </div>
      <div className="grid grid-cols-11 gap-x-6 mt-5 pb-20">
        <div className="intro-y col-span-11 ">
          <AdddFabric OnInfoHandler={InfoHandler} />
          <div className="flex justify-end flex-col md:flex-row gap-2 mt-5">
            <button type="button" className="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52">
              Cancel
            </button>
            <button type="button" onClick={SaveProduct} className="btn py-3 btn-primary w-full md:w-52">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
