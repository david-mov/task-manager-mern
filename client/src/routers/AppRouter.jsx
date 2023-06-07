import * as React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import {roles} from '../helpers/roles'

import Private from '../components/routing/Private';
import Public from '../components/routing/Public';

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
            <Route index element={<Public element={<HomePage />} />} />
            <Route path="signup" element={<Public element={<SignUpPage />} />} />
            <Route path="signin" element={<Public element={<SignInPage />} />} />
            <Route path="account" element={<Private element={<AccountPage />} />} />
            <Route path="projects" element={<Private element={<ProjectsPage />} />} />
            <Route path="/project/:projectId" element={<Private element={<ProjectPage />} />} />
            <Route path="/admin/users" element={<Private role={roles.admin} element={<UsersPage />} />} />

            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
)

export default function AppRouter() {
    return <RouterProvider router={router} />
}