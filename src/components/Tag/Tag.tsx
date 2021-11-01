import React from 'react'
import { Card } from "../Card/Card";
import  Plus  from "../../images/Plus.svg";
import './Tag.style.scss'

export const Tag = () => {
    return (
        <Card classname="tag">
            <div className="flex my-3.5 mx-7 border-b">
                <label >هشتگ هایی که دنبال میکنید</label>
                <img  className="plus" src={Plus} alt="" />
            </div>
            
        </Card>
    )
}
