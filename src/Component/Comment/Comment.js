import React from "react";
import "./Comment.css";

const Comment = (props) => {
  const { id, name, email, body } = props.comment;
  const picture = `https://randomuser.me/api/portraits/med/men/${id}.jpg`;
  return (
    <div>
      <div className="comment">
        <div className="img-area">
          <img src={picture} alt="profiel" />
        </div>
        <div className="user-details">
          <h3>Name: {name}</h3>
          <h4>Eamil: {email}</h4>
          <p>comment: {body}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
