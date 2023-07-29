import { useState } from "react"
import { FaList, FaUser } from "react-icons/fa"
import { useMutation, useQuery } from "@apollo/client"

import { GET_PROJECTS } from "../queries/ProjectQueries"
import { ADD_PROJECT } from "../mutations/projectMutaion"
import { GET_CLIENTS } from "../queries/clientQueries"



const AddProjectModal = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [clientId, setClientId] = useState('');
    const [status, setStatus] = useState('new');

    const [addProject] = useMutation(ADD_PROJECT, {
        variables: { name, description, clientId, status },
        update(cache, { data: { addProject } }) {
            const { projects } = cache.readQuery({ query: GET_PROJECTS });
            cache.writeQuery({
                query: GET_PROJECTS,
                data: { projects: [...projects, addProject] }
            })
        }
    })


    // Queries and Mutations for fetching clients data
    const { loading, error, data } = useQuery(GET_CLIENTS);



    const onsubmit = (e) => {
        e.preventDefault();
        if (name === '' || description === '' || status === '') {
            return alert('Please fill all fields')
        }
        addProject(name, description, clientId, status)
        setName('')
        setDescription('')
        setStatus('')
    }

    if (loading) return null;
    if (error) return 'Something went wrong'

    return (
        <>
            {!loading && !error && (
                <>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProjectModal">
                        <div className="d-flex align-items-center">
                            <FaList className="icon" />
                            <div>New Project</div>
                        </div>
                    </button>


                    <div className="modal fade" id="addProjectModal" aria-labelledby="addProjectModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="addProjectModalLabel">New Project</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={onsubmit} >
                                        <div className="mb-3">
                                            <label className="form-label">Name:</label>
                                            <input type="text" className="form-control" id="name"
                                                value={name} onChange={(e) => setName(e.target.value)} required></input>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">description:</label>
                                            <textarea className="form-control" id="description"
                                                value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">status:</label>
                                            <select className="form-select" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                                                <option value="new">Not Started</option>
                                                <option value="progress">In Progress</option>
                                                <option value="completed">Completed</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Client</label>
                                            <select id="clientId" className="form-select" value={clientId}
                                                onChange={(e) => setClientId(e.target.value)} required>
                                                <option value="">Select Client</option>
                                                {data.clients.map((client) => (
                                                    <option key={client.id} value={client.id}>{client.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <button className="btn btn-primary" type="submit" data-bs-dismiss="modal">
                                            Submit
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default AddProjectModal