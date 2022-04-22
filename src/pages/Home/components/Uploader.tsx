import React from "react";
import { ReactComponent as PhotoSVG } from "../../../images/pic.svg";
import { ReactComponent as VideoSVG } from "../../../images/video.svg";
import { FileInput } from "./FileInput";

export const Uploader = ({ label, name, ...rest }: { label: string; name: string }) => {

  return (
    <label className="inline-flex float-right p-2 text-base font-medium text-gray-600 cursor-pointer ml-11 rounded-xl uploder">
      {name === "video" ? (
        <VideoSVG id="uploder-svg" className="w-5 h-5 mr-2" />
      ) : (
        <PhotoSVG id="uploder-svg" className="w-5 h-5 mr-2 " />
      )}

      <span>{label}</span>
      <FileInput name={name} {...rest} />
    </label>
  );
};
