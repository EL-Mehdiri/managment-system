import { useQuery } from '@apollo/client';

import { GET_PROJECTS } from '../queries/ProjectQueries';
import Spinner from './Spinner';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { loading, error, data } = useQuery(GET_PROJECTS)
    if (loading) return <Spinner />
    if (error) return error.toString()
    return (
        <>
            {data.projects.length > 0 ? (
                <div className='roe'>
                    {data.projects.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            ) : (<p> No Projects</p>)}


        </>
    )
}

export default Projects
