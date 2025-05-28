import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar    from './Components/NavBar'
import Dashboard from './Components/LandingPage'
import Footer    from './Components/Footer'
import Counsellor from './Components/Counsellor'
import AboutUs    from './Components/About'
import FAQ        from './Components/Support'
import Community  from './Components/Community'
import Profile    from './Components/Profile'


const router = createBrowserRouter(
  [{
    path : "/",
    element : 
    <div>
     <NavBar />
     <Dashboard />
     <Footer /> 
    </div>
   }, 
   {
    path : "/Counsellor",
    element :
    <div>
     <NavBar />
     <Counsellor />
     <Footer /> 
    </div>
   },
   {
    path    : "/Community",
    element :
    <div>
     <NavBar />
     <Community />
     <Footer /> 
    </div> ,
   },
   {
    path    : "/About",
    element : 
    <div>
     <NavBar />
     <AboutUs />
     <Footer /> 
    </div>,
   },
   {
    path    : "/support",
    element : 
    <div>
     <NavBar />
     <FAQ/>
     <Footer /> 
    </div>,
   },
   {
    path : "/profile",
    element : 
    <div>
      <NavBar/>
      <Profile/>
      <Footer/>
    </div>
   }
  ]
)

const App = () => {

  return (
  <div className="min-h-screen flex flex-col">
   <RouterProvider router={router}/>
  </div>


  )
}

export default App


