import * as React from 'react'
import AppRouter from './routers/AppRouter'
import UserProvider from './providers/UserProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  return (
    <>
      <UserProvider>
        <AppRouter />
      </UserProvider>
      <ToastContainer />
    </>
  )
}
