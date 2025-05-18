import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import Home from "../pages/Home";

const Paths = () => {
    return (
        <>
           <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path="/" element={<PageLayout/>}>
                           <Route index element={<Home />} />
                        </Route>
                    </Route>
                </Routes>
           </BrowserRouter>
        </>
    );
}

export default Paths;