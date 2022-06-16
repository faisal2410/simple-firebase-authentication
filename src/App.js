import './App.css';
import app from "./firebase.init"
import {getAuth,GoogleAuthProvider, signInWithPopup, signOut,GithubAuthProvider} from "firebase/auth";
import { useState } from 'react';

const auth =getAuth(app);
function App() {
  const [user,setUser]=useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn=()=>{
   signInWithPopup(auth,googleProvider)
   .then(result=>{    
    const user=result.user;
    setUser(user);
    console.log(user);
   })
   .catch(error=>{
    console.log(error)
   })

  }
  const handleGithubSignIn=()=>{
    signInWithPopup(auth, githubProvider)
    .then(result=>{
      const user=result.user;
      setUser(user);
      console.log(user)
    })
    .catch(error=>console.log(error))

  }
  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
      setUser({})
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <div className="App">
   { 
    user.uid ? <button onClick={handleSignOut}>Sign Out</button>:
    <>
    <button onClick={handleGoogleSignIn}>Google Sign in</button>
    <button onClick={handleGithubSignIn}>Github Signin</button>
    </>
   
    }
    <h2>Name:{user.displayName}</h2>
    <p>Email : {user.email}</p>
    <img src={user.photoURL} alt={user.name}/>
    </div>
  );
}

export default App;
