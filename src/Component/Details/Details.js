import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@material-ui/core";
import "./Details.css";
import Comment from "../Comment/Comment";
import SearchAppBar from "../Header/SearchAppBar";
const Details = () => {
  const { newId } = useParams();

  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${newId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${newId}`)
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  return (
    <div>
      <Container maxWidth="lg" style={{ margin: "0 auto 50px auto" }}>
        <SearchAppBar></SearchAppBar>
        <div className="more-news">
          <h3>Title: {post.title}</h3>
          <p style={{ fontSize: "22px", color: "grey" }}>
            <b>post:</b>
            {post.body}
          </p>
        </div>
      </Container>

      <Container maxWidth="lg">
        <h3 className="comment-head">{comment.length} Comments</h3>
        {comment.map((c) => (
          <Comment comment={c}></Comment>
        ))}
      </Container>
    </div>
  );
};

export default Details;
