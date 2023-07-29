import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS } from "../queries/ProjectQueries";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutaion";


const DeleteProject = ({ projectId }) => {
    const navigate = useNavigate();

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: GET_PROJECTS }],
    });

    return (
        <div className="d-flex mt-5 ms-auto">
            <button className="btn btn-danger m2" onClick={deleteProject}>
                <FaTrash />
                Delete project
            </button>
        </div>
    )
}

export default DeleteProject