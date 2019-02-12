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
            console.log('created project', action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.error)
            return state
        default:
            return state
    }
}

export default projectReducer