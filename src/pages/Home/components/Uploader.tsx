import { FormikValues } from 'formik'
import React, { useState } from 'react'
import { ReactComponent as PhotoSVG } from "../../../images/pic.svg"
import { ReactComponent as VideoSVG } from "../../../images/video.svg"

export const Uploader = ({ formpost, name, typeacc }: { formpost: FormikValues, name: string, typeacc: string }) => {

    console.log()
    return (

        <label className="inline-flex float-right p-2 text-base font-medium text-gray-600 cursor-pointer ml-11 rounded-xl uploder" >
            {name === "Video" && <VideoSVG id="uploder-svg" className="w-5 h-5 mr-2" />}
            {name === "Photo" && <PhotoSVG  id="uploder-svg" className="w-5 h-5 mr-2 " />}
            <span>{name}</span>
            <input id={`${name}`}
                name={`${name}`}
                type="file" 
                onChange={e => e && formpost.handleChange(e)}
                value={formpost.values.video} accept={`${typeacc}`} className="hidden" />
        </label>

    )
}
