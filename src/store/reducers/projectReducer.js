const initState = {
    projects: [
        {id:'1',title:'Find the Job',content:'If you don\'t find the job then you gonna die'},
        {id:'2',title:'Buy some champagne and sushi',content:'Only if the job is found'},
        {id:'3',title:'Learn React',content:'If you wanna be the front end developer'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            return state
        case 'CREATE_PROJECT_ERROR':
            return state
        default:
            return state
    }
}

export default projectReducer