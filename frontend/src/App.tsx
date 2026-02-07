import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LandingPage from './components/guest/LandingPage';
import HomePage from './components/registered-user/HomePage';
import LoginPage from './components/authentication/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/home",
    Component: HomePage,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
