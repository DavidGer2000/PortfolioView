import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContextProvider } from './context/userContextProvider'
import ProtectedRoutes from './utils/protectedRoutes';
import Header from './components/header';
import Home from "./pages/home"
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import SignUp from './pages/signUp';
import NotFoundPage from './components/notFoundPage';



function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <ToastContainer position="bottom-left" />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<SignUp />} path='/signup' />
            <Route element={<Login />} path='/login' />
            <Route element={<ProtectedRoutes />}>
              <Route element={<Dashboard />} path='dashboard' />
            </Route>
            <Route element={<NotFoundPage />} path='/*' />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;
