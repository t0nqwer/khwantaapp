import { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import useDidMountEffect from "../../../hook/useDidMountEffect";

const Sizetable = ({ product }) => {
  const [SizeNameCheck, setSizeNameCheck] = useState();
  const [IsEdit, setIsEdit] = useState(false);
  const [SizeFinal, setSizeFinal] = useState([]);
  const [Sizede1, setSizede1] = useState([]);
  const [Sizede2, setSizede2] = useState([]);
  const [Sizede3, setSizede3] = useState([]);
  const [Sizede4, setSizede4] = useState([]);
  const [Sizede5, setSizede5] = useState([]);
  const [Sizede6, setSizede6] = useState([]);
  const [SizeDetail, setSizeDetail] = useState([]);
  console.log(product);
  useDidMountEffect(() => {
    const sizename = product.map((e) => e.size.size_name);
    const sizedetail = product[0].size_de_info.map((e) => e.size_de.size_de_name);
    const sizecount = product
      .map((e) => e.size_de_info)
      .map((e) => e[0].size_info)
      .sort();
    const sizecount2 = product
      .map((e) => e.size_de_info)
      .map((e) => e[1].size_info)
      .sort();
    const sizecount3 = product
      .map((e) => e.size_de_info)
      .map((e) => e[2]?.size_info)
      .sort();
    const sizecount4 = product
      .map((e) => e.size_de_info)
      .map((e) => e[3]?.size_info)
      .sort();
    const sizecount5 = product
      .map((e) => e.size_de_info)
      .map((e) => e[4]?.size_info)
      .sort();
    const sizecount6 = product
      .map((e) => e?.size_de_info)
      .map((e) => e[5]?.size_info)
      .sort();
    setSizeNameCheck(sizename);
    sizecount[0] !== undefined ? setSizede1(sizecount) : "";
    sizecount2[0] !== undefined ? setSizede2(sizecount2) : "";
    sizecount3[0] !== undefined ? setSizede3(sizecount3) : "";
    sizecount4[0] !== undefined ? setSizede4(sizecount4) : "";
    sizecount5[0] !== undefined ? setSizede5(sizecount5) : "";
    sizecount6[0] !== undefined ? setSizede6(sizecount6) : "";
    setSizeDetail(sizedetail);
    console.log(sizename);
    console.log(sizecount);
    console.log(sizedetail);
    console.log(sizecount6);
  }, [product]);

  const Size = ["SS", "S", "M", "L", "XL", "XXL", "XXXL", "FREESIZE"];

  useDidMountEffect(() => {
    let intersection = Size.filter((e) => SizeNameCheck.includes(e));
    console.log(intersection);
    setSizeFinal(intersection);
  }, [SizeNameCheck]);
  // useDidMountEffect(() => {
  // SizeFinal.map((e)=>{
  //   if(e === product)
  // })
  // }, [SizeFinal]);
  // const SizeDetail = [
  //   ...new Set(
  //     [].concat.apply(
  //       [],
  //       product.map((e) => [e.size_de_name])
  //     )
  //   ),
  // ];
  // const detailleng = SizeDetail.length;

  // const test = [...new Set(product.map((e) => [e.size_id, e.size_info, e.size_de_name]))];
  // const SS = test.filter((e) => e[0] === "SS").splice(detailleng, detailleng);
  // const S = test.filter((e) => e[0] === "S").splice(detailleng, detailleng);
  // const M = test.filter((e) => e[0] === "M").splice(detailleng, detailleng);
  // const L = test.filter((e) => e[0] === "L").splice(detailleng, detailleng);
  // const XL = test.filter((e) => e[0] === "XL").splice(detailleng, detailleng);
  // const XXL = test.filter((e) => e[0] === "XXL").splice(detailleng, detailleng);
  // const XXXL = test.filter((e) => e[0] === "XXXL").splice(detailleng, detailleng);
  const Edittrigger = () => {
    setIsEdit(!IsEdit);
  };
  return (
    <div className="">
      <Table className="table-auto">
        <Table.Head>
          <Table.HeadCell className="  text-center">รายละเอียดไซส์</Table.HeadCell>
          {SizeDetail.map((e) => (
            <Table.HeadCell className=" text-center ">{e}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {SizeFinal.map((e, i) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800  text-center">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{e}</Table.Cell>
              {!IsEdit ? (
                <Table.Cell>{Sizede1[i]}</Table.Cell>
              ) : (
                <Table.Cell>
                  <input value={Sizede1[i]} type="text"></input>
                </Table.Cell>
              )}
              {!IsEdit ? (
                <Table.Cell>{Sizede2[i]}</Table.Cell>
              ) : (
                <Table.Cell>
                  <input value={Sizede2[i]} type="text"></input>
                </Table.Cell>
              )}

              {Sizede3.length !== 0 ? <Table.Cell>{Sizede3[i]}</Table.Cell> : ""}
              {Sizede4.length !== 0 ? <Table.Cell>{Sizede4[i]}</Table.Cell> : ""}
              {Sizede5.length !== 0 ? <Table.Cell>{Sizede5[i]}</Table.Cell> : ""}
              {Sizede6.length !== 0 ? <Table.Cell>{Sizede6[i]}</Table.Cell> : ""}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {!IsEdit ? (
        <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" onClick={Edittrigger}>
          Edit
        </a>
      ) : (
        <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" onClick={Edittrigger}>
          X
        </a>
      )}
    </div>
  );
};

export default Sizetable;
