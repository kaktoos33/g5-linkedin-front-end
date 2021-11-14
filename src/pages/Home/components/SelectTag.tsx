import React from "react";
import CreatableSelect from "react-select/creatable";
import { ActionMeta, OnChangeValue } from "react-select";
import { FieldProps } from "formik";

export interface Option {
  readonly value: string;
  readonly label: string;
}

interface CreatableMultiProps extends FieldProps {
  options: readonly Option[];
  className?: string;
}

export const CreatableMulti = ({
  className,
  field,
  form,
  options,
}: CreatableMultiProps) => {
  const handleChange = (
    newValue: OnChangeValue<Option, true>,
    actionMeta: ActionMeta<Option>
  ) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    form.setFieldValue(
      field.name,
      (newValue as Option[]).map((item: Option) => item.value)
    );
  };

  return (
    <CreatableSelect
      className={className}
      name={field.name}
      isMulti
      onChange={handleChange}
      options={options}
    />
  );
};

