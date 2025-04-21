import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './UserContext';
import Home from './Components/Home';
import Login from '../src/Components/Login/Login';
import Header from './Components/Header';
import './App.css';
import User from './Components/User/User';
import Cardapio from './Components/Home/Cardapio';
import Footer from './Components/Footer';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="cardapio/*" element={<Cardapio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserStorage>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
