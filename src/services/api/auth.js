import request from './../request/request';
import { firebase } from './../../firebase';

const signUp = async (data) => {
    await firebase.createUserWithEmailAndPassword({ email: data.email, password: data.password })
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
