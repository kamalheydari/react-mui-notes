import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Create from "./pages/Create";
import Notes from "./pages/Notes";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact={true} component={Notes} />
            <Route path="/create" component={Create} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
