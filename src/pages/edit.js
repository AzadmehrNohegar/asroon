import React, { Fragment, useState, useEffect } from "react";
import CreateForm from "../components/Create/CreateForm";
import LogoComponent from "../components/Create/LogoComponent";
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";
const EditPage = ({ location }) => {
  const history = useHistory();
  const [Credentials, setCredentials] = useState({
    name: "",
    tel: "",
    age: 0,
    email: "",
  });
  const [initialValue, setInitialValue] = useState({
    id: "",
    name: "",
    tel: "",
    age: 0,
    email: "",
  });
  const changeCredentials = (field, content) => {
    setCredentials({ ...Credentials, [field]: content });
  };
  const getUser = async () => {
    await axios
      .get(`/api/users/${location.pathname.substr(6)}`)
      .then(({ data }) =>
        setInitialValue({
          id: data.users.id,
          name: data.users.name,
          tel: data.users.tel,
          age: Number(data.users.age),
          email: data.users.email,
        })
      );
  };
  useEffect(() => {
    getUser();
  }, []);

  const createUser = (e) => {
    e.preventDefault();
    for (const key in Credentials) {
      if (Credentials[key] === "") {
        console.log(key + " is blank. Deleting it");
        delete Credentials[key];
      }
    }
    axios({
      method: "PATCH",
      url: `/api/users/${initialValue.id}`,
      headers: {},
      data: Credentials,
    }).then(history.push("/"));
  };
  console.log(Credentials, initialValue);
  return (
    <Fragment>
      <LogoComponent />
      <CreateForm
        initialValue={initialValue}
        changeCredentials={changeCredentials}
        createUser={createUser}
      />
    </Fragment>
  );
};
export default withRouter(EditPage);
