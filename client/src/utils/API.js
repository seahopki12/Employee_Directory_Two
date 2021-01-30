import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API

export default {
  getUsers: () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.github.com/orgs/github/public_members")
        .then(res => {
          const users = res.data;
          const results = users.map(user => {
            return {
              id: user.id,
              login: user.login,
              url: user.html_url,
              type: user.type
            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    });
  }
};