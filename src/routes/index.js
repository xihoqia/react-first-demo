import Answer from "../pages/Answer";

import Home from '../pages/Home'

import Setting from "../pages/Setting";

import { Navigate } from "react-router-dom";

const newArr=[
    {path:'/home',element:<Home/> },
    {path:'/answer',element:<Answer e={0}/> },
    {path:'/setting',element:<Setting/> },
    {path:'/', element:<Navigate to='/Home'/>}
]

export default  newArr