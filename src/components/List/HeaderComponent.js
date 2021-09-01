import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import List from "./List";
const HeaderComponent = () => {
  const history = useHistory();
  const createNew = () => {
    history.push("/create");
  };
  const serverList = () => {
    history.push("/list");
  };
  return (
    <nav>
      <h3>داده ها</h3>
      <div className="navigation-buttons">
        <button onClick={() => createNew()}>
          ساخت اکانت جدید <span>&#43;</span>
        </button>
        <button onClick={() => serverList()}>دریافت اطلاعات از سرور</button>
      </div>
    </nav>
  );
};

export default HeaderComponent;
