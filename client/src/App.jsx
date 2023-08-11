import * as React from 'react'
import AppRouter from './routers/AppRouter'
import { StoreContextProvider } from './context/StoreContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  return (
    <>
      <StoreContextProvider>
        <AppRouter />
      </StoreContextProvider>
      <ToastContainer />
    </>
  )
}
