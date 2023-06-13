 
import './App.css';
import {Container} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './commponent/Header';
import Footer from './commponent/Footer';
import HomeScreen from './commponent/screens/HomeScreen';
import Productscren from './commponent/screens/productscren';
function App() {
  return (
     <Router >
      <Header /> 
       <main className="py-3">
          <Container>
            <Routes>
            <Route path="/" element={<HomeScreen />} /> 
            <Route path="/product/:id" element={<Productscren />} />  
            </Routes>
          </Container>
       </main>
      <Footer /> 
 </Router>
  );
}

export default App;
