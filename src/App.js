import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import {useStateValue} from "./StateProvider";
import {auth} from './firebase';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders';
const promise = loadStripe("pk_test_51LgUzGSGXNlq3MKJIN10Nu4YyM0rbzyt52BZ6csv0xi1NFe5W1O1BTFKtgn5nQD6Kb3RCsE29opchmGNqdnuOSp1006WFU5Tex");


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will run once when the app components loads
    auth.onAuthStateChanged(authUser =>{

      console.log('The user is >> ', authUser);

      if(authUser){
        // this condition tells the that user just logged in and was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        // this tells user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])

  return (
    <Router>
      <div className="App">
      {/* <Header/> */}
      <Routes>
      <Route exact path='/' element={<><Header/><Home/></>} />
      <Route exact path='/login' element={<><Login/></>}/>
      <Route exact path = '/checkout' element={<><Header/><Checkout/></>}/>
      <Route exact path = '/payment' element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>
      <Route exact path = '/order' element = {<><Header/><Orders/></>}/>
      {/* <Route path='/checkout' element={<Header/>, <h1>Welcome to the checkout page</h1>}/> */}
      </Routes>
     </div>
    </Router>
  );
}

export default App;
