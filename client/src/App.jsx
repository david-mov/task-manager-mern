import * as React from "react";
import AppRouter from './routers/AppRouter'
import AuthProvider from './providers/AuthProvider'

export default function App() {
	return (
		<>
			<AuthProvider>
				<AppRouter/>
			</AuthProvider>
		</>
	)
}