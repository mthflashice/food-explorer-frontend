import { Routes, Route } from "react-router-dom";

import {New} from './../pages/New'
import { Edit } from './../pages/Edit';
import { Dish } from './../pages/Dish'
import { Home } from './../pages/Home'
import { Favorites } from '../pages/Favorites';
import { Orders } from '../pages/Orders';

export function AppRoutes ({ $Isadmin }) {
    return(
        <Routes>
            <Route path ='/' element={<Home $Isadmin={$Isadmin}/>}/>
            <Route path ='/new'element={<New $Isadmin={$Isadmin} />} />
            <Route path='/edit/:id' element={<Edit $Isadmin={$Isadmin} />} />
            <Route path='/dish/:id' element={<Dish $Isadmin={$Isadmin}/>} />
            <Route path='/favorites' element={<Favorites $Isadmin={$Isadmin} />} />
            <Route path='/orders' element={<Orders $Isadmin={$Isadmin} />} />
        </Routes>
    );
}