import { auth, googleAuthProvider } from "../firebase/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT',
})

export const startLogin = () => {
    return async () => {
        await signInWithPopup(auth, googleAuthProvider);
    };
};

export const startLogout = () => {
    return async () => {
        await signOut(auth);
    };
};
