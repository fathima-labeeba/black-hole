
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SimulationLab from './pages/SimulationLab';
import ReportPage from './pages/ReportPage';
import EscapeEntry from './pages/EscapeEntry';
import EscapePlan from './pages/EscapePlan';
import ReturnPage from './pages/ReturnPage';
import './index.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/simulation" element={<SimulationLab />} />
                <Route path="/report" element={<ReportPage />} />
                <Route path="/escape-entry" element={<EscapeEntry />} />
                <Route path="/escape-plan" element={<EscapePlan />} />
                <Route path="/return" element={<ReturnPage />} />
            </Routes>
        </Router>
    );
}

export default App;
