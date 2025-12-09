import {Routes, Route} from "react-router"

import { Dasboard } from "../pages/Dashboard"

import { AppLayout } from "../components/AppLayout"

import { NotFound } from "../pages/NotFound"
import { Refund } from "../pages/Refund"
export function ManagerRoutes(){
  return(
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route path="/" element={<Dasboard/>}/>
        <Route path="/refund/:id" element={<Refund/>}/>
      </Route>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}