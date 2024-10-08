import './App.css';
import Navbar from './Component/common/Navbar';
import LandingPage from './Component/LandingPage';
import CareerHistory from './Component/CareerHistory';
import Expertise from './Component/Expertise';
import RecentProjects from './Component/RecentProjects';

function App() {
  return (
    <div className="App">
    <Navbar />
    <LandingPage />
    <CareerHistory />
    <Expertise />
    <RecentProjects />
  </div>
  );
}

export default App;
