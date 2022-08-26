import React ,{ useState,useEffect,}from "react";
import { Button, Checkbox,Radio,Input,Modal,Progress } from "antd";
import data from '../mock.json'
import Field from "../global";
import { useStore } from "../store";
const { TextArea } = Input;

export default function Answer() {
  const [initData, setInitData] = useState();
  const [num, setNum] = useState(0);
  const {numStore,stateStore}=useStore()
  const onChange=(e)=>{
    Field.answerList[num]=e.target.value;
  }
  const onCheckboxChange = (checkedValues) => {
    Field.answerList[num]=checkedValues;
  };
  useEffect(() => {
    const getInitData = () => {
      setInitData(data.data.data);
    };
    getInitData();
  }, []);
  const [percent, setPercent] = useState(0);
  const [x,setX]=useState(numStore.num)
  useEffect(()=>{
    let timer=null
   if (x>0) {
    timer = setTimeout(()=>{
      setPercent(percent+(100/numStore.num))
      setX((x)=>x-1)
    },1000)
   }
   if (x===0) {
    if (stateStore.state) {
      Modal.confirm({ content: (
        <div>正确答案是：{initData && initData[num].true}</div>
    ),})
    }
   }
   return ()=>{ 
    clearTimeout(timer)
  }
  },[x,percent,initData,num,numStore.num,stateStore.state])

  useEffect(()=>{
    setX(numStore.num)
  },[numStore.num])
  
  return (
    <div>
      <div>
      {/* 题目 */}
     {initData ? <div>{initData[num].question}</div>:null}
    {/* 内容 */}
      {(initData && initData[num].type==='single')?(
      <ul><Radio.Group  onChange={onChange}   defaultValue={Field.answerList[num]}>
     {initData[num].answer.map((item,index)=>
     <li key={index} >
    <Radio onChange={onChange} value={item}> {["A", "B", "C", "D"][index]}:{item}</Radio>
      </li> )}
    </Radio.Group></ul>
        ):(initData && initData[num].type==='fill')? (
        <div>
        <TextArea
        placeholder="input here"
        className="custom"
      /></div>
        ):(initData && initData[num].type==='double')?(
        <ul> <Checkbox.Group 
        className="check-box" 
        onChange={onCheckboxChange}
        >
          {initData[num].answer.map((item, index) => (
           <li key={index} > <Checkbox className="check-box-item" value={item}>
              {["A", "B", "C", "D"][index]}:{item}
            </Checkbox></li>
          ))
          }
        </Checkbox.Group></ul>
        ):null}
      </div> 
      <div className="clock-wrapper">
      <Progress type="circle" width={80} percent={percent} format={() => `${x} S`} />
      </div>
      <Button type="primary" style={{ borderRadius: "15px" }} 
      disabled={num ===0 }
      onClick={() => {
        setNum(num -1)
        setX(numStore.num)
        setPercent(0)
        }}>
        上一题
      </Button>
      <Button type="primary" style={{ borderRadius: "15px" }} 
      disabled={num === 9}
      onClick={() => {
        setNum(num + 1)
        setX(numStore.num)
        setPercent(0)
        }}>
        下一题
      </Button>
      <Button type="primary" style={{ borderRadius: "15px"}}
      onClick={()=>{
       
        Modal.confirm({ 
          content: (<div>正确答案是：{initData && initData[num].true}</div>),
      }
        )
      }}>
        查看答案
      </Button>
    </div>
  );
}
