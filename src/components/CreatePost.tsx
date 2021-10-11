import React, { ReactNode } from 'react'


export const CreatePost = (props: {
    header?: ReactNode;
    children?: ReactNode | undefined;
}) => {
    return (
        <div className="Rectangle9">
            {props.header && (
                <div className="Rectangle17">
                    {props.header}
                </div>
            )}
            <span className="Post">
                <img src="G:/Rahnama Collage/LinkedIn/g5-linkedin-front-end/src/Vector.png" />
                <input placeholder="چیزی بنویس ...">
                </input>
            </span>

            <button className="Rectangle5">ارسال</button>
        </div>
    )
}

export default CreatePost;