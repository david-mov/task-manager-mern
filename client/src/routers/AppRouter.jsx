import * as React from 'react';
import { Routes, Route } from "react-router-dom";

import Navigation from "../components/Navigation";

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
        <>
            <Navigation />

            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route exact path="/signup" element={<SignUpPage />}/>
                <Route exact path="/signin" element={<SignInPage />}/>
                <Route exact path="/account" element={<AccountPage />}/>
                <Route exact path="/projects" element={<ProjectsPage />}/>
                <Route exact path="/project/:projectId" element={<ProjectPage />}/>
                <Route exact path="/admin/users" element={<UsersPage />}/>

                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
        </>
    )
}