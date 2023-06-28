import * as React from 'react'
import AppRouter from './routers/AppRouter'
import AuthProvider from './providers/AuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
      <ToastContainer />
    </>
  )
}
