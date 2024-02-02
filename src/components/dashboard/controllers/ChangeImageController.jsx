import React from "react";
import UploadWidget from "../cloudinary/UploadWidget";
import { useDispatch } from "react-redux";
const ChangeImageController = ({ field, src, dispatchRef }) => {
  const dispatch = useDispatch();
  function handleOnUpload(error, result, widget, target) {
    if (error) {
      widget.close({
        quiet: true,
      });
      return;
    }
    dispatch(dispatchRef(target, result));
  }
  return (
    <div className="input-controller flex flex-between">
      {field === "imgUrl" ? (
        <>
          <img src={src} alt="img" width={100} style={{maxHeight:"150px"}}/>
          <UploadWidget onUpload={(error, result, widget) => handleOnUpload(error, result, widget, "imgUrl")}>
            {({ open }) => {
              function handleOnClick(e) {
                e.preventDefault();
                open();
              }
              return (
                <button className="border px-2  border-blue-900 rounded-lg text-blue-800 " onClick={handleOnClick}>
                  Change
                </button>
              );
            }}
          </UploadWidget>
        </>
      ) : (
        <>
          <img src={src} alt="img" width={25} />
          <UploadWidget onUpload={(error, result, widget) => handleOnUpload(error, result, widget, "icon")}>
            {({ open }) => {
              function handleOnClick(e) {
                e.preventDefault();
                open();
              }
              return (
                <button className="border px-2 border-blue-900 rounded-lg text-blue-800 " onClick={handleOnClick}>
                  Change
                </button>
              );
            }}
          </UploadWidget>
        </>
      )}
    </div>
  );
};

export default ChangeImageController;