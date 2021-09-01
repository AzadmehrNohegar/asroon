import React, { useEffect, useState } from "react";
import LogoComponent from "../components/Create/LogoComponent";
import axios from "axios";
import HeaderComponent from "../components/List/HeaderComponent";
import List from "../components/List/List";
const HomePage = () => {
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
      <LogoComponent />
      <HeaderComponent />
      <List data={users || []} forceReload={forceReload} />
    </main>
  );
};

export default HomePage;
