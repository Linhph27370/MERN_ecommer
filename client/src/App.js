import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'
import {Home , Login, Public, Product, DetailProduct ,FAQ , Blogs, Service} from './pages/public'
import path from './ultils/path'
import { getCategories } from './store/asyncActions';
import { useDispatch } from 'react-redux';
import {ToastContainer } from 'react-toastify'
import {AdminLayout, CreateProduct, Dashboard, ManageProduct,ManageUser, MangeOrder} from './pages/admin'
import {MemberLayout,Personal} from './pages/member'
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getCategories())
  },[])
  return (
    <div className="min-h-screen font-main ">
     <Routes>
      <Route path={path.PUBLIC} element={<Public />}>
        <Route path={path.HOME} element={<Home />}/>
        <Route path={path.ALL} element={<Home />}/>
        <Route path={path.DETAIL_PRODUCT__PID__TITLE} element={<DetailProduct />}/>
        <Route path={path.PRODUCTS} element={<Product />}/>
        <Route path={path.FAQs} element={<FAQ />}/>
        <Route path={path.BLOGS} element={<Blogs />}/>
        <Route path={path.SERVICES} element={<Service />}/>
      </Route>

      <Route path={path.LOGIN} element={<Login />}/>

      <Route path={path.ADMIN} element={<AdminLayout />} >
        <Route path={path.DASHBOARD} element={<Dashboard />} />
        <Route path={path.MANGE_PRODUCTS} element={<ManageProduct />} />
        <Route path={path.MANGE_ORDER} element={<MangeOrder />} />
        <Route path={path.MANGE_USER} element={<ManageUser />} />
        <Route path={path.CREATE_PRODUCTS} element={<CreateProduct />} />
      </Route>

      <Route path={path.MEMBER} element={<MemberLayout />} >
        <Route path={path.PERSONAL} element={<Personal />} />

      </Route>

     </Routes>
    </div>
  );
}

export default App;
