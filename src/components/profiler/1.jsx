import React,{useState,useEffect,Profiler } from 'react';

export default function ProfilerExample() {
  return (
    <>
      <Example/>
    </>
  )
}

const callback = (id, phase, actualDuration, startTime, 
    baseDuration, commitTime, interactions) => {
    console.log(
      "id " + id + 
      " startTime " + startTime + 
      " actualDuration " + actualDuration + 
      " baseDuration " + baseDuration + 
      " commitTime " + commitTime + 
      " phase " + phase + 
      " interactions " + interactions
    );
}

function Example(){

    return(
        <>
         <Profiler id="Name" onRender={callback}>
                <Form labelname="Name " />
                <Profiler id="Number" onRender={callback}>
                    <Form labelname="Number" />
                </Profiler>
            </Profiler>
        </>
    )
}

const Form = (props) => {
    const { labelname, ...rest } = props;
    const [text, setText] = useState("");
  
    return <div>
        <label {...rest}>
            {labelname} :
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
        </label>
    </div>;
};