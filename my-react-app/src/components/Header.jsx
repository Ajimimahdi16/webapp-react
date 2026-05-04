import { Link } from "react-router-dom";

function Header() {


    return (
        <>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid justify-content-start">
                    <Link class="navbar-brand" to="/" >TORNA ALLA HOME</Link>
                </div>
            </nav>
        </>
    )
}

export default Header
