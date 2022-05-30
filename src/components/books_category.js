import React from "react";
const img = require("../assets/images/bk1.jpg")
const Book__CategoryModel = ({title})=>{
    return <div className="books__categoryModel">
        <button>{title} <i class="fa fa-book" aria-hidden="true"></i></button>          
    </div>
}


export default Book__CategoryModel;