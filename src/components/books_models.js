import React from "react";

const Books = ({title,image})=>{
    return <div className="book__container">
            <img src={image} alt="" />
            <div className="book__info">
            <span>{title}</span>
            <button className="read_btn">Read Book</button>
            </div>

    </div>
}


export default Books; 