import React, { useRef } from 'react'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const emailInput = useRef();
    const passwordInput = useRef();
    const navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault();
        let email = emailInput.current.value;
        let password = passwordInput.current.value;
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            sessionStorage.setItem('token', userCredential.user?.accessToken);
            sessionStorage.setItem('user_id', userCredential.user?.uid);
            navigate('/profile');
        } catch (error) {
            console.error("Login error:", error.message);
        }
    }

    return (
        <div className='flex w-full h-full justify-center items-center'>
            <form onSubmit={login} className='w-[400px] p-3 rounded-2xl flex flex-col gap-3 bg-indigo-500'>
                <input ref={emailInput} type="text" placeholder='Email' />
                <input ref={passwordInput} type="text" placeholder='Password' />
                <button type='submit'>Login</button>
            </form>
        </div>

    )
}
