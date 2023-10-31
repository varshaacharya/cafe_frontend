import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Displayreg from './pages/components/Register/Displayreg';
import Login from './pages/components/Login/Login';
import Registration from './pages/components/Login/Registration';
import ProtectedRoutes from './protectedRoutes';
import Dropdown from './pages/components/Dropdown';
import ChangePassword from './pages/components/Login/ChangePassword';
import Sidebar from './pages/components/Sidebar/Sidebar';
import AddCategory from './pages/components/Admin/ManageCategory/AddCategory';
import AddItem from './pages/components/Admin/ManageItem/AddItem';
import ProtectedStudentRoutes from './protectedStudentRoutes';
import StudentDashboard from './pages/components/Student/StudentDashboard';
import AddStudent from './pages/components/Admin/ManageStudent/AddStudent';
import ViewStudent from './pages/components/Admin/ManageStudent/ViewStudent';
import ViewItem from './pages/components/Admin/ManageItem/ViewItem';
import ViewCategory from './pages/components/Admin/ManageCategory/ViewCategory';
import ViewRecharge from './pages/components/Admin/ManageRecharge/ViewRecharge';
import ViewOrders from './pages/components/Admin/ManageOrders/ViewOrders';
import ViewDetailOrder from './pages/components/Admin/ManageOrders/ViewDetailOrder';
import ViewPayment from './pages/components/Admin/ManagePayment/ViewPayment';
import Home from './pages/components/Main/pages/Home';
import Cart from './pages/components/Main/pages/Cart';
import ProductInfo from './pages/components/Main/pages/ProductInfo';
import Feedback from './pages/components/Main/pages/Feedback';
import Payment from './pages/components/Main/pages/Payment';
import Service from './pages/components/Main/pages/Service';
import Checkout from './pages/components/Main/pages/Checkout';
import ProductList from './pages/components/Main/pages/ProductList';


const MainRoutes = () => {
    return (
        <Routes>
          <Route path="/login" element={ <Login />} />
          <Route path="/Registration" element={ <Registration />} /> 
          <Route element={<ProtectedRoutes/>}>
            <Route path="/" element={<Sidebar/>}> 
              <Route path="/AddCategory" element={<AddCategory/>}/>
               <Route path="/AddItem" element={<AddItem/>}/> 
               <Route path="/AddStudent" element={<AddStudent/>}/>
               <Route path="/ViewStudent" element={<ViewStudent/>}/>
               <Route path="/ViewItem" element={<ViewItem/>}/>
               <Route path="/ViewCategory" element={<ViewCategory/>}/>
               <Route path="/ViewRecharge" element={<ViewRecharge/>}/>
               <Route path="/ViewOrders" element={<ViewOrders/>}/>
               <Route path="/ViewDetailOrder" element={<ViewDetailOrder/>}/>
              <Route path="/ViewPayment" element={<ViewPayment/>}/>
              {/* <Route path="/ChangePassword" element={<ChangePassword/>}/> */}
            </Route>
          </Route>
          <Route element={<ProtectedStudentRoutes/>}>
          <Route path="/" element={<StudentDashboard/>}/>
                  <Route path="/CustHome" element={<Home />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/Product" element={<ProductInfo />} />
                  <Route path="/ProductList" element={<ProductList />} />
                  <Route path="/Feedback" element={<Feedback />} />
                  <Route path="/Payment" element={<Payment />} />
                  <Route path="/Service" element={<Service/>}/>
                  <Route path="/Checkout" element={<Checkout/>}/>
        </Route>
          

        </Routes>
    ); 
}

export default MainRoutes;

//8217398138-aksh