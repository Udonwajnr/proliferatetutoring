import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter,RouterProvider,Route,Link,} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Login from './pages/Login'
import SignUpOptions from './pages/SignUpOptions'
import Register from './pages/Register'
import SignUpTutor from './pages/SignUpTutor'
import TutorProfile from './pages/TutorProfile'
import Verification from './pages/Verification'
import VerifyEmail from './pages/VerifyEmail'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import BecomeATutor from './pages/tutorDashBoard/BecomeATutor'
import DashBoardTutor from './pages/tutorDashBoard/DashBoardTutor'
const router = createBrowserRouter([
  {
    path: "login",
    element: <Login/>
  },
  
  {
    path: "signupoption",
    element: <SignUpOptions/>,
  },
  {
    path: "signuptutor",
    element: <SignUpTutor/>,
  },
  {
    path: "becomeatutor",
    element: <BecomeATutor/>,
  },
  {
    path: "tutorprofile",
    element: <TutorProfile/>,
  },
  {
    path: "tutordashboard",
    element: <DashBoardTutor/>,
  },
  {
    path: "contact",
    element: <ContactUs/>,
  },
  {
    path: "register",
    element: <Register/>,
  },
  {
    path: "verification",
    element: <Verification/>,
  },
  {
    path: "verificationemail",
    element: <VerifyEmail/>,
  },
  {
    path: "",
    element: <HomePage/>,
  },
  {
    path: "about",
    element: <AboutUs/>,
  },
]);


function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
