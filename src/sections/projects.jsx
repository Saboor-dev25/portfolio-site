import React from "react";
import ProjectsCard from "@/components/projectscard";
import projects from "@/data/projects";

const ProjectsScreen = () => {
    return(
        <div>
            {
                projects.map( (project) => 
                    <ProjectsCard key={project.id} project={project} />

                )
            }
        </div>
    )
};

export default ProjectsScreen

