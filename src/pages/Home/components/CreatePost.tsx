import React from "react";
import "../../../variables/variables.scss";
import { useMutation } from "react-apollo";
import { gql } from "apollo-boost";
import { User } from "../../../components/UserCard/types/User.types";
import { CREATE_POST_MUTATION } from "../graphql/mutations";
import { Uploader } from "./Uploader";
import { UserCard } from "../../../components/UserCard/UserCard";
import { Formik, Form, Field } from "formik";
import EditIcon from "../../../images/Vector.svg";
import { Card } from "../../../components/Card/Card";
import { Button } from "../../../components/Buttun/Button";
import { PostInput } from "./PostInput";

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

  const onSubmit = (values: FormValues) => {
    console.log(URL.createObjectURL(values.photo));
    console.log (values)
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
        <Card classname="Create_Post">
          <UserCard user={user} componentname="Create_Post" image_size="M" />

          <PostInput title="چیزی بنویس ..." />
          
          <div dir="ltr" className="py-2.5 px-7 rounded-b-3xl send-box">
            <Button type="submit" gruop="Primary" lang="fa" size="M">
              ارسال
            </Button>
            <Uploader name="video" labelname="Video" typeacc="video/*" />
            <Uploader name="photo" labelname="Photo" typeacc="image/*" />
          </div>
        </Card>
      </Form>
    </Formik>
  );
};
