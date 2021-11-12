import React, { Component } from "react";

import CreatableSelect from "react-select/creatable";
import { ActionMeta, OnChangeValue } from "react-select";
import { Tag } from "../../../components/Tag/Tag.types";

interface TagOption {
  readonly value: string;
  readonly label: string;
}
const fetechedTag: Array<Tag> = [
  { name: "work" },
  { name: "business" },
  { name: "hr" },
  { name: "userinterface" },
  { name: "digital" },
  { name: "userexperience" },
  { name: "ux" },
  { name: "ui" },
  { name: "freelance" },
];
const TagOptions: readonly TagOption[] = fetechedTag.map((a, index) => ({
  value: `${a.name}`,
  label: `#${a.name}`,
}));

export default class SelectTag extends Component<{}> {
  handleChange = (
    newValue: OnChangeValue<TagOption, true>,
    actionMeta: ActionMeta<TagOption>
  ) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  render() {
    return (
      <CreatableSelect
        className="Select_Tag"
        isMulti
        onChange={this.handleChange}
        options={TagOptions}
      />
    );
  }
}
