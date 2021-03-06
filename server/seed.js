const fs = require('fs');
const path = require('path');
const faker = require('faker');

function createProfiles(limit = 20) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();

    result.push({
      id: faker.random.uuid(),
      firstName,
      lastName,
      email,
      image: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200`,
    });
  }

  return result;
}

function createPosts(limit = 20) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const userName = faker.internet.userName();
    const content = faker.lorem.paragraph();

    result.push({
      id: faker.random.uuid(),
      userName,
      content,
      postImage: `https://picsum.photos/id/${Math.floor(
        Math.random() * 100
      )}/200`,
      profile: `https://picsum.photos/id/${Math.floor(
        Math.random() * 100
      )}/200`,
    });
  }

  return result;
}

function main() {
  const data = {
    profiles: createProfiles(),
    posts: createPosts(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
