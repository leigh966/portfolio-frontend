import ProjectTab from "./ProjectTab";
import "./Projects.css"
export default function Projects({projects})
{
    let tabs = []
    projects.forEach(element => {
        tabs.push(<ProjectTab data={element}/>);
    });
    return <div className="project-tabs">{tabs}</div>;
}