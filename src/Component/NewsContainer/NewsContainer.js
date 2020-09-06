import React, { useState, useEffect } from "react";

import { Container } from "@material-ui/core";
import News from "../News/News";

const NewsContainer = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div>
      <Container maxWidth="lg">
        <h2 style={{ color: "teal" }}>{news.length} Breaking news </h2>
        <br />
        <div style={{ display: "flex", flexWrap: "Wrap", width: "100%" }}>
          {news.map((n) => (
            <News post={n} key={n.id}></News>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewsContainer;
