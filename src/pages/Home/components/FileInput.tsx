import { useFormikContext } from "formik";
import React, { ChangeEvent } from "react";

export const FileInput = (props: { name: string }) => {
  const { name, ...rest } = props;
  const { setFieldValue, values } =
    useFormikContext<{ image: File; video: File }>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files) {
        console.log(values);
        setFieldValue("video", "");
        setFieldValue("image", "");
        setFieldValue(name, e.target.files[0]);
        console.log(name, values);
      }
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
