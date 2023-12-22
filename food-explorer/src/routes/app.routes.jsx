import { Routes, Route } from "react-router-dom";

import {New} from './../pages/New'
import { Edit } from './../pages/Edit';
import { Dish } from './../pages/Dish'
import { Home } from './../pages/Home'

export function AppRoutes () {
    return(
        <Routes>
            <Route path ='/' element={<Home/>}/>
            <Route path ='/new' element={<New isAmin />} />
            <Route path='/edit/:id' element={<Edit isAdmin />} />
            <Route path='/dish/:id' element={<Dish isAdmin/>} />
        </Routes>
    );
}