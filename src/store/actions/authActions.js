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

export const signOut =
    () =>
        (dispatch, getState, {getFirebase}) =>
            getFirebase().auth().signOut().then(() => {
                dispatch({'type': 'SIGNOUT_SUCCESS'})
            })

export const signUp =
        newUser =>
            (dispatch, getState, {getFirebase, getFirestore}) =>
                getFirebase().auth().createUserWithEmailAndPassword(
                    newUser.email,
                    newUser.password
                ).then((response) => {
                    return getFirestore()
                        .collection('users')
                        .doc(response.user.uid)
                        .set({
                            firstName: newUser.firstName,
                            lastName: newUser.lastName,
                        })
                }).then(() => {
                    dispatch({ type: 'SIGNUP_SUCCESS'})
                }).catch(error => {
                    dispatch({ type: 'SIGNUP_ERROR', error})
                })