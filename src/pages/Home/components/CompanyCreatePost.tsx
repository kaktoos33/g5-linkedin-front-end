import { Form, Formik } from "formik";
import React from "react";
import { Button } from "../../../components/Buttun/Button";
import { Card } from "../../../components/Card/Card";
import { User } from "../../../components/UserCard/types/User.types";
import { UserCard } from "../../../components/UserCard/UserCard";
import { PostInput } from "./PostInput";

interface CompanyCreatePostProps {
  user: User;
}

const initialValues = {
  text: "",
  tags: "",
};

type FormValues = {
  text: string;
  tags: string;
};

export const CompanyCreatePost = ({ user }: CompanyCreatePostProps) => {
  const onSubmit = (values: FormValues) => {
    //addpost(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Card classname="Create_Post">
          <UserCard user={user} componentname="Create_Post" image_size="M" />

          <PostInput title="درخواست نیرو ..." />
          
          <div></div>

          <div dir="ltr" className="pt-4 pb-6 border-t-2 mx-7 rounded-b-3xl">
            <Button type="submit" gruop="Primary" lang="fa" size="M">
              ارسال
            </Button>
          </div>
        </Card>
      </Form>
    </Formik>
  );
};
