import React from "react";

const UserContext = React.createContext({
  user: {},
  users: [],
  sortByIdAsc: () => {},
  sortByIdDesc: () => {},
  sortByLoginAsc: () => {},
  sortByLoginDesc: () => {},
  search: "",
  filterByLogin: () => {}
});

export default UserContext;