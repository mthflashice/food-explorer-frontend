import { Routes, Route } from "react-router-dom";

import {New} from './../pages/New'
import { Dish } from './../pages/Dish'
import { Home } from './../pages/Home'

export function AppRoutes () {
    return(
        <Routes>
            <Route path ='/' element={<Home/>}/>
            <Route path ='/new' element={<New/>}/>
            <Route path="/dish/:id" element={<Dish isAdmin />} />
        </Routes>
    );
}