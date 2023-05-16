import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './helpers/protectedRoutes';
import AxiosInterceptor from './helpers/axiosInterceptor';
import Header from './containers/Header';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  AxiosInterceptor();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<ProtectedRoutes><Dashboard></Dashboard></ProtectedRoutes>} />
        <Route exact path="/login" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
