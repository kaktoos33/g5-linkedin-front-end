import React, { useState } from 'react';
import './MoreLink.Style.scss'

export const ReadMore = (props: { text :string }) => {
    const text = props.text;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => { setIsReadMore(!isReadMore) };

    return (
        <p className="text-sm leading-6 text-justify font-sm mx-9">
            {isReadMore ? text.slice(0, 300) : text}
            {text.length > 300 &&
                <a className="readmore" onClick={toggleReadMore}>
                    {isReadMore ? ' بیشتر...' : ' کمتر...'}
                </a>
            }
        </p>
    )
}