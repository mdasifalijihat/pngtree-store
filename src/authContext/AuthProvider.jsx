import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../components/firebase/firebase.init";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {

    const [user, setUser] =useState(null);
    const [loading, setLoading ] = useState(true); 
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    // create new user 
    const createUser = (email, password, fullName, profileUrl) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          return updateProfile(userCredential.user, {
              displayName: fullName,
              photoURL: profileUrl
          });
      });
    }

    // login user 
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

     // social login google 
     const googleLogin = () =>{
        setLoading(true); 
        return signInWithPopup(auth, provider); 
    }

    // git login 
    const gitLogin = () =>{
        setLoading(true); 
        return signInWithPopup(auth, gitProvider); 
    }

    // user logout
    const userLogout = () => {
        setLoading(true)
        return signOut(auth);
    }

      // current signed-in user 
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
              setUser(currentUser); 
              setLoading(false)
        })
        return () =>{
            unsubscribe();
        }

    }, [])

    // 
    const updateUserProfile = (name, photoURL) => {
      if (auth.currentUser) {
          return updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: photoURL 
          });
      } else {
          return Promise.reject("No user is signed in");
      }
  };
  



  const userInfo = {
    user,
    loading,
    gitLogin,
    createUser, 
    signInUser, 
    userLogout, 
    googleLogin,
    updateUserProfile, 
    
  };

  return <AuthContext value={userInfo}> {children} </AuthContext>;
};

export default AuthProvider;
