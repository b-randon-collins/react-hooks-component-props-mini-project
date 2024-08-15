// App.js
import React from "react";
import blogData from "../data/blog";
import Header from "./Header"; // Adjust the path according to your file structure
import About from "./About";
import ArticleList from "./ArticleList"; // Adjust the path according to your file structure

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about}/>
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
