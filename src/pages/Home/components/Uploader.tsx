import { FormikValues } from 'formik'
import React from 'react'

export const Uploader = ({ formpost, icon, name, typeacc }: { formpost: FormikValues, icon: string, name: string, typeacc: string }) => {
    return (
            <label className="inline-flex float-right p-2 text-base font-medium text-gray-600 cursor-pointer ml-11 rounded-xl uploder">
                <img src={icon} className="w-5 h-5 mr-2" alt="" />
                <span>{name}</span>
                <input id={`${name}`}
                    name={`${name}`}
                    onChange={e => e && formpost.handleChange(e)}
                    value={formpost.values.video} type='file' accept={`${typeacc}`} className="hidden" />
            </label>

    )
}
