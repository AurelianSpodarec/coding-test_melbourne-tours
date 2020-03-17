import request from './../request/request';
import firebase from './../../firebase';

//TODO: Add error handling and re-factor this a lil bit
const signUp = async (data) => {
    console.log("Sig", firebase)
    const req = firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
    console.log("Sign up", req)
    return req;
}

const signIn = async (data) => {
    const req = firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    console.log("Sign In", req)
    return req;
}

const signOut = async () => {
    const req = firebase.auth().signOut().then(function () {
        console.log("Signed out successfull")
    }).catch(function (error) {
        console.log("Signed out unsuccessful")
    })
}

//TODO: Put into separate file
export function updateUser(name) {
    console.log("update user requst")
    const user = firebase.auth().currentUser
        .updateProfile({
            displayName: name
        });
    return user;
}

//TODO: Put into separate file
export function uploadUserAvatar() {

}

export {
    signUp,
    signIn,
    signOut,
}
