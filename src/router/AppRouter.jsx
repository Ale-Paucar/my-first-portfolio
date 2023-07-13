import { Routes, Route } from "react-router-dom"
import { routesNames } from "../utils/routesNames";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routesNames.home} element={ <Home/> }/>

            <Route path={routesNames.about} element={ <About/> }/>

            <Route path={routesNames.portfolio} element={ <Portfolio/> }/>

            <Route path={routesNames.contact} element={ <Contact/> }/>

        </Routes>
    )
}

export default AppRouter;