import React,{useState,useEffect,forwardRef} from 'react'
import data from "../../data";

 function CountDown() {
//设置倒计时
const INIT_NUM=data.num
const [count,setCount] = useState(INIT_NUM)
  
  // 倒计时逻辑
  useEffect(()=>{
    let timer = null;
    if(count>0){
      timer = setTimeout(()=>{
        setCount((count)=>count-1)
      },1000)
    }
    return ()=>{ 
      clearTimeout(timer)
    }
  })
  // 重置计数
  useEffect(()=>{
    setCount(INIT_NUM)
  },[INIT_NUM])
  return <h2>{count}</h2>
}

export default  forwardRef(CountDown);