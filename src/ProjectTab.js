import "./ProjectTab.css"

export default function ProjectTab({data})
{
    return(
        <div className="project-tab">
        <h3 className="project-tab-name">{data.name}</h3>
        <p className="project-tab-description">{data.description}</p>
        <p className="project-tab-update">Last Updated: {data.last_updated.substring(0,10)}</p>
        </div>
    )
}