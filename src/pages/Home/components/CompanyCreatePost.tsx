import { Form, Formik } from "formik";
import React from "react";
import { Button } from "../../../components/Buttun/Button";
import { Card } from "../../../components/Card/Card";
import { User } from "../../../components/UserCard/types/User.types";
import { UserCard } from "../../../components/UserCard/UserCard";
import { PostInput } from "./PostInput";
import { TagItem } from "../../../components/Tag/TagItem";
import { Tag } from "../../../components/Tag/Tag.types";
import { useMutation } from "@apollo/react-hooks";
import { C_CREATE_POST_MUTATION } from "../graphql/mutations";

interface CompanyCreatePostProps {
  user: User;
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

const initialValues = {
  text: "",
  tags: []
};

type FormValues = {
  text: string;
  tags:Array<string>;
};

export const CompanyCreatePost = ({ user }: CompanyCreatePostProps) => {
  const Taglist = fetechedTag;
  const tags = React.useMemo(
    () =>
      Taglist.map((a, index) => (
        <TagItem tag={a} index={index} classname="tag-span" />
      )),
    [Taglist]
  );
  const [createpost, { error }] = useMutation(C_CREATE_POST_MUTATION);
  const onSubmit = (values: FormValues) => {
    //addpost(values);
  };

  const addpost = (text: string, tags?: string) => {
    createpost({
      variables: {
        text: text,
        tags: tags,
      },
    });
    console.log(`this is text ${text}`);
    if (error) {
      console.log(error);
    }
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form>
            <Card classname="Create_Post">
              <UserCard
                user={user}
                componentname="Create_Post"
                image_size="M"
              />

              <PostInput title="درخواست نیرو ..." />
              <div className="mb-4 mx-7">
                {tags}
                <span className="inline-block px-3 py-0.5 mx-1 mt-1 tag-span-fa">
                  + اضافه کردن مهارت دیگر
                </span>
              </div>

              <div
                dir="ltr"
                className="pt-4 pb-6 border-t-2 mx-7 rounded-b-3xl"
              >
                <Button
                  type="submit"
                  disabled={!formik.dirty}
                  gruop="Primary"
                  lang="fa"
                  size="M"
                >
                  ارسال
                </Button>
              </div>
            </Card>
          </Form>
        );
      }}
    </Formik>
  );
};
