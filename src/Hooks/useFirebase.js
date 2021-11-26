import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    let auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);

                setError("");
                console.log(result.user);
                window.location.href = "/home";



            })
            .catch((error) => {
                setError(error.message);

            });

    };
    const singInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
                window.location.href = "/home";
                console.log(result.user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);

            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {

            }
        });
    }, []);
    const logOut = () => {
        if (localStorage) {
            localStorage.setItem("email", "")
        }
        signOut(auth)
            .then(() => {
                setUser({})
                window.location.href = "/login";
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    /* const handleUserRegister = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(auth);


                // window.location.href = "/login";
            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(error);

            })
            .finally(res => {
                const user = auth.currentUser
                user?.updateProfile({
                    displayName: name
                })
            })

    }; */

    const handleUserRegister = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(auth);
                const user = result.user;
                console.log(user);
                setError('');
                setUserName(result.user, name);
                window.location.href = "/home";
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = (details, name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
                setUser({ ...details, displayName: name })
            })
    }

    const handleUserLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {

                setUser(result.user);
                if (localStorage) {
                    localStorage.setItem("email", result?.user?.email)
                }
                window.location.href = "/home";

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };


    return {
        user, setUser,
        singInWithGoogle,
        singInWithGithub,
        logOut,
        handleUserRegister,
        handleUserLogin
    }
};

export default useFirebase;