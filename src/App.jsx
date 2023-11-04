import { createBrowserRouter,RouterProvider,Route,Link,} from 'react-router-dom'
import './App.css'
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
import TutorScreen from './pages/TutorScreen'
import BlogDetails from './pages/BlogDetails'
import PricePage from './pages/PricePage'
import PageError from './pages/PageError'


const router = createBrowserRouter([
  //authentication
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
    path: "becomeatutor",
    element: <BecomeATutor/>,
  },

  
  // admin tutor
  {
    path: "tutor/signupprofile",
    element: <TutorProfile/>,
  },
  {
    path: "tutor/messages",
    element: <TutorsMessages/>,
  },

  {
    path: "tutor/classes",
    element: <TutorsClasses/>,
  },
  {
    path: "tutor/profile",
    element: <TutorsProfile/>,
  },

  {
    path: "tutor/report",
    element: <TutorsReport/>,
  },
  {
    path: "tutor/dashboard",
    element: <DashBoardTutor/>,
  },
  //  tutor ending route

  {
    path: "/",
    element: <HomePage/>
  },

  {
    path: "about",
    element: <AboutUs/>,
  },
  {
    path: "price",
    element: <PricePage/>,
  },
  {
    path: "tutor",
    element: <TutorScreen/>,
  },
  {
    path: "blogdetail",
    element: <BlogDetails/>,
  },
   {
    path: "contact",
    element: <ContactUs/>,
  },
  
  {
    path: "*",
    element: <PageError/>,
  },
]);


function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
