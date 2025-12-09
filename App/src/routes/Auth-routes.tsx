import {Routes, Route} from 'react-router'

import { AuthLayout } from '../components/AuthLayout';
import {Signln} from '../pages/Signln'
import { SingnUp } from '../pages/SingnUp';
import { NotFound } from '../pages/NotFound';

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<Signln />} />
            <Route path="/singnup" element={<SingnUp />} />
            </Route>

            <Route path='*' element={ <NotFound/>}/>
        </Routes>
    );
}