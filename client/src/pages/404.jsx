import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NoteFound = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <FaExclamationTriangle size={50} className='text-danger' />
            <h1>404</h1>
            <p className='lead'>Sorry, this page does not exist</p>
            <Link to='/' className='btn btn-primary'>Go Back</Link>
        </div>
    )
}

export default NoteFound