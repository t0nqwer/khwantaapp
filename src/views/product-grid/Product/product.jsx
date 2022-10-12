import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getsingleproduct } from "../../../actions/product";
import Info from "./Info";
import Slider from "./Slider";
import Sizetable from "./Sizetable";
import useDidMountEffect from "../../../hook/useDidMountEffect";

import { Dice1 } from "lucide-react";

const product = () => {
  const product = useSelector((state) => state.singleproduct);
  const [Deimg, setDeimg] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    console.log(123);
    dispatch(getsingleproduct(id));
  }, [id]);

  // const img = product.map((e) => [e.Back_img, e.Front_img, e.detail_img]);
  // console.log(img);
  console.log(product);
  useDidMountEffect(() => {
    const detailimg = product.detail_img.map((e) => e.detail_img);
    setDeimg(detailimg);
    console.log(detailimg);
  }, [product]);
  let productImg = [product.cloth_front_img, product.cloth_back_img];
  let union = [...new set([...productImg, ...Deimg])];

  //result {...}

  // console.log(productInfo);
  return (
    <div className="grid grid-cols-8 gap-4 mt-5">
      <Slider className="grid col-span-3" product={union} />
      <div className=" col-span-5 ">
        <div className=" fixed grid grid-rows-2  grid-flow-col w-1/2 ">
          <Info product={product} />
          <Sizetable product={product?.size_info} />
        </div>
      </div>
    </div>
  );
};

export default product;
