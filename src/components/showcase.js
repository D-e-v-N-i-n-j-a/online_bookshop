import React from "react";

const ShowCase = ()=>{
    return <section className="showcase">
            <h1>Search books of popular authors here</h1>
            <div className="search_container">
            <input placeholder="search books here" type="text" name="" id="search_btn" />
            <button className="search_btn">Search</button>
            </div>
    </section>
}

export default ShowCase;