// ArticleList.js
import React from 'react';
import Article from './Article'; // Ensure the path matches where Article.js is located

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
};

export default ArticleList;
