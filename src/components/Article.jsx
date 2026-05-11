import React from "react";

// Article represents a single blog post.
// It is connected to ArticleList, which passes title, date, and preview as props.
function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
