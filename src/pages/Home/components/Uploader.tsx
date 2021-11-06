import { useFormikContext } from "formik";
import React, { ChangeEvent } from "react";
import { ReactComponent as PhotoSVG } from "../../../images/pic.svg";
import { ReactComponent as VideoSVG } from "../../../images/video.svg";
import {FileInput} from "./FileInput"

export const Uploader = ({
  name,
  labelname,
  typeacc,
}: {
  name: string;
  labelname: string;
  typeacc: string;
}) => {
  const { setFieldValue } = useFormikContext<{ photo: File; video: File }>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFieldValue(name, e.target.files && e.target.files[0]);

  return (
    <label className="inline-flex float-right p-2 text-base font-medium text-gray-600 cursor-pointer ml-11 rounded-xl uploder">
      {name === "video" ? (
        <VideoSVG id="uploder-svg" className="w-5 h-5 mr-2" />
        
      ) : (
        <PhotoSVG id="uploder-svg" className="w-5 h-5 mr-2 " />
      )}

      <span>{labelname}</span>
      {name === "video" ? (
       <FileInput name={name} typeacc={typeacc} onChange={onChange} />
      ) : (
        <FileInput name={name} typeacc={typeacc} onChange={onChange} />
      )}
    </label>
  );
};
