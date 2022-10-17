import { useState, useEffect, useRef } from "react";
import Productinfo from "./Productinfo";
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";
import { useDispatch } from "react-redux";
import { addproduct } from "../../actions/product";
import Uploadproduct from "./uploadproduct";
import { useSelector } from "react-redux";
import { Lucide, Notification, PreviewComponent, Preview, Source, Highlight,LoadingIcon, Modal, ModalBody } from "@/base-components";

function Main() {
  const { Prodata, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  //----------getdata--------------
  const [imageBack, setImageBack] = useState(null);
  const [imageFront, setImageFront] = useState(null);
  const [imageDetail, setImageDetail] = useState(null);
  const [ResetData, setResetData] = useState(true);


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

  const CodeNotification = useRef();
  const CodeNotificationToggle = () => {
    // Show notification
    CodeNotification.current.showToast();
  };
  const FabricNotification = useRef();
  const FabricNotificationToggle = () => {
    // Show notification
    FabricNotification.current.showToast();
  };
  const PriceNotification = useRef();
  const PriceNotificationToggle = () => {
    // Show notification
    PriceNotification.current.showToast();
  };

  const [Product, setProduct] = useState({
    code: "",
    codeName: "",
    title: "",
    description: "",
    price: "",
    fabric: "",
    fabricName: "",
    Front_img: "",
    Back_img: "",
  });

  const ProductInfoHandler = (data) => {
    console.log(data);
    setProduct({
      ...Product,
      code: data.code,
      codeName: data.codeName,
      fabric: data.fabric,
      fabricName: data.fabricName,
      title: data.title,
      price: data.price,
      description: data.description,
    });
  };
  const Confirmdata = () =>{
    if (Product.code.length === 0) return CodeNotificationToggle();
    if (Product.fabric === "100") return FabricNotificationToggle();
    if (Product.price.length === 0) return PriceNotificationToggle();
    dispatch(addproduct(Product));
  }


  const SaveProduct = () => {
    
    // const id = Product.code;

    // const promises = [];
    // const metadata = {
    //   contentType: "image/jpeg",
    // };

    // promises.push(uploadTaskDetail(), uploadTaskBack(), uploadTaskFront());
    // async function uploadTaskDetail() {
    //   const imgdetail = [];
    //   await imageDetail.map(async (e, index) => {
    //     const fileRef = ref(storage, `${id}/Detail/${index}-detail`);
    //     const uploadTaskSnapshot = await uploadBytes(fileRef, e, metadata);
    //     const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);

    //     imgdetail.push(downloadURL);
    //   });
    //   console.log(imgdetail);
    //   return imgdetail;
    // }
    // async function uploadTaskBack() {
    //   const file = imageBack[0];
    //   const fileRef = ref(storage, `${id}/Back/${id}-back`);
    //   const uploadTaskSnapshot = await uploadBytes(fileRef, file, metadata);
    //   const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);

    //   return downloadURL;
    // }
    // async function uploadTaskFront() {
    //   const file = imageFront[0];
    //   const fileRef = ref(storage, `${id}/Front/${id}-front`);
    //   const uploadTaskSnapshot = await uploadBytes(fileRef, file, metadata);
    //   const downloadFrontURL = await getDownloadURL(uploadTaskSnapshot.ref);

    //   return downloadFrontURL;
    // }
    // Promise.all(promises)
    //   .then((result) => {
    //     console.log(result[0]);
    //     const datainfo = { ...Product, Front_img: result[2], Back_img: result[1] };

    //     let addproductdata = [datainfo, result[0], GetSize];

    //     dispatch(addproduct(addproductdata));
    //   })

    //   .catch((err) => console.log(err));
  };

  return (
    <>
    {isLoading ? (
        <div className="  z-50 flex flex-row fixed min-h-screen justify-center items-center left-1  min-w-full   opacity-100">
          <LoadingIcon icon="grid" className="absolute w-20 h-20" />
          <div className="bg-teal-800 w-screen h-screen opacity-40"></div>
        </div>
      ) : (
        ""
      )}
      <Notification
        getRef={(el) => {
          CodeNotification.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium">โปรดเลือกรหัส</div>
      </Notification>
      <Notification
        getRef={(el) => {
          FabricNotification.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium">โปรดเลือผ้า</div>
      </Notification>
      <Notification
        getRef={(el) => {
          PriceNotification.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium">โปรดกรอกราคา</div>
      </Notification>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">เพิ่มสินค้าเสื้อผ้า</h2>
      </div>
      <div className="grid grid-cols-11 gap-x-6 mt-5 pb-20">
        <div className="intro-y col-span-11 ">
          <Productinfo OnProductInfoHandler={ProductInfoHandler} />
          <Uploadproduct
            ResetData={ResetData}
            onSaveProductFront={getFrontimg}
            onSaveProductBack={getBackimg}
            onSaveProductDetail={getDetailimg}
          />
          <div className="flex justify-end flex-col md:flex-row gap-2 mt-5">
            <button type="button" className="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52">
              Cancel
            </button>
            <button type="button" onClick={Confirmdata} className="btn py-3 btn-primary w-full md:w-52">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
