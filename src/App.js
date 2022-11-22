import './App.css';
import HomeSection from './components/Home';
import NavBar from './components/Navbar';
import MainSection from './components/MainSection';
import ServiceSection from './components/ServiceSection';



function App() {
  return (
    <div className="App">
       <NavBar />
       <HomeSection />
       <ServiceSection />
       <MainSection />
    </div>
  );
}


export default App;
