import React, { createContext, useMemo, useState } from "react";
import "../../../variables/variables.scss";
import { useMutation } from "react-apollo";
import { User } from "../../../components/UserCard/types/User.types";
import { CREATE_POST_MUTATION } from "../graphql/mutations";
import { Uploader } from "./Uploader";
import { UserCard } from "../../../components/UserCard/UserCard";
import { Formik, Form } from "formik";
import { Card } from "../../../components/Card/Card";
import { Button } from "../../../components/Buttun/Button";
import { PostInput } from "./PostInput";

interface CreatePostProps {
  user: User;
}
const initialValues = {
  text: "",
  video: "",
  image: "",
};

type FormValues = {
  text: string;
  video: string;
  image: string;
};

export const CreatePost = ({ user }: CreatePostProps) => {
  const [createpost, { error }] = useMutation(CREATE_POST_MUTATION);

  const onSubmit = (values: FormValues, onSubmitProps: any) => {
    console.log(values);

    // if (values.image || values.video) {
    //   values.image
    //     ? addpost(values.text, values.image)
    //     : addpost(values.text, values.video);
    // } else {
    //   addpost(values.text);
    // }
    onSubmitProps.resetForm();
    console.log(values);
  };

  const addpost = (text: string, file?: any) => {
    createpost({
      variables: {
        text: text,
        file: file,
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
              <PostInput title="چیزی بنویس ..." />

              {(formik.values.image || formik.values.video) && (
                <div className="flex justify-center my-5 mx-9 border-1 ">
                  {formik.values.image && (
                    <img
                      className="max-w-xl rounded-3xl max-h-80"
                      src={URL.createObjectURL(formik.values.image)}
                      alt=""
                    />
                  )}
                  {formik.values.video && (
                    <video className="rounded-3xl max-h-96" controls>
                      <source src={URL.createObjectURL(formik.values.video)} />
                    </video>
                  )}
                </div>
              )}

              <div dir="ltr" className="py-2.5 px-7 rounded-b-3xl send-box">
                <Button
                  disabled={!formik.dirty}
                  type="submit"
                  gruop="Primary"
                  lang="fa"
                  size="M"
                >
                  ارسال
                </Button>

                <Uploader label="Video" name="video" />
                <Uploader label="Photo" name="image" />
              </div>
            </Card>
          </Form>
        );
      }}
    </Formik>
  );
};

{
  /* <Uploader
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
                /> */
}
