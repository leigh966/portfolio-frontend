import { useEffect, useState } from "react";
import Home from "./Home";

async function getProjects(setProjects)
{
    try
    {
        const response = await fetch("http://127.0.0.1:3001/projects");
        if(response.status==200)
        {
            const json = await response.json();
            setProjects(json);
        }
        else
        {
            const text = await response.text();
            console.log(text);
        }
    }
    catch(err)
    {
        console.log(err);
    }
    

}

export default function App()
{
    const [projects, setProjects] = useState([]);
    useEffect(()=>getProjects(setProjects),[]);
    
    return <Home projects={projects}/>
}