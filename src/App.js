//import DisplayMap from "./DisplayMap";
//import PatientAccount from "./PatientAccount";
//import Test from "./Test";
//import ProviderAccount from "./ProviderAccount"
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import PatientAccount from './Pages/PatientAccount'
import ProviderAccount from './Pages/ProviderAccount'
import ContactUs from './Pages/ContactUs'
import LandingPage from './Pages/LandingPage'
import DoctorDetailsPage from './Pages/DoctorDetailsPage'
import ProductDetailsPage from './Pages/ProductDetailsPage'
import UpdatePatient from './Pages/dashboard patient/UpdatePatient'
import PatinetDashboard from './Pages/dashboard patient/PatinetDashboard'
import Payment from './Pages/dashboard patient/Payment'
import Cart from './Pages/dashboard patient/Cart'
import ProviderDashboard from './Pages/dashboard provider/ProviderDashboard'
import Account from './Pages/dashboard provider/Account'
import EditAccount from './Pages/dashboard provider/EditAccount'
import AddServices from './Pages/dashboard provider/AddServices'
import AddProducts from './Pages/dashboard provider/AddProducts'
import NewProduct from './Pages/dashboard provider/NewProduct'
import Products from './Pages/dashboard provider/Products'
import EditProduct from './Pages/dashboard provider/EditProduct'
import NewService from './Pages/dashboard provider/NewService'
import EditServcie from './Pages/dashboard provider/EditService'
import Services from './Pages/dashboard provider/Services'
import Filters from './Pages/Filters'
import AdminDashboard from './Pages/dashboard Admin/AdminDashboard'
import Providers from './Pages/dashboard Admin/Providers'
import EditProviderFromAdmin from './Pages/dashboard Admin/EditProviderFromAdmin'
import Patients from './Pages/dashboard Admin/Patients'
import ServicesManagment from './Pages/dashboard Admin/ServicesManagment'
import Reservation from './Pages/dashboard Admin/Reservations'
import ProductsManagment from './Pages/dashboard Admin/ProductsManagment'
import EditServcieFromAdmin from './Pages/dashboard Admin/EditServiceFromAdmin'
import EditProductFromAdmin from './Pages/dashboard Admin/EditProductFromAdmin'
import SendMessage from './Pages/SendMessage'
import ResetPassword from './Pages/ResetPassword'
import ConfirmCode from './Pages/ConfirmCode'
import Admins from './Pages/dashboard Admin/Admins'
import UpdateAdmin from './Pages/dashboard Admin/UpdateAdmin'
import Reports from './Pages/dashboard Admin/Reports'
import Login2 from './Pages/Login2'
import EditPatientFromAdmin from './Pages/dashboard Admin/EditPatientFromAdmin'

export default function App()
{
  return(
    <div>
     
      <Routes>
        <Route path='/login' element={<Page2 />}/>
        <Route path='/create' element={<Page3 />}/>
        <Route path='/firstPage' element={<Page1/>}/>
        <Route path='/createPatinet' element={<PatientAccount/>}/>
        <Route path='/createProvider' element={<ProviderAccount/>}/>
        <Route path='/logPatient' element={<Login/>}/>
        <Route path='/logProvider' element={<Login2/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/doctorDetails' element={<DoctorDetailsPage/>}/>
        <Route path='/productDetails' element={<ProductDetailsPage/>}/>
        <Route path='/filter' element={<Filters/>}/>
        <Route path='/sendMessage' element={<SendMessage/>}/>
        <Route path='/Reset' element={<ResetPassword/>}/>
        <Route path='/verfication' element={<ConfirmCode/>}/>

        <Route path='/patientDashboard' element={<PatinetDashboard/>}>
            <Route path='/patientDashboard' element={<UpdatePatient/>}/>
            <Route path='updatePatient' element={<UpdatePatient/>}/>
            <Route path='payment' element={<Payment/>}/>
            <Route path='cart' element={<Cart/>}/>
        </Route>

        <Route path='/providerDashboard' element={<ProviderDashboard/>}>
        <Route path='/providerDashboard' element={<Account/>}/>
           <Route path='providerAccount' element={<Account/>}/>
           <Route path='updateProvider' element={<EditAccount/>}/>
           <Route path='addServices' element={<AddServices/>}/>
           <Route path='addProducts' element={<AddProducts/>}/>
           <Route path='newProduct' element={<NewProduct/>}/>
           <Route path='newService' element={<NewService/>}/>
           <Route path='products' element={<Products/>}/>
           <Route path='products/1' element={<EditProduct/>}/>
           <Route path='services' element={<Services/>}/>
           <Route path='services/1' element={<EditServcie/>}/>
        </Route>


        <Route path='/adminDashboard' element={<AdminDashboard/>}>
          <Route path='providers' element={<Providers/>}/>
          <Route path='providers/1' element={<EditProviderFromAdmin/>}/>
          <Route path='patients' element={<Patients/>}/>
          <Route path='patients/1' element={<EditPatientFromAdmin/>}/>
          <Route path='servicesManagment' element={<ServicesManagment/>}/>
          <Route path='servicesManagment/1' element={<EditServcieFromAdmin/>}/>
          <Route path='productsManagment' element={<ProductsManagment/>}/>
          <Route path='productsManagment/1' element={<EditProductFromAdmin/>}/>
          <Route path='reservation' element={<Reservation />}/>
          <Route path='adminManagment' element={<Admins/>}/>
          <Route path='adminManagment/1' element={<UpdateAdmin/>}/>
          <Route path='reports' element={<Reports/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}