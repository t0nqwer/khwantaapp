
import { useState, useEffect, useRef } from "react";
import Productinfo from "./DesignInfo";
import Uploadproduct from "./uploadproduct";
import Size from "./Size";
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";
import { useDispatch } from "react-redux";
import { addDesign } from "../../actions/product";
import useDidMountEffect from "../../hook/useDidMountEffect";
import { useSelector } from "react-redux";
import { START_LOADING } from "../../constants/actionTypes";
import { Lucide, Notification, PreviewComponent, Preview, Source, Highlight,LoadingIcon, Modal, ModalBody } from "@/base-components";

function Main() {
  const { Prodata, isLoading } = useSelector((state) => state.product);
  const SizeDe = useSelector((state) => state.sizede);
  const { Design } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  //----------getdata--------------
  const [imageBack, setImageBack] = useState(null);
  const [imageFront, setImageFront] = useState(null);
  const [imageDetail, setImageDetail] = useState([]);
  const [GetSize, setGetSize] = useState([]);
  const [DetailimgURL, setDetailimgURL] = useState([]);
  const [UploadData, setUploadData] = useState([{}, [0]]);
  const [ResetData, setResetData] = useState(true);

  const [confirmModalPreview, setConfirmModalPreview] = useState(false);

  const getFrontimg = (e) => {
    if (e.length === 0) return setImageFront(null);
    const FrontImg = e;
    setImageFront(FrontImg);
  };

  const getBackimg = (e) => {
    if (e.length === 0) return setImageBack(null);
    const BackImg = e;
    setImageBack(BackImg);
  };

  const getDetailimg = (e) => {
    const DetailImg = e;
    setImageDetail(DetailImg);
  };
  const CodeNotification = useRef();
  const CodeNotificationToggle = () => {
    // Show notification
    CodeNotification.current.showToast();
  };
  const CodeMatchNotification = useRef();
  const CodeMatchNotificationToggle = () => {
    // Show notification
    CodeNotification.current.showToast();
  };
  const TitleNotification = useRef();
  const TitleNotificationToggle = () => {
    // Show notification
    TitleNotification.current.showToast();
  };
  const CategoryNotification = useRef();
  const CategoryNotificationToggle = () => {
    // Show notification
    CategoryNotification.current.showToast();
  };
  const BrandNotification = useRef();
  const BrandNotificationToggle = () => {
    // Show notification
    BrandNotification.current.showToast();
  };
  const PatternNotification = useRef();
  const PatternNotificationToggle = () => {
    // Show notification
    PatternNotification.current.showToast();
  };
  const ImgNotification = useRef();
  const ImgNotificationToggle = () => {
    // Show notification
    ImgNotification.current.showToast();
  };
  const SizeNotification = useRef();
  const SizeNotificationToggle = () => {
    // Show notification
    SizeNotification.current.showToast();
  };
  const [Product, setProduct] = useState({
    code: "",
    title: "",
    description: "",
    categoryname: "",
    pattern: "",
    patternname: "",
    brand: "",
    brandname: "",
    Front_img: "",
    Back_img: "",
  });

  const ProductInfoHandler = (data) => {
    console.log(data);
    setProduct({
      ...Product,
      code: data.code,
      brand: data.brand,
      title: data.title,
      category: data.category,
      pattern: data.pattern,
      description: data.description,
      categoryname: data.categoryname,
      patternname: data.patternname,
      brandname: data.brandname,
    });
  };

  const SaveSize = (e) => {
    const render = e.map((e) => {
      const dename = SizeDe.filter((x) => x.size_de_id === e.id);
      return { name: e.name, id: e.id, data: e.data, dename: dename[0].size_de_name };
    });

    setGetSize(render);
  };

  useEffect(() => {
    const size_info = GetSize.map((e) => {
      return e.name;
    });
    const removeDuplicate = [...new Set(size_info)];
  }, [GetSize]);

  const Confirmdata = () => {
    if (Product.code.length === 0) return CodeNotificationToggle();
    const checkid = Design.map((e) => e.code);
    for (let i = 0; i < checkid.length; i++) {
      if (Product.code === checkid[i]) {
        CodeMatchNotificationToggle();
        return;
      }
    }
    if (Product.title.length === 0) return TitleNotificationToggle();
    if (Product.brand.length === 0) return BrandNotificationToggle();
    if (Product.category.length === 0) return CategoryNotificationToggle();
    if (Product.pattern.length === 0) return PatternNotificationToggle();
    if (GetSize.length === 0) return SizeNotificationToggle();
    if (imageFront === null || imageBack === null) return ImgNotificationToggle();

    setConfirmModalPreview(true);
  };
  const SaveProduct = () => {
    // dispatch({ type: START_LOADING });
    setConfirmModalPreview(false);
    const id = Product.code;
    console.log("upload");

    // const promises = [];
    // const metadata = {
    //   contentType: "image/jpeg",
    // };

    // promises.push(uploadTaskDetail(), uploadTaskBack(), uploadTaskFront());
    // async function uploadTaskDetail() {
    //   const imgdetail = [];
    //   const uploadimg = imageDetail.map(async (e, index) => {
    //     const fileRef = ref(storage, `${id}/Detail/${index}-detail`);
    //     const uploadTaskSnapshot = await uploadBytes(fileRef, e, metadata);
    //     const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
    //     imgdetail.push(downloadURL);
    //     console.log(downloadURL);
    //     setDetailimgURL([...DetailimgURL, downloadURL]);
    //     return downloadURL;
    //   });

    //   const returndata = await Promise.all(uploadimg);
    //   return returndata;
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
    //     let addDesigndata = [datainfo, result[0], GetSize];
    //     console.log(addDesigndata);

    //     dispatch(addDesign(addDesigndata));
    //     setResetData(!ResetData);
    //   })
    //   .catch((err) => console.log(err));
  };

  const TestReset = () => setResetData(!ResetData);

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
        <div className="font-medium">โปรดกรอกรหัส</div>
      </Notification>
      <Notification
        getRef={(el) => {
          CodeMatchNotification.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium">รหัสนี้มีในระบบแล้ว</div>
      </Notification>
      <Notification
        getRef={(el) => {
          TitleNotification.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium">โปรดกรอกชื่อสินค้า</div>
      </Notification>
      <Notification
        getRef={(el) => {
          CategoryNotification.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium">โปรดเลือกประเภท</div>
      </Notification>
      <Notification
        getRef={(el) => {
          PatternNotification.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium">โปรดเลือกช่างแพทเทิร์น</div>
      </Notification>

      <Notification
        getRef={(el) => {
          BrandNotification.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium"> โปรดเลือกแบรนด์</div>
      </Notification>

      <Notification
        getRef={(el) => {
          ImgNotification.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium"> โปรดใส่รูปหน้าหลัง</div>
      </Notification>
      <Notification
        getRef={(el) => {
          SizeNotification.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium"> โปรดกรอกรายละเอียดไซส์</div>
      </Notification>
      <Modal
        size="modal-xl"
        show={confirmModalPreview}
        onHidden={() => {
          setConfirmModalPreview(false);
        }}
      >
        <ModalBody className="">
          <div className="">
            <h2 className="font-medium text-center  text-4xl mr-auto">โปรดตรวจสอบรายละเอียดสินค้า</h2>
            <div className="grid grid-cols-11 gap-5 text-base mt-1 lg:text-lg">
              <div className="col-span-2 grid-rows-4 justify-items-end flex flex-col  text-right  ">
                <label htmlFor="horizontal-form-1" className="">
                  รหัส :
                </label>

                <label htmlFor="horizontal-form-2" className=" ">
                  ชื่อ :
                </label>
                <label htmlFor="horizontal-form-1" className="">
                  แบรนด์ :
                </label>
              </div>
              <div className="col-span-4 grid-rows-4 h-full ">
                <span className="flex">{Product.code}</span>

                <span className="flex">{Product.title}</span>

                <span id="brand" className="flex">
                  {Product.brandname}
                </span>
              </div>
              <div className="col-span-2 grid-rows-4 flex flex-col  text-right ">
                <label htmlFor="horizontal-form-1" className="">
                  ประเภท :
                </label>
                <label htmlFor="horizontal-form-1" className="">
                  ช่างแพทเทิร์น:
                </label>
              </div>
              <div className="col-span-3 grid-rows-4 h-full flex flex-col ">
                <span className=" ">{Product?.categoryname}</span>
                <span className="">{Product?.patternname}</span>
              </div>
            </div>
            <div className="grid grid-cols-11 gap-5  text-lg lg:text-base">
              <div className=" col-span-2 text-right">
                <label htmlFor="horizontal-form-1" className="">
                  คำอธิบาย :
                </label>
              </div>
              <div className=" col-span-8 text-right">
                <span className=" text-lg">{Product.design_description}</span>
              </div>
            </div>
          </div>
          {GetSize.map((e) => (
            <>
              <div key={e} className="grid grid-cols-11 mt-1 gap-5">
                <div className="col-span-2  justify-items-end flex flex-col text-base  text-right  ">
                  <label htmlFor="horizontal-form-1" className="">
                    ไซส์ {e.name} :
                  </label>
                </div>
                <span className="col-span-2 text-center mt">{e.dename}</span>

                <div className="text-center">{e.data}</div>
              </div>
            </>
          ))}
          <div className="px-5 pb-8 text-center">
            <button type="button" onClick={SaveProduct} className="btn w-fit btn-primary">
              เพิ่มแบบเสื้อผ้า
            </button>
          </div>
        </ModalBody>
      </Modal>

      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Add Product</h2>
      </div>
      <div className="grid grid-cols-11 gap-x-6 mt-5 pb-20">
        <div className="intro-y col-span-11 ">
          <Productinfo OnProductInfoHandler={ProductInfoHandler} ResetData={ResetData} />

          <Size OnSaveSize={SaveSize} ResetData={ResetData} />

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
