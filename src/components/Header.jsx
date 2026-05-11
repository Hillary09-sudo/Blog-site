import React from "react";

// Header is the top-level banner of the blog.
// It is connected to App, which passes the blog name down via props.
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
