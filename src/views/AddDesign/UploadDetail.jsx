import React, { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import { Lucide, Tippy } from "@/base-components";

function UploadDetail(props) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  useEffect(() => {
    if (images.length < 1) return;
    const newImageURL = [];
    images.forEach((e) => newImageURL.push(e.file));
    props.onSaveImageDetail(newImageURL);
  }, [images]);

  useEffect(() => {
    let del = document.getElementById("Delimg");
    setImages([]);
  }, [props.DelImg]);
  return (
    <div>
      <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
          // write your building UI

          <div>
            <div className="grid grid-cols-10 gap-5 pl-4 pr-5">
              {imageList.map((image, index) => (
                <div key={index} className="col-span-5 md:col-span-2   h-64 relative image-fit cursor-pointer zoom-in">
                  <img src={image.data_url} className="rounded-md" alt="" width="50" />
                  <Tippy
                    onClick={() => onImageRemove(index)}
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
export default UploadDetail;
