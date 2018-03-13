import {firebase, googleAuthProvider} from '../firebase/firebase'

const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}
const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}
export const login = (uid) => ({
    type: 'LOGIN',
    uid
})
export const logout = () => ({
    type: 'LOGOUT'
})

export  {startLogin, startLogout};