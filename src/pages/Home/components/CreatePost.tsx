import React from "react";
import "../../../variables/variables.scss";
import { useMutation } from "@apollo/client";
import { User } from "../../../models/User";
import { CREATE_POST_MUTATION, TEST_UPLOAD } from "../graphql/mutations";
import { UPLOAD_FILE_MUTATION } from "../graphql/mutations";
import { Uploader } from "./Uploader";
import { UserCard } from "../../../components/UserCard/UserCard";
import { Formik, Form } from "formik";
import { Card } from "../../../components/Card/Card";
import { Button } from "../../../components/Buttun/Button";
import { PostInput } from "./PostInput";
import { ShowMedia } from "./ShowMedia";
import UploadService from "../../../services/upload-files.service";
import { useHistory } from "react-router-dom";
import { UserPostMedia } from "../types/Post.type";

interface CreatePostProps {
  user: User;
}
const initialValues = {
  content: "",
  video: undefined,
  image: undefined,
};

type FormValues = {
  content: string;
  video?: File;
  image?: File;
};

export const CreatePost = ({ user }: CreatePostProps) => {
  const [createpost, { error }] = useMutation(CREATE_POST_MUTATION);
  const [uploadFile] = useMutation(UPLOAD_FILE_MUTATION, {
    onCompleted: (data) => console.log(data),
  });
  const [testUpload] = useMutation(UPLOAD_FILE_MUTATION);
  const history = useHistory();

  const onSubmit = (values: FormValues, onSubmitProps: any) => {
    console.log(values);
    if (values.video !== undefined) {
      UploadService.uploadVideo(values.video, () => {}).then((res) => {
        console.log("image and content : " + res.data);
        const tmpMedia: UserPostMedia = {
          fileName: res.data,
          type: !!values.video?.type ? values.video.type : "null",
          size: !!values.video?.size ? values.video?.size.toString() : "0",
        };
        if (res.data !== "Error") addpost(values.content, tmpMedia);
      });
    } else if (values.image !== undefined) {
      UploadService.upload(values.image, () => {}).then((res) => {
        console.log("image and content : " + res.data);
        const tmpMedia: UserPostMedia = {
          fileName: res.data,
          type: !!values.image?.type ? values.image.type : "null",
          size: !!values.image?.size ? values.image?.size.toString() : "0",
        };
        if (res.data !== "Error") addpost(values.content, tmpMedia);
      });
    } else {
      console.log("content only :");
      addpost(values.content, { fileName: "", size: "", type: "" });
    }

    // values.image && addfile(values.image);
    // onSubmitProps.resetForm();
    // console.log("after reset", values);
    // history.push("/");
    // window.location.reload();
  };

  // const addpost = (content: string) => {
  //   createpost({
  //     variables: {
  //       content: content,
  //     },
  //   });
  //   console.log(`this is content ${content}`);
  //   if (error) {
  //     console.log(error);
  //   }
  // };

  const addfile = (image: File) => {
    uploadFile({
      variables: {
        file: image,
      },
    });
    console.log("this is content image");
    if (error) {
      console.log(error);
    }
  };
  const addpost = (content: string, media: UserPostMedia) => {
    createpost({
      variables: {
        content: content,
        media: {
          fileName: media.fileName,
          type: media.type,
          size: media.size,
        },
      },
    }).then((data) => {
      history.push("/");
      window.location.reload();
    });
    console.log(`this is content ${content}`);
    if (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
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

                <ShowMedia />

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
    </React.Fragment>
  );
};
