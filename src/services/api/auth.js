import request from './../request/request';
import firebase from './../../firebase';

const signUp = async (data) => {
    console.log("Sig", firebase)
    // const req = await firebase.auth().createUserWithEmailAndPassword({ email: data.email, password: data.password }).then(createdUser => {
    //     createdUser.user
    // })
    const req = firebase.auth().createUserWithEmailAndPassword("admin@gmail.com", "admin123")
    console.log(req)
    return req;
}

const signIn = async () => {

}

const logout = async () => {

}



// const getUsers = async () => {
//     const res = await request('users', 'GET');
//     return await res.json();
// }

export {
    signUp,
    signIn,
    logout
}
