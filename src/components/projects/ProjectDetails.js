import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container project-details section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>This is the project description</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by User</div>
                    <div>15th January, 1PM</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails