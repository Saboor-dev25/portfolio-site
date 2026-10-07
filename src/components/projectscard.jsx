import react from "react";

const ProjectsCard = ({ project}) => {
    
     return <div className="bg-white rounded-lg shadow-md p-4 text-black">

<h1>{project.title}</h1>
<p>{project.description}</p>
<p>{project.technologies.join(", ")}</p>
<p>{project.category}</p>
<p>{project.image}</p>

     </div>
}

export default ProjectsCard