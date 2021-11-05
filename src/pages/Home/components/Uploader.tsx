import { FormikValues } from 'formik'
import React, { useState } from 'react'
import { ReactComponent as PhotoSVG } from "../../../images/pic.svg"
import { ReactComponent as VideoSVG } from "../../../images/video.svg"

export const Uploader = ({ formik, name, labelname, typeacc }: { formik: FormikValues, name: string, labelname: string, typeacc: string }) => {
    
    return (

        <label className="inline-flex float-right p-2 text-base font-medium text-gray-600 cursor-pointer ml-11 rounded-xl uploder" >
            {name === "video" && <VideoSVG id="uploder-svg" className="w-5 h-5 mr-2" />}
            {name === "photo" && <PhotoSVG id="uploder-svg" className="w-5 h-5 mr-2 " />}
            <span>{labelname}</span>
            {name === "video" && <input id={`${name}`} name={`${name}`} type="file"
                onChange={formik.handleChange}
                value={formik.values.video} accept={`${typeacc}`} className="hidden" />}
            {name === "photo" && <input id={`${name}`} name={`${name}`} type="file"
                onChange={formik.handleChange}
                value={formik.values.photo} accept={`${typeacc}`} className="hidden" />}
        </label>

    )
}
