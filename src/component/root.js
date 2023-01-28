import Navigation from "./Home/navigation/Navigation";
import Foot from "./Home/foot/Foot";
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