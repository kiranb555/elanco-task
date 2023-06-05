import { Route, Routes } from 'react-router-dom';
import Applications from './Pages/applications';
import MyApp from './Pages/myApp';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import IndividualResources from './Pages/individualResources';
import Resources from './Pages/resources';
import './App.style.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Applications />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications/:id" element={<MyApp />} />
         <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:resourceName" element={<IndividualResources />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
