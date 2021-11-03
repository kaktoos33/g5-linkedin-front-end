import React, { useState } from 'react'
import { Card } from "../Card/Card";
import { ReactComponent as PlusSvg } from "../../images/Plus.svg"
import './Tag.style.scss'
import { Tag } from './Tag.types';

interface TagProps {
    Taglist: Array<Tag>
}


export const Tags = ({ Taglist }: TagProps) => {
    const [visible, setvisible] = useState(true);
    const toggleshow = () => { setvisible(!visible) };


    const addtag = (event: any) => {
        
        if (event.keyCode === 13) {
            console.log('enter')
        }
    }

    const tag = React.useMemo(() => Taglist.map((a) =>

        <span className="inline-block tag-span mx-1 my-1 px-3 py-0.5">#{a.name}</span>
    ), [Taglist]);

    return (
        <Card classname="tag">
            <div className="flex items-center border-b mx-7">
                <div className="w-3/4 mb-2 mt-3.5 tag-title">
                    {
                        visible && <label onClick={toggleshow} > هشتگ هایی که دنبال میکنید</label>
                    }
                    {
                        !visible && <input name="tag" type="text" placeholder="بنویسید ..." className="bg-transparent outline-none"
                            onKeyDown={(e) => addtag(e)} />
                    }
                </div>
                <div dir="ltr" className="w-1/4 container_plus">
                    <PlusSvg id="plus_svg" className="plus"  onClick={toggleshow} />
                </div>
            </div>
            <div dir="ltr" className="mt-3.5 mb-5 mx-7">
                {tag}
            </div>


        </Card>
    )
}

