import './App.css';
import Featured from './Components/Featured/Featured';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HeritageSection from './Components/HeritageSection/HeritageSection';
import Navbar from './Components/Navbar/Navbar';
import StreetwearSection from './Components/StreetwearSection/StreetwearSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HeritageSection />
      <StreetwearSection />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
