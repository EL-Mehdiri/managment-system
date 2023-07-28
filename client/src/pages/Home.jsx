import { Clients, AddClientModele, Projects } from "../components";


const Home = () => {
    return (
        <>
            <div className="d-flex gap-3 mb-4">
                <AddClientModele />
            </div>
            <Projects />
            <hr />
            <Clients />
        </>
    )
}

export default Home