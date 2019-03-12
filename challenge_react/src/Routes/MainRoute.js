import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../Components/Home";
import SignIn from "../Components/SignIn";
// import NotMatch from "../pages/NotMatch";
import News from "../Components/News";
import Profile from "../Components/Profile";

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/news" component={News} />
            {/* <Route component={NotMatch} />         */}
        </Switch>
    );
};

export default MainRoute;