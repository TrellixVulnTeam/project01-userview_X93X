import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ItrForm from '../components/itr-component/ItrForm'
import ItrHome from '../components/itr-component/ItrHome'
import ActivateClient from '../components/itr-component/ActivateClient'
import ActivateItr from '../components/itr-component/ActivateItr'
import ItrGroup from '../components/itr-component/ItrGroup'
import ItrPage from '../pages/ItrPage'
import AllItr from '../components/itr-component/AllItr'
import GstHome from '../components/gst-components/GstHome'
import GstForm from '../components/gst-components/GstForm'
import GstTrack from '../components/gst-components/GstTrack'
import GstEasyBill from '../components/gst-components/GstEasyBill'
import GstEasyBillView from '../components/gst-components/GstEasyBillView'
import GstViewAll from '../components/gst-components/GstViewAll'
import PurchaseCoupon from '../components/other-product-component/PurchaseCoupon'
import OtherHome from '../components/other-product-component/OtherHome'
import DraftOrder from '../components/other-product-component/DraftOrder'
import AllCoupon from '../components/other-product-component/AllCoupon'
import Login from '../components/auth-components/Login'
import ItrFormNext from '../components/itr-component/ItrFormNext'
import BranchHome from '../pages/BranchHome'
import RechargeAccount from '../components/recharge/RechargeAccount'
import TdsHome from '../components/tds/TdsHome'
import RegisterTdsClient from '../components/tds/RegisterTdsClient'
import TdsClientList from '../components/tds/TdsClientList'
import ApplyTdsOrder from '../components/tds/ApplyTdsOrder'
import TdsAllOrder from '../components/tds/TdsAllOrder'
import ItrOptions from '../components/itr-component/ItrOptions'
import AddGstReturn from '../components/gst-components/AddGstReturn'
import ViewReturn from '../components/gst-components/ViewReturn'
import SelectGstReturnType from '../components/gst-components/SelectGstReturnType'
import GstReturnSubmitForm from '../components/gst-components/GstReturnSubmitForm'
import UpdateGroup from '../components/itr-component/UpdateGroup'
import UploadFile from '../components/utils/UploadFile'
import RechargeStatus from '../components/recharge/RechargeStatus'
import OrderList from '../components/other-product-component/OrderList'
import ViewGstReturn from '../components/gst-components/ViewGstReturn'
import SupportHome from '../components/support/SupportHome'
import GenerateTicket from '../components/support/GenerateTicket'
import AllTickets from '../components/support/AllTickets'
import OtherProductList from '../components/other-product-component/OtherProductList'



export default function AppRoutes() {
    return (
        <Routes>
            {/* <Route exact path="/" element={<Login />} /> */}
            {/* <Route exact path="/branch/home" element={<BranchHome />} /> */}
            <Route exact path="/" element={<BranchHome />} />
            <Route exact path="/itrpage" element={<ItrPage />} />
            <Route exact path="/apply/itr" element={<ItrForm />} />
            <Route path="/itr/options" element={<ItrOptions />} />
            <Route exact path="/apply/itr/next" element={<ItrFormNext />} />
            <Route path="/itr/home" element={<ItrHome />} />
            <Route path="/itr/activate/client" element={<ActivateClient />} />
            <Route path="/itr/activate/itr/:id" element={<ActivateItr />} />
            <Route path="/itr/addgroup" element={<ItrGroup />} />
            <Route path="/itr/group/view/:id" element={<UpdateGroup />} />
            <Route path="/itr/all" element={<AllItr />} />
            <Route path="/gst/home" element={<GstHome />} />
            <Route path="/gst/apply" element={<GstForm />} />
            <Route path="/gst/track" element={<GstTrack />} />
            <Route path="/gst/add/easybill" element={<GstEasyBill />} />
            <Route path="/gst/view/easybill" element={<GstEasyBillView />} />
            <Route path="/gst/view/viewall" element={<GstViewAll />} />
            <Route path="/gst/return/add" element={<AddGstReturn />} />
            <Route path="/gst/return/type" element={<SelectGstReturnType />} />
            <Route path='/gst/return/submit' element={<GstReturnSubmitForm />} />
            <Route path="/gst/return/view" element={<ViewReturn />} />
            <Route path="/other/product/home" element={<OtherHome />} />
            <Route path="/other/order/list" element={<OrderList />} />
            <Route path="/coupon/purchase" element={<PurchaseCoupon />} />
            <Route path="/other/product/wishlist" element={<DraftOrder />} />
            <Route path="/other/coupon/viewall" element={<AllCoupon />} />
            <Route path='/tds/home' element={<TdsHome />} />
            <Route path="/tds/register/client" element={<RegisterTdsClient />} />
            <Route path="/tds/client/list" element={<TdsClientList />} />
            <Route path="/tds/apply/order/:id" element={<ApplyTdsOrder />} />
            <Route path="/tds/view/all" element={<TdsAllOrder />} />
            <Route path="/upload/test" element={<UploadFile />} />
            <Route path="/recharge/account" element={<RechargeAccount />} />
            <Route path="/recharge/status" element={<RechargeStatus />} />
            <Route path="/itr/activate/:id" element={<ActivateClient />} />
            <Route path="/gstreturn/view/:id" element={<ViewGstReturn />} />
            <Route path="/support/home" element={<SupportHome />} />
            <Route path="/support/ticket/generate" element={<GenerateTicket />} />
            <Route path="/support/ticket/viewall" element={<AllTickets />} />
            <Route path="/other/product/list" element={<OtherProductList />} />
            {/* <Route
                path="*"
                element={<Navigate to="/" replace />}
            /> */}
        </Routes>
    )
}
