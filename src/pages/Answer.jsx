import React ,{ useState,useEffect,useRef }from "react";
import { Button, Checkbox,Radio,Input,Modal } from "antd";
import CountDown from "../components/CountDowm";
import data from '../mock.json'
import Field from "../global";
const { TextArea } = Input;

export default function Answer() {
  const [initData, setInitData] = useState();
  const [num, setNum] = useState(0);
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
  const countDownRef = useRef();

  return (
    <div>
      <div>
      <CountDown   key={num} ref={countDownRef}/>
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
      </div>
      <Button type="primary" style={{ borderRadius: "15px" }} 
      disabled={num === 9}
      onClick={() => {
        setNum(num + 1)}}>
        下一题
      </Button>
      <Button type="primary" style={{ borderRadius: "15px"}}
      onClick={()=>{
        Modal.confirm({ content: (
          <>
            <div>正确答案是：{initData && initData[num].true}</div>
          </>
        ),})
      }}>
        查看答案
      </Button>
    </div>
  );
}
