import { Outlet } from "react-router-dom";
import Header from "../components/Header";



export default function defaultLayout() {

    return (
        <>
            <header />

            <main className="container">
                <Outlet />
            </main>

            


        </>
    );
}