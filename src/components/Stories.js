// React
import React from 'react';

// Assets
import './styles/Stories.scss';
import api from '../api';

class Stories extends React.Component {
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
      const data = await api.profiles.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return 'Loading';
    }

    if (this.state.error === true) {
      return 'error';
    }

    return (
      <React.Fragment>
        <section id="stories-strip">
          <button id="add-story">
            <i className="fas fa-plus"></i>
            Add new Story
          </button>

          <div id="stories">
            {this.state.data.map((profile) => {
              return (
                <div className="card" key={profile.id}>
                  <div className="img-box">
                    <img src={profile.image} alt="profile" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Stories;
