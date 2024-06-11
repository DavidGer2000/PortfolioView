import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContextProvider } from './context/userContextProvider'
import ProtectedRoutes from './utils/protectedRoutes';
import Header from './components/header';
import Home from "./pages/home/home"
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import SignUp from './pages/signUp/signUp';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
import Footer from './components/footer';



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
          <Footer />
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;
