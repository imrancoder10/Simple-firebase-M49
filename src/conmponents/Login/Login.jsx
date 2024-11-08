import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    const providerGoogle = new GoogleAuthProvider();
    const providerGitHub = new GithubAuthProvider();
    const handleGoogleProvider = () => {
        signInWithPopup(auth, providerGoogle)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                console.log('ERROR', error);
                setUser(null);
            })
    }

    const handleGithubProvider = () => {
        signInWithPopup(auth, providerGitHub)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.log('ERROR', error);
                setUser(null);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                alert("Are you want to sign out?");
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            {
                user ? <button onClick={handleSignOut}>Logout</button> : <div>
                    <button onClick={handleGoogleProvider}>Login with Google</button>
                    <button onClick={handleGithubProvider}>Login with Github</button>
                </div>
            }
            {
                user && <div>
                    <h2>User Name: {user.displayName}</h2>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }

        </div>
    );
};

export default Login;