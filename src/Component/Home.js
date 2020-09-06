import React from "react";
import SearchAppBar from "./Header/SearchAppBar";
import MainFeture from "./minfeturepost/MainFeture";

import NewsContainer from "./NewsContainer/NewsContainer";

const Home = () => {
  return (
    <div>
      <SearchAppBar></SearchAppBar>
      <MainFeture></MainFeture>
      <NewsContainer></NewsContainer>
    </div>
  );
};

export default Home;
