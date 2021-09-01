import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePage from "./pages/create";
import EditPage from "./pages/edit";
import HomePage from "./pages/home";
import ServerList from "./pages/serverlist";
const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading Content...</div>}>
          <Route path="/create" exact component={CreatePage} />
          <Route path="/edit/" component={EditPage} />
          <Route path="/" exact component={HomePage} />
          <Route path="/list" component={ServerList} />
        </Suspense>
      </Switch>
    </Router>
  );
};
export default RouterComponent;
