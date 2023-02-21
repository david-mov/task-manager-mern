import * as React from 'react';
import { Routes, Route } from "react-router-dom";

import RequireAuth from '../components/routing/RequireAuth';

import AppLayout from "../components/layout/AppLayout";

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
            <Routes>
                <Route path="/" element={<AppLayout />} >
                    <Route index element={<HomePage />} />
                    <Route path="signup" element={<SignUpPage />} />
                    <Route path="signin" element={<SignInPage />} />
                    <Route path="account" element={<RequireAuth element={<AccountPage />} />} />
                    <Route path="projects" element={<RequireAuth element={<ProjectsPage />} />} />
                    <Route path="/project/:projectId" element={<RequireAuth element={<ProjectPage />} />} />
                    <Route path="/admin/users" element={<RequireAuth element={<UsersPage />} />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    )
}