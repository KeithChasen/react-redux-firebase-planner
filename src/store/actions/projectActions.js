// import {getFirestore} from "redux-firestore/index";
// import {getFirebase} from "react-redux-firebase/index";

export const createProject = project => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to DB

        dispatch({type: 'CREATE_PROJECT', project})
    }
}