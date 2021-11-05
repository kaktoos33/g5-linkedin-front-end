import React from "react";
import "../../../variables/variables.scss";
import { useMutation } from "react-apollo";
import { gql } from "apollo-boost";
import { User } from "../../../components/UserCard/types/User.types";
import { CREATE_POST_MUTATION } from "../graphql/mutations";
import { Uploader } from "./Uploader";
import { UserCard } from "../../../components/UserCard/UserCard";
import { render } from "react-dom";
import { Formik, Form, Field } from "formik";
import yup from "yup";
import EditIcon from "../../../images/Vector.svg";
import { Card } from "../../../components/Card/Card";
import { UserClass } from "../../../components/UserCard/types/UserClass.type";
import { PrimaryButtun } from "../../../components/Buttun/PrimaryButtun";

interface CreatePostProps {
  user: User;
}
const initialValues = {
  text: "",
  video: "",
  photo: "",
};

type FormValues = {
  text: string;
  video: string;
  photo: string;
};

export const CreatePost = ({ user }: CreatePostProps) => {
  const [createpost, { data, loading, error }] =
    useMutation(CREATE_POST_MUTATION);

  const classname: UserClass = {
    nameclass: "",
    roleclass: "",
    outerdivclass: "",
    innerdivclass: "",
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
    //addpost(values);
  };

  //   const addpost = (values: any) => {
  //     createpost({
  //       variables: {
  //         text: values.text,
  //         like: 0,
  //       },
  //     });
  //     console.log(`this is text ${values.text}`);
  //     if (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Card classname="createpost">
          <UserCard user={user} page={"createpost"} calssnames={classname} />

          <div className="flex mt-2 mr-9">
            <img src={EditIcon} alt="" />
            <Field
              as="textarea"
              id="text"
              name="text"
              className="w-full mt-6 ml-2 mr-3 text-base text-black outline-none resize-none focus:text-black-600"
              placeholder="چیزی بنویس ..."
            />
          </div>

          <div dir="ltr" className="py-2.5 px-7 rounded-b-3xl send-box">
            <PrimaryButtun name="ارسال" lang="fa" />
            <Uploader name="video" labelname="Video" typeacc="video/*" />
            <Uploader name="photo" labelname="Photo" typeacc="image/*" />
          </div>
        </Card>
      </Form>
    </Formik>
  );
};
