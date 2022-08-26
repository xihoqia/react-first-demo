import {makeAutoObservable} from 'mobx'

class numStore{
    num=15
    constructor(){
        makeAutoObservable(this)
    }
    setNum=(value)=>{
        this.num=value
    }
}
export default numStore
