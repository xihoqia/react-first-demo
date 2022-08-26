import {makeAutoObservable} from 'mobx'

class stateStore{
    state=true
    constructor(){
        makeAutoObservable(this)
    }
    setState=()=>{
      this.state=!this.state
    }
}
export default stateStore
