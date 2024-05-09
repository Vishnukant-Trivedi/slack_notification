// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from "./pages/login";
import { Events } from "./pages/events";
import { Settings } from "./pages/settings";
import "./app.css"

export const App = () => {
    return (
        <Router >
            <Routes>
                <Route path="/settings" element={<Settings />} />
                <Route path="/events" element={<Events />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
};