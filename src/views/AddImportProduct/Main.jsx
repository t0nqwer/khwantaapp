import { useState, useEffect } from "react";
import Productinfo from "./AddImportProduct";
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";
import { useDispatch } from "react-redux";
import { addproduct } from "../../actions/product";

function Main() {
  const dispatch = useDispatch();

  //----------getdata--------------
  const [imageBack, setImageBack] = useState(null);
  const [imageFront, setImageFront] = useState(null);
  const [imageDetail, setImageDetail] = useState(null);
  const [GetSize, setGetSize] = useState([]);

  const getFrontimg = (e) => {
    const FrontImg = e;
    setImageFront(FrontImg);
    console.log(e);
  };

  const getBackimg = (e) => {
    const BackImg = e;
    setImageBack(BackImg);
    console.log(e);
  };

  const getDetailimg = (e) => {
    const DetailImg = e;
    setImageDetail(DetailImg);
    console.log(e);
  };

  const [Product, setProduct] = useState({
    code: "",
    title: "",
    description: "",
    category: "",
    pattern: "",
    price: "",
    fabric: "",
    brand: "",
    Front_img: "",
    Back_img: "",
  });

  const [SizeInfo, setSizeInfo] = useState({ size_info_id: "", size_id: "", product_id: "" });
  const [SizeDeInfo, setSizeDeInfo] = useState({ size_de_id: "", size_info_id: "", size_info: "" });
  const [ProductStockInfo, setProductStockInfo] = useState({ product_id: "", size_info_id: "", product_stock_barcode: "" });

  const ProductInfoHandler = (data) => {
    setProduct({
      ...Product,
      code: data.code,
      brand: data.brand,
      fabric: data.fabric,
      title: data.title,
      price: data.price,
      category: data.category,
      pattern: data.pattern,
      description: data.description,
    });
  };

  const SaveSize = (e) => {
    setGetSize(e);
  };

  useEffect(() => {
    const size_info = GetSize.map((e) => {
      return e.name;
    });
    const removeDuplicate = [...new Set(size_info)];
  }, [GetSize]);

  const SaveProduct = () => {
    if (imageFront == null && imageBack == null) return;
    const id = Product.code;

    const promises = [];
    const metadata = {
      contentType: "image/jpeg",
    };

    promises.push(uploadTaskDetail(), uploadTaskBack(), uploadTaskFront());
    async function uploadTaskDetail() {
      const imgdetail = [];
      await imageDetail.map(async (e, index) => {
        const fileRef = ref(storage, `${id}/Detail/${index}-detail`);
        const uploadTaskSnapshot = await uploadBytes(fileRef, e, metadata);
        const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);

        imgdetail.push(downloadURL);
      });
      console.log(imgdetail);
      return imgdetail;
    }
    async function uploadTaskBack() {
      const file = imageBack[0];
      const fileRef = ref(storage, `${id}/Back/${id}-back`);
      const uploadTaskSnapshot = await uploadBytes(fileRef, file, metadata);
      const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);

      return downloadURL;
    }
    async function uploadTaskFront() {
      const file = imageFront[0];
      const fileRef = ref(storage, `${id}/Front/${id}-front`);
      const uploadTaskSnapshot = await uploadBytes(fileRef, file, metadata);
      const downloadFrontURL = await getDownloadURL(uploadTaskSnapshot.ref);

      return downloadFrontURL;
    }
    Promise.all(promises)
      .then((result) => {
        console.log(result[0]);
        const datainfo = { ...Product, Front_img: result[2], Back_img: result[1] };

        let addproductdata = [datainfo, result[0], GetSize];

        dispatch(addproduct(addproductdata));
      })

      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">เพิ่มสินค้ารับซื้อ</h2>
      </div>
      <div className="grid grid-cols-11 gap-x-6 mt-5 pb-20">
        <div className="intro-y col-span-11 ">
          <Productinfo OnProductInfoHandler={ProductInfoHandler} />

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
