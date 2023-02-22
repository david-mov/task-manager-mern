import * as React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Privatizing from '../components/routing/Privatizing';

import AppLayout from "../components/layout/AppLayout";

import AccountPage from "../pages/AccountPage";
import UsersPage from "../pages/admin/UsersPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectPage from "../pages/ProjectPage";
import ProjectsPage from "../pages/ProjectsPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />} >
            <Route index element={<HomePage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="signin" element={<SignInPage />} />
            <Route path="account" element={<Privatizing element={<AccountPage />} />} />
            <Route path="projects" element={<Privatizing element={<ProjectsPage />} />} />
            <Route path="/project/:projectId" element={<Privatizing element={<ProjectPage />} />} />
            <Route path="/admin/users" element={<Privatizing element={<UsersPage />} />} />

            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
)

export default function AppRouter() {
    return <RouterProvider router={router} />
}