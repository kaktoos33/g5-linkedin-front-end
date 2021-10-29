import "../../../variables/variables.scss";
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { useFormik } from 'formik';
import { User } from '../types/User.types';
import { CREATE_POST_MUTATION } from "../graphql/mutations";
//import { Uploader } from './Uploader';
import { Header } from "./header/Header";
import { render } from 'react-dom';
import { Formik } from "formik";
import yup from "yup";
import PhotoIcon from "../../../images/pic.svg"
import VideoIcon from "../../../images/video.svg"
import EditIcon from "../../../images/Vector.svg"
import { Card } from "../components/card/Card";

interface CreatePostProps {
    user: User;

}

export const CreatePost = ({ user }: CreatePostProps) => {
    const [createpost, { data, loading, error }] = useMutation(CREATE_POST_MUTATION);

    const formpost = useFormik({
        initialValues: {
            text: '',
            photo: '',
            video: ''
        },
        onSubmit: () => {
            addpost();
        },
    });
    const addpost = () => {
        createpost({
            variables: {
                text: formpost.values.text,
                like: 0
            }
        });
        console.log(`this is text ${formpost.values.text}`)
        if (error) {
            console.log(error);
        }

    };

    //@ts-ignore
    // handleSubmit = (values) => {
    //     let data = new FormData();
    //     data.append("photo1", values.photo1);
    //     //@ts-ignore
    //     return fetch(baseUrl, {
    //         method: "post",
    //         headers: new Headers({
    //             Accept: "application/json",
    //             //@ts-ignore
    //             Authorization: "Bearer " + token,
    //         }),
    //         body: data,
    //     })
    //         .then((response) => response.json())
    //         .catch((error) => console.log(error));
    // };


    return (
        <form onSubmit={formpost.handleSubmit}>
            <div>
                <Card classname="post">
                    <Header user={user} page={"createpost"} />

                    <div className="flex mt-2 mr-9">
                        <img src={EditIcon} alt="" />
                        <textarea id="text"
                            name="text"
                            onChange={formpost.handleChange}
                            value={formpost.values.text} className="w-full mt-6 ml-2 mr-3 text-base text-black outline-none resize-none focus:text-black-600" placeholder="چیزی بنویس ..." />
                    </div>

                    <div dir="ltr" className=" rounded-b-3xl send-box">

                        <label className="inline-flex float-right p-2 m-2 mr-6 font-medium text-gray-600 cursor-pointer rounded-xl hover:bg-gray-200 ">
                            <img src={VideoIcon} className="w-6 h-6 mr-1" alt="" />
                            <span>Video</span>
                            <input id="video"
                                name="Video"
                                onChange={formpost.handleChange}
                                value={formpost.values.video} type='file' accept="video/*" className="hidden" />
                        </label>

                        <label className="inline-flex float-right p-2 m-2 font-medium text-gray-600 cursor-pointer rounded-xl hover:bg-gray-200 ">
                            <img src={PhotoIcon} className="w-6 h-6 mr-1" alt="" />
                            <span>Photo</span>
                            <input id="photo"
                                name="Photo"
                                onChange={formpost.handleChange}
                                value={formpost.values.video}
                                // onChange={(event) => {//@ts-ignore
                                //     setFieldValue("photo1", event.target.files[0]);
                                // }}
                                type='file' accept="image/*" className="hidden" />
                        </label>

                        <button type="submit" className="mt-3 ml-6 send-but hover:text-white">
                            ارسال</button>
                    </div>
                </Card>

            </div>
        </form>
    )
}

