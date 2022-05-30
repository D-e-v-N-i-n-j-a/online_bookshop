import React from "react";
import NavigationBar from "./components/nav";
import ShowCase from "./components/showcase";
import BookContainerSection from "./components/show_books";
import CoverPage from "./components/coverpage";
import BooksCategory from "./components/category";
const App = ()=>{
    return <section>
       <NavigationBar />
       <ShowCase/>
      <BookContainerSection/>
      <CoverPage/>
      <BooksCategory/>
    </section>
}
export default App;



