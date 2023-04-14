import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Detail from './Detail';
import Body from './Body';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    
    <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route exact path="/detail/:id" element={<Detail />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;
