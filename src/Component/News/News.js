import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import "./news.css";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "275px",
    margin: "25px 25px 25px 0",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const News = (props) => {
  const { id, title, body } = props.post;
  const classes = useStyles();

  const picture = `https://randomuser.me/api/portraits/men/${id}.jpg`;
  const history = useHistory();
  const newsDetails = (id) => {
    history.push(`/news/${id}`);
  };

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <img src={picture} style={{ width: "100%", height: "auto" }} alt="" />
        <CardContent class="news-sizing">
          News Id: {id}
          <h4>News Title: {title}</h4>
          <p>
            <b>Read: </b>
            <p>{body}</p>
          </p>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => newsDetails(id)}
          >
            Show Comment...
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default News;
