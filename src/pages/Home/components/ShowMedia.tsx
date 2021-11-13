import { useFormikContext } from "formik";
import React from "react";

export const ShowMedia = () => {
  const { values } = useFormikContext<{ image: File; video: File }>();
  return (
    (values.image || values.video) ? (
      <div className="flex justify-center my-5 mx-9 border-1 ">
        {values.image && (
          <img  key={URL.createObjectURL(values.image)}
            className="max-w-xl rounded-3xl max-h-80"
            src={URL.createObjectURL(values.image)}
            alt=""
          />
        )}
        {values.video && (
          <video
            key={URL.createObjectURL(values.video)}
            className="rounded-3xl max-h-96"
            controls
          >
            <source src={URL.createObjectURL(values.video)} />
          </video>
        )}
      </div>
    ): null
  );
};


