import React from "react";
import Books from "./books_models";
const bk =  require("../assets/images/bk1.jpg")
const bk1 =  require("../assets/images/bk2.jpg")

const BookContainerSection=()=>{
    return <section className="book__showcase">
            <span className="cont_title">Books Category</span>
            <div className="books_catalog">
                <Books title={"Myles Munroe"} image={bk}/>
                <Books title={"Myles Munroe"} image={bk1}/>
                <Books title={"Myles Munroe"} image={bk}/>
                <Books title={"Myles Munroe"} image={bk1}/>
                <Books title={"Myles Munroe"} image={bk}/>
                <Books title={"Myles Munroe"} image={bk1}/>
                <Books title={"Myles Munroe"} image={bk}/>
                <Books title={"Myles Munroe"} image={bk1}/>
                <Books title={"Myles Munroe"} image={bk1}/>
                <Books title={"Myles Munroe"} image={bk1}/>
            </div>
    </section>
}







export default BookContainerSection;