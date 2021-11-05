import React from "react";
import "../../../variables/variables.scss";
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { User } from '../../../components/UserCard/types/User.types';
import { CREATE_POST_MUTATION } from "../graphql/mutations";
import { Uploader } from './Uploader';
import { UserCard } from "../../../components/UserCard/UserCard";
import { render } from 'react-dom';
import { Formik , Form , Field } from "formik";
import yup from "yup";
import EditIcon from "../../../images/Vector.svg"
import { Card } from "../../../components/Card/Card";
import { UserClass } from "../../../components/UserCard/types/UserClass.type";
import { PrimaryButtun } from "../../../components/Buttun/PrimaryButtun";
import { ReactComponent as VideoSVG } from "../../../images/video.svg"

interface CreatePostProps {
    user: User;

}

export const CreatePost = ({ user }: CreatePostProps) => {
    const [createpost, { data, loading, error }] = useMutation(CREATE_POST_MUTATION);


    const classname: UserClass = {
        nameclass: "",
        roleclass: "",
        outerdivclass: "",
        innerdivclass: ""
    }
    const initialValues = {
        text: '',
        video: '',
        photo: ''
    }
    const onSubmit = (values: { photo: string | Blob; }) => {
        let data = new FormData();
        data.append("photo", values.photo);
        // addpost();
    }

    const addpost = () => {
        createpost({
            variables: {
                text: formik.values.text,
                like: 0
            }
        });
        console.log(`this is text ${formik.values.text}`)
        if (error) {
            console.log(error);
        }

    };


    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>

            <Form>

                <Card classname="createpost">
                    <UserCard user={user} page={"createpost"} calssnames={classname} />

                    <div className="flex mt-2 mr-9">
                        <img src={EditIcon} alt="" />
                        <Field as="textarea" id="text" name="text" className="w-full mt-6 ml-2 mr-3 text-base text-black outline-none resize-none focus:text-black-600" placeholder="چیزی بنویس ..." />
                    </div>
                    {/* <div>
                        <input type="file" name="photo" value={formik.values.photo}
                            onBlur={() => formik.setFieldTouched('photo')}
                            onChange={e => formik.setFieldValue('photo', e.target.files)} />
                        {/* {formik.values.photo && <img className="w-full h-full rounded-3xl" src={URL.createObjectURL(formik.values.photo)} alt={"sth"} />} */}
                    </div> */}

                    <div dir="ltr" className="py-2.5 px-7 rounded-b-3xl send-box">

                        <PrimaryButtun name="ارسال" lang="fa" />
                        <Uploader formik={formik} name="video" labelname="Video" typeacc="video/*" />
                        <Uploader formik={formik} name="photo" labelname="Photo" typeacc="image/*" />

                    </div>
                </Card>

            </Form>

        </Formik>


    )
}

