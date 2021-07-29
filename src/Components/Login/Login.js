import React, { useContext, useState } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from '../../Firebase.config';
import { Context } from '../../App';
import { useLocation, useHistory } from 'react-router-dom';
if (firebaseConfig > 0) {
    firebase.initializeApp(firebaseConfig)
}



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(Context);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/login" } };

    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                setLoggedInUser(result.user);
                handleResponse(true)
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);

                // ...
            });

        const handleResponse = (redirect) => {
            if (redirect) {
                history.replace(from)
            }
        }

    }
    return (
        <div className='d-flex justify-content-center pt-5'>
            <button className='bg-primary text-white' onClick={googleSignIn}>Login With google</button>
        </div>
    );
};

export default Login;