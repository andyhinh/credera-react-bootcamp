import React from "react";
import PropTypes from "prop-types";
import StackGrid from "react-stack-grid";
import Card from "../Card";

// Different way to import styling into the component
import "./styles.css";

const Posts = ({ posts }) => {
  return (
    <StackGrid columnWidth={400}>
      {posts.map((post, i) => (
        <div className="item" key={i}>
          <Card post={post.data} />
        </div>
      ))}
    </StackGrid>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
