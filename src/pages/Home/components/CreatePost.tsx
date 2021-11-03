import "../../../variables/variables.scss";
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { useFormik } from 'formik';
import { User } from '../../../components/UserCard/types/User.types';
import { CREATE_POST_MUTATION } from "../graphql/mutations";
import { Uploader } from './Uploader';
import { UserCard } from "../../../components/UserCard/UserCard";
import { render } from 'react-dom';
import { Formik } from "formik";
import yup from "yup";
import PhotoIcon from "../../../images/pic.svg"
import VideoIcon from "../../../images/video.svg"
import EditIcon from "../../../images/Vector.svg"
import { Card } from "../../../components/Card/Card";
import { UserClass } from "../../../components/UserCard/types/UserClass.type";
import { PrimaryButtun } from "../../../components/Buttun/PrimaryButtun";

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
            <Card classname="createpost">

                <UserCard user={user} page={"createpost"} calssnames={classname} />

                <div className="flex mt-2 mr-9">
                    <img src={EditIcon} alt="" />
                    <textarea id="text"
                        name="text"
                        onChange={formpost.handleChange}
                        value={formpost.values.text} className="w-full mt-6 ml-2 mr-3 text-base text-black outline-none resize-none focus:text-black-600" placeholder="چیزی بنویس ..." />
                </div>

                <div dir="ltr" className="py-2.5 px-7 rounded-b-3xl send-box">
                    
                     <PrimaryButtun type="submit" name="ارسال" />
                      <Uploader formpost={formpost} icon={VideoIcon} name="Video" typeacc="video/*" />
                     <Uploader formpost={formpost} icon={PhotoIcon} name="Photo" typeacc="image/*" />

                </div>
            </Card>

        </form>


    )
}

