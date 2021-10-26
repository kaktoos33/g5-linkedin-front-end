import { FunctionComponent } from 'react'
import { Field, Form, Formik, FormikProps } from 'formik';

type UploaderProps = {
    id: String ;
    name: String;
    path: string;
    // onChange : JsxAttribute;
    // value: JsxAttribute;


}

export const Uploader = ({ name, path }: UploaderProps) => {
    return (
        <label className="inline-flex items-center float-right px-8 py-2 m-2 font-medium text-gray-600 bg-indigo-100 rounded cursor-pointer hover:bg-gray-300">
            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d={path} fill="#666666" /></svg>
            <span>{name}</span>
            <input type='file' className="hidden" />
        </label>
    )
}
