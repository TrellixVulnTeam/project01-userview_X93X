import { useEffect, useState } from 'react';
import '../src/assets/css/index'
import AppRoutes from '../src/Routes/index'
import Login from './components/auth-components/Login';
import HocNavigation from './components/Hoc/HocNavigation';
import IncomeFromSalary from './components/itr-component/IncomeFromSalary';
import Footer from './components/utils/Footer';

function App() {

  // const [token, setToken] = useState()
  // useEffect(() => {
  //   try {
  //     let token = JSON.parse(localStorage.getItem('token'))
  //     console.log("token is", token)
  //     setToken(token)
  //   } catch (e) {
  //     console.log(e)
  //   }

  // }, [])
  // let token = JSON.parse(localStorage.getItem('token'))
  // console.log(token)
  // if(token == undefined) 
  //   return (
  //     <Login />
  //   )
  // else 
  //     return (
  //          <div className='App' id='App'>
  //       {/* <IncomeFromSalary /> */}
  //       <HocNavigation />
  //         <AppRoutes />
  //       <Footer />
  //     </div>
  //     )
  // // return (
  // //   <div className='App' id='App'>
  // //     <AppRoutes token={token}/>
  // //   </div>
  // // )
    const [isAuthenticated, setIsAuthenticated] = useState(
      ()=> JSON.parse(localStorage.getItem('token')) || false
    )

    const setAuth =(value) => {
      setIsAuthenticated(value)
    }

    useEffect(() => {
      console.log("auth token value cahnged")
      localStorage.setItem("token", JSON.stringify(isAuthenticated))
    }, [isAuthenticated])
    if(!isAuthenticated) 
      return (
        <Login setAuth={setAuth} />
      )
    else 
      return (
        <div className='App' id='App'>
          {/* <IncomeFromSalary /> */}
          <HocNavigation setAuth={setAuth}/>
          <AppRoutes />
          <Footer />
        </div>
    );
  
}

export default App;
