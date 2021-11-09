import React, { useState } from "react";
import "../../../variables/variables.scss";
import { useMutation } from "react-apollo";
import { gql } from "apollo-boost";
import { User } from "../../../components/UserCard/types/User.types";
import { CREATE_POST_MUTATION } from "../graphql/mutations";
import { Uploader } from "./Uploader";
import { UserCard } from "../../../components/UserCard/UserCard";
import { Formik, Form } from "formik";
import { Card } from "../../../components/Card/Card";
import { Button } from "../../../components/Buttun/Button";
import { PostInput } from "./PostInput";
import * as Yup from "yup";

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
const validationschema = Yup.object({
  text: Yup.string().required("لطفا چیزی بنویسید !"),
});
export const CreatePost = ({ user }: CreatePostProps) => {
  const [createpost, { data, loading, error }] =
    useMutation(CREATE_POST_MUTATION);
  const [url, seturl] = useState("");
  const [video, setVideo] = useState("");
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
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationschema}
      // validateOnMount
      // validateOnChange={false}
      validateOnBlur={false}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <Card classname="Create_Post">
              <UserCard
                user={user}
                componentname="Create_Post"
                image_size="M"
              />

              <PostInput title="چیزی بنویس ..." />

              {(url || video) && (
                <div className="flex justify-center my-5 mx-9 border-1 ">
                  {url && <img className="rounded-3xl" src={url} alt="" />}
                  {video && (
                    <video className="rounded-3xl" controls>
                      <source src={video} />
                    </video>
                  )}
                </div>
              )}

              <div dir="ltr" className="py-2.5 px-7 rounded-b-3xl send-box">
                <Button
                  disabled={formik.isSubmitting || !formik.isValid}
                  type="submit"
                  gruop="Primary"
                  lang="fa"
                  size="M"
                >
                  ارسال
                </Button>

                <Uploader
                  name="video"
                  labelname="Video"
                  typeacc="video/*"
                  seturl={seturl}
                  setvideo={setVideo}
                />
                <Uploader
                  name="photo"
                  labelname="Photo"
                  typeacc="image/*"
                  seturl={seturl}
                  setvideo={setVideo}
                />
              </div>
            </Card>
          </Form>
        );
      }}
    </Formik>
  );
};
