import React from 'react'
import { Input ,Switch,Button} from 'antd';
import { useRef } from 'react';
import data from '../data';
 

export default function Setting() {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };
     const myRef=useRef() 
     const send=()=>{
        data.num=myRef.current.input.value
     }
  return (
    <div>
        <div className='set-content'>
            <div style={{padding:'5px'}}>全局配置</div>
            <hr />
            <div>
                <div style={{textAlign:'center'}}>倒计时设置：<Input ref={myRef} placeholder={data.num}  style={{width:'100px'}}/></div>
                <div style={{textAlign:'center',marginTop:'20px'}}>倒计时自动显示答案<Switch checkedChildren="开" unCheckedChildren="关" defaultChecked onChange={onChange} /></div>
                <Button
                 style={{display:'block', margin:'0 auto',marginTop:'20px'}} 
                 type="primary"
                 onClick={send}
                 >保存</Button>
            </div>
        </div>
    </div>
  )
}
