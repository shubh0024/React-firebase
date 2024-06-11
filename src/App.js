import React from 'react'

import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import {app} from "./firebase";
import "./App.css";
import SignupPage from './pages/signup';

const auth=getAuth(app);


function App() {

    const signupUser = () =>{
     createUserWithEmailAndPassword (
        auth,
        "kitkaet0024@gmail.com",
        "piyush@123"
     ).then((value)=> console.log(value));
     };
    
    
  return (
    <div>
      <div className='App1'>
        <h1>Firebase user Authentication</h1>
        <SignupPage></SignupPage>
        <button onClick={signupUser}>Signupuser</button>
      </div>
    </div>
  )
}

export default App;