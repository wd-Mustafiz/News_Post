import React from "react";
import { Container } from "@material-ui/core";
import "./Main_Feture.css";
const MainFeture = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <div className="main-post">
          <h2 className="heading">
            COVID-19 outbreak is worsening malnutrition in India
          </h2>
          <p className="headP">
            Al Jazeera's Elizabeth Puranam reports from New Delhi.
            Advertisement. SOURCE: Al Jazeera News. Asia · India. 14 hours ago
          </p>
          <a
            href="https://www.aljazeera.com/news/2020/09/covid-19-outbreak-worsening-malnutrition-india-200904132435543.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Countine...
          </a>
        </div>
      </Container>
    </div>
  );
};

export default MainFeture;
