import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Modal,
  ModalBody,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import classnames from "classnames";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { getWarehouse } from "../../actions/warehouse";
import store from "../../assets/images/store1.jpg";
import warehouse1 from "../../assets/images/warehouse.png";
import { useNavigate } from "react-router-dom";

function Main() {
  const warehouse = useSelector((state) => state.warehouse);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getWarehouse());
  }, [dispatch]);
  console.log(warehouse);

  const openWarehouse = (e) => {


    navigate(`/stock/${warehouse[e.target.id - 1].warehouse_db}`);
  };

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">สต๊อค</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        {warehouse.map((warehouse) => {
          return (
            <div
              key={warehouse.warehouse_id}
              id={warehouse.warehouse_id}
              onClick={openWarehouse}
              className="intro-y col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
            >
              <div className="p-5">
                <div
                  id={warehouse.warehouse_id}
                  className=" h-128 2xl:h-96 image-fit rounded-md overflow-hidden before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:opacity-40  before:from-black before:to-transparent/10"
                >
                  <img
                    alt="Midone - HTML Admin Template"
                    className="rounded-md"
                    src={warehouse.warehouse_type_id === 1 ? warehouse1 : store}
                  />
                  <div className="absolute w-full bottom-0 text-white px-5 pb-4  z-10 bg-gradient-to-t from-zinc-700 to-transparent/0">
                    <a href="" className="block font-medium pt-4 text-xl ">
                      {warehouse.warehouse_name}
                    </a>
                    <span className="text-white/90 text-sm mt-3">{warehouse.wanhouse_type_name}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Main;
