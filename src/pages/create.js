import React, { Fragment, useState } from "react";
import CreateForm from "../components/Create/CreateForm";
import LogoComponent from "../components/Create/LogoComponent";
import axios from "axios";
import { useHistory } from "react-router-dom";
const CreatePage = () => {
  const history = useHistory();
  const [Credentials, setCredentials] = useState({
    name: "",
    tel: "",
    age: 0,
    email: "",
  });
  const changeCredentials = (field, content) => {
    setCredentials({ ...Credentials, [field]: content });
  };
  const createUser = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/api/users",
      headers: {},
      data: Credentials,
    }).then(history.push("/"));
  };
  return (
    <Fragment>
      <LogoComponent />
      <CreateForm
        changeCredentials={changeCredentials}
        createUser={createUser}
      />
    </Fragment>
  );
};
export default CreatePage;
