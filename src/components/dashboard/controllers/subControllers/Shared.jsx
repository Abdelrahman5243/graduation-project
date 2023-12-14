import React from "react";
import UploadWidget from "../../cloudinary/UploadWidget";
import { useDispatch, useSelector } from "react-redux";
import SubShared from "./SubShared";
import SubSharedArr from "./SubSharedArr";

const Shared = ({ cardIndex, sectionName, subName, blockName, dispatchRef }) => {
  const targetSection = useSelector((state) => state.template[sectionName]);
  const dispatch = useDispatch();
  function handleOnUpload(error, result, widget, target) {
    if (error) {
      widget.close({
        quiet: true,
      });
      return;
    }
    dispatch(dispatchRef({ section: sectionName, variable: target, value: result?.info?.secure_url, i: cardIndex, blockName: blockName }));
  }
  const fields = Object.keys(targetSection[blockName][cardIndex]);
  return (
    <div className="controller-field">
      <label className=" controller-label">
        {subName}
        {cardIndex + 1}
      </label>
      {fields.map((field) => {
        if (typeof targetSection[blockName][cardIndex][field] === "object") {
          if (typeof targetSection[blockName][cardIndex][field][0] === "object") {
            return targetSection[blockName][cardIndex][field].map((_, _index) => {
              return (
                <SubShared
                  cardIndex={cardIndex}
                  sectionName={sectionName}
                  blockName={blockName}
                  subBlockName={field}
                  subIndex={_index}
                  dispatchRef={dispatchRef}
                  key={_index}
                />
              );
            });
          } else
            return (
              <SubSharedArr
                cardIndex={cardIndex}
                sectionName={sectionName}
                blockName={blockName}
                subName={subName}
                subBlockName={field}
                dispatchRef={dispatchRef}
                key={field}
              />
            );
        }
        return (
          <div className="subController" key={field}>
            <label className="text-[16px]  capitalize">{field}</label>
            {field === "imgUrl" || field === "icon" ? (
              <div className="input-controller flex flex-between flex-row ">
                {field === "imgUrl" ? (
                  <>
                    <img src={targetSection[blockName][cardIndex][field]} alt="img" width={50} height={50} />
                    <UploadWidget onUpload={(error, result, widget) => handleOnUpload(error, result, widget, "imgUrl")}>
                      {({ open }) => {
                        function handleOnClick(e) {
                          e.preventDefault();
                          open();
                        }
                        return (
                          <button className="border p-2 border-blue-900 rounded-lg text-blue-800 " onClick={handleOnClick}>
                            Change Image
                          </button>
                        );
                      }}
                    </UploadWidget>
                  </>
                ) : (
                  <>
                    <img src={targetSection[blockName][cardIndex][field]} alt="img" width={14} height={14} />
                    <UploadWidget onUpload={(error, result, widget) => handleOnUpload(error, result, widget, "icon")}>
                      {({ open }) => {
                        function handleOnClick(e) {
                          e.preventDefault();
                          open();
                        }
                        return (
                          <button className="border p-2 border-blue-900 rounded-lg text-blue-800 " onClick={handleOnClick}>
                            Change Icon
                          </button>
                        );
                      }}
                    </UploadWidget>
                  </>
                )}
              </div>
            ) : (
              <textarea
                className="input-controller"
                style={{ backgroundColor: "#F2F2F2", borderRadius: "6px" }}
                wrap="hard"
                value={targetSection[blockName][cardIndex][field]}
                onChange={(e) => dispatch(dispatchRef({ section: sectionName, variable: field, value: e.target.value, i: cardIndex, blockName: blockName }))}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Shared;
