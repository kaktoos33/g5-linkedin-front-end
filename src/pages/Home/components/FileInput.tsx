import { useFormikContext } from "formik";
import React, { ChangeEvent } from "react";

export const FileInput = ({ name, ...rest }: { name: string }) => {
 
  const { setFieldValue, values } =
    useFormikContext<{ image: File; video: File }>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files) {
        console.log(values);
        setFieldValue("video", undefined);
        setFieldValue("image", undefined);
        setFieldValue(name, e.target.files[0]);
        
      }
      console.log(values.image , values.video);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <input
      id={name}
      name={name}
      type="file"
      {...rest}
      accept={`${name}/*`}
      onChange={onChange}
      className="hidden"
    />
  );
};
