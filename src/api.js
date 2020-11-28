const BASE_URL = 'http://localhost:3001';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  profiles: {
    list() {
      return callApi('/profiles');
    },
    create(profile) {
      return callApi(`/profiles`, {
        method: 'POST',
        body: JSON.stringify(profile),
      });
    },
    read(profileId) {
      return callApi(`/profiles/${profileId}`);
    },
    update(profileId, updates) {
      return callApi(`/profiles/${profileId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(profileId) {
      return callApi(`/profiles/${profileId}`, {
        method: 'DELETE',
      });
    },
  },
  posts: {
    list() {
      return callApi('/posts');
    },
    create(post) {
      return callApi(`/posts`, {
        method: 'POST',
        body: JSON.stringify(post),
      });
    },
    read(postId) {
      return callApi(`/posts/${postId}`);
    },
    update(postId, updates) {
      return callApi(`/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(postId) {
      return callApi(`/posts/${postId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
