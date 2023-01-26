import Navigation from "./home/navigation/Navigation";
import Foot from "./home/foot/Foot";
import { Outlet } from "react-router-dom";
const RootLayout=()=>{
    return(<>
        <Navigation/>
        <Outlet/>
        <Foot/>
        </>
    );
};
export default RootLayout;