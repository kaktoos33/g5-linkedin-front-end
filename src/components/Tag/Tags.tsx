import React, { useState } from "react";
import { Card } from "../Card/Card";
import { ReactComponent as PlusSvg } from "../../images/Plus.svg";
import "./Tag.Style.scss";
import { Tag } from "./Tag.types";
import { TagItem } from "./TagItem";

interface TagProps {
  Taglist: Array<Tag>;
}

export const Tags = ({ Taglist }: TagProps) => {
  const [visible, setvisible] = useState(true);
  const toggleshow = () => {
    setvisible(!visible);
  };

  const addtag = (event: any) => {
    if (event.keyCode === 13) {
      console.log("enter");
    }
  };

  const tags = React.useMemo(
    () =>
      Taglist.map((a, index) => (
       <TagItem tag={a} index={index} classname="tag-span-sidebar" />
      )),
    [Taglist]
  );

  return (
    <Card classname="Tag">
      <div className="flex items-center border-b mx-7">
        <div className="w-3/4 mb-2 mt-3.5 tag-title">
          {visible ? (
            <label onClick={toggleshow}> هشتگ هایی که دنبال میکنید</label>
          ) : (
            <input
              name="tag"
              type="text"
              placeholder="بنویسید ..."
              className="bg-transparent outline-none"
              onKeyDown={(e) => addtag(e)}
            />
          )}
        </div>
        <div dir="ltr" className="w-1/4">
          <div className="w-5 h-5 container_plus">
            <PlusSvg id="plus_svg" className="plus" onClick={toggleshow} />
          </div>
        </div>
      </div>
      <div dir="ltr" className="mt-3.5 mb-5 mx-7">
        {tags}
      </div>
    </Card>
  );
};
