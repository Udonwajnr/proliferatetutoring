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
import TutorsMessages from './pages/tutorDashBoard/TutorsMessages'
import TutorsClasses from './pages/tutorDashBoard/TutorsClasses'
import TutorsProfile from './pages/tutorDashBoard/TutorsProfile'
import TutorsReport from './pages/tutorDashBoard/TutorsReport'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  
  {
    path: "/login",
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
    path: "tutorsignupprofile",
    element: <TutorProfile/>,
  },
  // admin tutor
  {
    path: "tutormessages",
    element: <TutorsMessages/>,
  },

  {
    path: "tutorClasses",
    element: <TutorsClasses/>,
  },
  {
    path: "tutorprofile",
    element: <TutorsProfile/>,
  },

  {
    path: "tutorreport",
    element: <TutorsReport/>,
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
