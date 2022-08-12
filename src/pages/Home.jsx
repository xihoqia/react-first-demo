import React from 'react'
import{useNavigate} from 'react-router-dom'
export default function Sy() {
  const navigate =useNavigate()  
  return (
    <div  style={{backgroundColor:'#bfa',height:'100%'}}>
     <div className='home-text'>党史知识竞赛</div>
     <button className='home-button' onClick={()=>{navigate('/answer')}} >开始答题</button>
    </div>
  )
}
