import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";
//import onNavigate from 
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const loginGoogle= () => {

    signInWithPopup(auth, provider)
        .then((result) => {
            //onNavigate('/home');
            console.log('google sign in');
        })
        .catch((error) => {
            console.log(error);
        }); 
};
export const signOutAccount = () => signOut(auth)