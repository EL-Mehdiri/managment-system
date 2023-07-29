import { Clients, AddClientModele, Projects, AddProjectModal } from "../components";


const Home = () => {
    return (
        <>
            <div className="d-flex gap-3 mb-4">
                <AddClientModele />
                <AddProjectModal />
            </div>
            <Projects />
            <hr />
            <Clients />
        </>
    )
}

export default Home