// React
import React from 'react';

// Components
import Post from './Post';

// Assets
import './styles/Feed.scss';
import api from '../api';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.posts.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return 'Loading';
    }

    if (this.state.error) {
      return 'Error';
    }
    return (
      <React.Fragment>
        <section id="feed">
          {this.state.data.map((post) => {
            return <Post key={post.id} data={post} className="post" />;
          })}
        </section>
      </React.Fragment>
    );
  }
}

export default Feed;
