import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

const userCredentials = {}

export default function SignInPage() {
    const {signin} = useAuth()

    const location = useLocation()
    const navigate = useNavigate()

    return (
        <div>
            <h1>Sign-in page</h1>
            <button onClick={() => signin(
                    userCredentials, 
                    location.state?.from, 
                    navigate
            )}>
                Sign-in
            </button>
        </div>
    )
}