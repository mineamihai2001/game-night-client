import { Outlet } from "react-router-dom";
import Navbar from "./features/navbar/Navbar";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default App;
