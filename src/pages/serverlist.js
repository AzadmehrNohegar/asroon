import React, { useEffect, useState } from "react";
import List from "../components/List/List";
import axios from "axios";
const ServerList = () => {
  const [Reload, setReload] = useState(false);
  const forceReload = () => {
    setReload((prevState) => !prevState);
  };
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios
      .get("/api/users")
      .then(({ data }) => setUsers(data.users).then(() => setReload(false)));
  };
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    getUsers();
  }, [Reload]);
  return (
    <main>
      <List data={users || []} forceReload={forceReload} isListed={true} />
    </main>
  );
};

export default ServerList;
