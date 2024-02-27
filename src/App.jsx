import { Route, Routes } from 'react-router';
import './App.css';
import AvailableBus from './Components/AvailableBus';
import Footer from './Components/Footer';
import MyNavbar from './Components/Navbar';
import BusSelection from './Components/Pages/BusSelection';
import Search from './Components/Search';
import Selectseats from './Components/Selectseats';
import Sidebar from './Components/Sidebar';
import Testimonials from './Components/Testimonials';
import Home from './Components/Pages/Home';
import PassengerInfo from './Components/PassengerInfo';
import PassengerInfoPage from './Components/Pages/PassengerInfoPage';
import PaymentSuccessPage from './Components/Pages/PaymentSuccessPage';
import PaymentCancel from './Components/Paymentcancel';
import PaymentCancelPage from './Components/Pages/PaymentCancelPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/busselection' element={<BusSelection/>}></Route>
        <Route path='/passengerInfoPage' element={<PassengerInfoPage/>}></Route>
        <Route path='/success' element={<PaymentSuccessPage/>}></Route>
        <Route path='/cancel' element={<PaymentCancelPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
