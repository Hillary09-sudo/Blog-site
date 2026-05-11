import React from "react";
import Article from "./Article";

// ArticleList renders a list of Article components.
// It is connected to App, which passes the posts array down as props.
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
