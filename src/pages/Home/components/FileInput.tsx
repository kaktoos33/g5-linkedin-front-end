import React, { ChangeEventHandler } from "react";

export const FileInput = ({
  name,
  typeacc,
  onChange
}: {
  name: string;
  typeacc: string;
  onChange : ChangeEventHandler<HTMLInputElement>
}) => {
  return (
    <input
      id={`${name}`}
      name={`${name}`}
      type="file"
      onChange={onChange}
      accept={`${typeacc}`}
      className="hidden"
    />
  );
};
