import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from '../auth-layout';
import { Layout } from '../layout';
import { HTTPS, HTTPS_GRAPH } from '../../api/https';
import { useSelector } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { COLOR } from '../../../assets/colors';
import ScrollToTop from '../../../scrollToTop';
import { Page404 } from '../../screens/@core/404';

import Landing from '../../screens/landing';
import { ProtectedRoute } from './ProtectedRoute';

const Signin = React.lazy(() => import('../../screens/signin'))
const Signup = React.lazy(() => import('../../screens/signup'))
const Reservations = React.lazy(() => import('../../screens/reservations'))
const Payment = React.lazy(() => import('../../screens/payment'))
const ComingPage = React.lazy(() => import('../../screens/@core/Coming'))
// const BanListing = React.lazy(() => import('../../screens/ban-listing'))


export const App = () => {
    const token = useSelector((state: any) => state.auth.token);

    useEffect(() => {
        if (token) {
            HTTPS.defaults.headers.common['token'] = token;
            HTTPS_GRAPH.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        }
    }, [token])

    return (
        <Suspense fallback={<BarLoader color={COLOR.primary0} width={'100%'} height={6} />}>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Navigate to={"/landing"} replace />} />
                    <Route path='/landing' element={<Landing />} />
                    <Route path='/' element={<AuthLayout />}>
                        <Route path='/signin' element={<Signin />} />
                        <Route path='/signup' element={<Signup />} />
                    </Route>
                    <Route path='/' element={<Layout />}>
                        <Route path='/reservations' element={
                            <ProtectedRoute>
                                <Reservations />
                            </ProtectedRoute>
                        } />
                        <Route path='/calendar' element={<ComingPage />} />
                        <Route path='/marketplace' element={<ComingPage />} />
                        <Route path='/payments' element={
                            <ProtectedRoute>
                                <Payment />
                            </ProtectedRoute>
                        } />
                        <Route path='/invoice' element={<ComingPage />} />
                        <Route path='/employees' element={<ComingPage />} />
                        <Route path='/quickbooks' element={<ComingPage />} />
                        <Route path='/analytics' element={<ComingPage />} />
                        <Route path='/capital' element={<ComingPage />} />
                    </Route>
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}