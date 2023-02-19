import { BrowserRouter, Switch, Route } from "react-router-dom";

import AccountPage from "../pages/AccountPage";
import UsersPage from "../pages/admin/UsersPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectPage from "../pages/ProjectPage";
import ProjectsPage from "../pages/ProjectsPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/signup" component={SignUpPage}/>
                <Route exact path="/signin" component={SignInPage}/>
                <Route exact path="/account" component={AccountPage}/>
                <Route exact path="/projects" component={ProjectsPage}/>
                <Route exact path="/project/:projectId" component={ProjectPage}/>
                <Route exact path="/admin/users" component={UsersPage}/>

                <Route exact path="*" component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    )
}