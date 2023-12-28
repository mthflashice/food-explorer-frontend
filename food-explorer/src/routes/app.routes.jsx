import { Routes, Route } from "react-router-dom";

import {New} from './../pages/New'
import { Edit } from './../pages/Edit';
import { Dish } from './../pages/Dish'
import { Home } from './../pages/Home'

export function AppRoutes ({ isAdmin }) {
    return(
        <Routes>
            <Route path ='/' element={<Home isAdmin={isAdmin}/>}/>
            <Route path ='/new' element={<New isAmin={isAdmin} />} />
            <Route path='/edit/:id' element={<Edit isAdmin={isAdmin} />} />
            <Route path='/dish/:id' element={<Dish isAdmin={isAdmin}/>} />
        </Routes>
    );
}