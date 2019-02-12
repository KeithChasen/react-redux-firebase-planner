export const signIn =
        credentials =>
            (dispatch, getState, {getFirebase}) =>
                getFirebase().auth().signInWithEmailAndPassword(
                    credentials.email,
                    credentials.password
                ).then(() => {
                    dispatch({'type': 'LOGIN_SUCCESS'})
                }).catch((error) => {
                    dispatch({'type': 'LOGIN_ERROR', error})
                })