import * as React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { roles } from '../helpers/consts/roles'
import { routes } from '../helpers/consts/routes'

import Private from '../components/routing/Private'
import Public from '../components/routing/Public'

import AppLayout from '../components/layout/AppLayout'

import AccountPage from '../pages/AccountPage'
import UsersPage from '../pages/admin/UsersPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import ProjectPage from '../pages/ProjectPage'
import ProjectsPage from '../pages/ProjectsPage'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.home} element={<AppLayout />}>
      <Route index element={<Public element={<HomePage />} />} />
      <Route
        path={routes.signup}
        element={<Public element={<SignUpPage />} />}
      />
      <Route
        path={routes.signin}
        element={<Public element={<SignInPage />} />}
      />
      <Route
        path={routes.account}
        element={<Private element={<AccountPage />} />}
      />
      <Route
        path={routes.projects}
        element={<Private element={<ProjectsPage />} />}
      />
      <Route
        path={routes.project()}
        element={<Private element={<ProjectPage />} />}
      />
      <Route
        path={routes.admin.users}
        element={<Private role={roles.admin} element={<UsersPage />} />}
      />

      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)

export default function AppRouter() {
  return <RouterProvider router={router} />
}
