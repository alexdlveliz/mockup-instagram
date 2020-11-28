// React
import React from 'react';

// Libraries
import Faker from 'faker';

function Post(props) {
  return (
    <React.Fragment>
      <div className={props.className}>
        <img src={props.data.profile} alt="profile" />
        <div className="icons-box">
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
          <i className="far fa-paper-plane"></i>
        </div>

        <div className="likes">
          <p>
            <strong>{props.data.userName}</strong> and 100 more liked this post
          </p>
        </div>

        <div className="content">
          <p>{props.data.content}</p>
        </div>

        <div className="comments">
          <h3>Comments</h3>
          <p>
            <strong>{Faker.internet.userName()}</strong>
            {Faker.lorem.paragraph()}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Post;
