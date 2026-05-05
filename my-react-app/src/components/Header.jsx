import { Link } from "react-router-dom";

function Header() {


    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid justify-content-start">
                    <Link className="navbar-brand" to="/" >TORNA ALLA HOME</Link>
                </div>
            </nav>
        </>
    )
}

export default Header
