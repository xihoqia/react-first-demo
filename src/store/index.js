import React from "react";
import numStore from "./numStore";
import stateStore from './stateStore'

class RootStore{
    constructor(){
        this.numStore=new numStore()
        this.stateStore=new stateStore()
    }
}
const StoreContext=React.createContext(new RootStore())
export const useStore=()=>React.useContext(StoreContext)