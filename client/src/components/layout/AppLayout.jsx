import * as React from 'react'
import { Outlet } from 'react-router-dom'
import GlobalNavBar from './GlobalNavBar'
import GlobalFooter from './GlobalFooter'

export default function AppLayout() {
  return (
    <div>
      <GlobalNavBar />
      <Outlet />
      <GlobalFooter />
    </div>
  )
}
