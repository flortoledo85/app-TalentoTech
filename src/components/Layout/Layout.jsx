import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Navbar } from "./Navbar";
import Footer from "./Footer";


export function Layout(){
    return(
            <div>
                <Header />
                {/* <Navbar /> */}
                <main>
                    <Outlet></Outlet>
                </main>
                <Footer />
            </div>
    );
}