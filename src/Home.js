import ProjectTab from "./ProjectTab";
import "./Home.css"
export default function Home({projects})
{
    let tabs = []
    projects.forEach(element => {
        tabs.push(<ProjectTab data={element}/>);
    });
    return <div className="project-tabs">{tabs}</div>;
}