import { firebase, googleAuthProvider, firestore } from '../firebase/firebase';

// LOGIN
export const login = (uid) =>({
  type: 'LOGIN',
  uid
});

// Email & Password
export const startLoginWithEmail = (email, password) => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
      return null
    }).catch((error) => {
      return error.message
    })
  }
}

// Google
export const startLoginWithGoogle = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
      const user = result.user
      return firestore.collection('users').doc(user.uid).set({
        userName: user.displayName,
        signupDate: Date.now()
      })
    }).catch((error) => {
      return error.message
    })
  }
}

// LOGOUT
export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

// SIGN_UP_WITH_EMAIL

export const startSignUpWithEmail = (newUser) => {
  return () => {
    return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then((result) => {
      const user = result.user
      user.updateProfile({
        displayName: newUser.userName
      })

      return firestore.collection('users').doc(user.uid).set({
        userName: newUser.userName,
        signupDate: Date.now()
      })
    }).catch((error) => {
      return error.message
    })
  }
}

