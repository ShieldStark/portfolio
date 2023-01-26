import Navigation from "./home/navigation/Navigation";
import Foot from "./home/foot/Foot";
import { Outlet } from "react-router-dom";
const RootLayout=()=>{
    return(<>
        <Navigation/>
        <main>
        <Outlet/>
        </main>
        <Foot/>
        </>
    );
};
export default RootLayout;