import React, { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import { Lucide, Tippy } from "@/base-components";
import useDidMountEffect from "../../hook/useDidMountEffect";

function UploadFB(props) {
  const [images, setImages] = React.useState([]);
  const [imageadd, setimageadd] = useState(false);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // const upimage = imageList[addUpdateIndex].file;
    // data for submit
    setimageadd(true);
    setImages(imageList);
  };
  useDidMountEffect(() => {
    if (images.length < 1 && imageadd === true) {
      if (typeof props.onSaveImageFront === "function") {
        console.log(999);
        props.onSaveImageFront([]);
      } else {
        console.log(555);
        props.onSaveImageBack([]);
      }
      return;
    }
    const newImageURL = [];
    images.forEach((e) => newImageURL.push(e.file));
    if (typeof props.onSaveImageFront === "function") {
      props.onSaveImageFront(newImageURL);
    } else {
      props.onSaveImageBack(newImageURL);
    }
  }, [images]);
  useDidMountEffect(() => {
    let del = document.getElementById("Delimg");
    setImages([]);
  }, [props.DelImg]);

  const onImageRemoveAll = (e) => {
    setImages([]);
  };
  return (
    <div>
      <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
          // write your building UI

          <div>
            <div className=" pl-4 grid grid-cols-1 pr-5">
              {imageList.map((image, index) => (
                <div key={index} className=" h-140 relative cursor-pointer  image-fit   ">
                  <img
                    src={image.data_url}
                    className="rounded-md justify-center self-center  items-centers  "
                    alt=""
                    width="250"
                  />
                  <Tippy
                    id="Delimg"
                    onClick={onImageRemoveAll}
                    content="Remove this image?"
                    className="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"
                  >
                    <Lucide icon="X" className="w-4 h-4" />
                  </Tippy>
                </div>
              ))}
            </div>
            <div className="px-4 pb-4 mt-5 flex items-center justify-center cursor-pointer relative">
              <Lucide icon="Image" className="w-4 h-4 mr-2" />
              <button
                className="text-primary mr-1"
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                เลือกรูปภาพหรือวางรูปภาพที่นี่
              </button>
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
export default UploadFB;
