import axios from "axios";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try{
    const res = await axios.post(`http://localhost:5000/api/v1/signup`,{
      email,
      password,
      confirmPassword:password
    })
    return createUserWithEmailAndPassword(auth, email, password);
  }
  catch(err){
    console.log(err)
    return err.message;
  }
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  if(user.metadata.creationTime === user.metadata.lastSignInTime)
  {
    try{
      const res = await axios.post(`http://localhost:5000/api/v1/signup`,{
        email:user.email,
        password:"This Email id is Signed with Google",
        confirmPassword:"This Email id is Signed with Google"
      })
    }
    catch(err)
    {
      console.log("Email Already Exist")
    }
  }
  console.log(user);
  // add user to firestore
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};