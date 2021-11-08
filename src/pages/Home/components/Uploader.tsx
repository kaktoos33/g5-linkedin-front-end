import { useFormikContext } from "formik";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { ReactComponent as PhotoSVG } from "../../../images/pic.svg";
import { ReactComponent as VideoSVG } from "../../../images/video.svg";
import { FileInput } from "./FileInput";
import Resizer from "react-image-file-resizer";

export const Uploader = ({
  name,
  labelname,
  typeacc,
  seturl,
  setvideo,
}: {
  name: string;
  labelname: string;
  typeacc: string;
  seturl: Dispatch<SetStateAction<string>>;
  setvideo: Dispatch<SetStateAction<string>>;
}) => {
  const { setFieldValue } = useFormikContext<{ photo: File; video: File }>();

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files) {
        setFieldValue(name, e.target.files[0]);
        const file = e.target.files[0];
        if (name === "photo") {
          const image = await resizeFile(file);
          seturl(URL.createObjectURL(image));
          setvideo("")
          setFieldValue('video', '');
        } else {
          setvideo(URL.createObjectURL(file));
          seturl("");
          setFieldValue('photo', '');
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const resizeFile = (file: File) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        500,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "file"
      );
    });

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
