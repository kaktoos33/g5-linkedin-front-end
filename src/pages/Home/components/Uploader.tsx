import { FormikValues } from 'formik'
import React from 'react'

export const Uploader = ({ formpost, icon, name, typeacc }: { formpost: FormikValues, icon: string, name: string, typeacc: string }) => {
    return (
        <label className="inline-flex float-right p-2 m-2 mr-6 font-medium text-gray-600 cursor-pointer rounded-xl hover:bg-gray-200 ">
            <img src={icon} className="w-6 h-6 mr-1" alt="" />
            <span>{name}</span>
            <input id={`${name}`}
                name={`${name}`}
                onChange={e => e && formpost.handleChange(e)}
                value={formpost.values.video} type='file' accept={`${typeacc}`} className="hidden" />
        </label>
    )
}
