import { signInWithPopup } from 'firebase/auth';
import { a } from 'framer-motion/client';
import React from 'react';
import GoogleButton from 'react-google-button';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { setUserProperties } from 'firebase/analytics';
import { Setuser } from '../redux/appSlice';

const Login = () => {

const dispatch  = useDispatch()
const signINwithGoogle= async()=>{
    try {
        

        const result = await signInWithPopup(auth,provider)
        console.log(result)
        dispatch(Setuser({
            displayName:result.user.displayName,
            email:result.user.email,
            photoURL:result.user.photoURL
        }))
    } catch (error) {
        console.log(error)
    }}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
        <div className="flex justify-center">
          <GoogleButton onClick={signINwithGoogle} />
        </div>
      </div>
    </div>
  );
};

export default Login;