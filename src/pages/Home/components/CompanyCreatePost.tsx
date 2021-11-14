import { Field, Form, Formik } from "formik";
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
import  {CreatableMulti}  from "./SelectTag";

interface CompanyCreatePostProps {
  user: User;
}

const initialValues = {
  content: "",
  tags: [],
};

type FormValues = {
  content: string;
  tags:Array<string>;
};

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

interface TagOption {
  readonly value: string;
  readonly label: string;
}
const TagOptions: readonly TagOption[] = fetechedTag.map((a, index) => ({
  value: `${a.name}`,
  label: `#${a.name}`,
}));

export const CompanyCreatePost = ({ user }: CompanyCreatePostProps) => {
  const [createpost, { error }] = useMutation(C_CREATE_POST_MUTATION);
  const onSubmit = (values: FormValues, onSubmitProps: any) => {
    console.log(values);
    //addpost(values);
    onSubmitProps.resetForm();
  };

  const addpost = (content: string, tags?:string) => {
    createpost({
      variables: {
        content: content,
        tags: tags,
      },
    });
    console.log(`this is content ${content}`);
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
              <div dir="ltr" className="mb-4 mx-7">
                <Field 
                  className="Select_Tag"
                  name="tags"
                  options={TagOptions}
                  component={CreatableMulti}
                />
                
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
