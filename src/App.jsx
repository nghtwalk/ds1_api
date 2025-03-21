import { BrowserRouter } from "react-router-dom";
import { Cards, Hero } from './components';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
          <Cards />
   
      </div>
    </BrowserRouter>
  );
};

export default App;