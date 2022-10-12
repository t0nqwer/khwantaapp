import { useState } from "react";
import { Lucide } from "@/base-components";
import { Carousel } from "flowbite-react";

const slider = ({ product }) => {
  const [current, setCurrent] = useState(0);

  // const img = [
  //   ...new Set(
  //     [].concat.apply(
  //       [],
  //       product.map((e) => [e.Front_img, e.Back_img, e.detail_img])
  //     )
  //   ),
  // ];
  console.log(product);

  return (
    <div className="col-span-3 w-fit">
      {/* <Carousel>
        {product.map((img, index) => {
          return <img key={index} src={img}></img>;
        })}
      </Carousel> */}
      {product.map((img, i) => {
        return <img key={i} src={img}></img>;
      })}
    </div>
  );
};

export default slider;
