import React,{useState} from 'react';

export default function PropsDrilling() {
    const [data,setData] = useState('nitesh khatri')
  return (
    <div>
      <ParentComponent>
        <ComponentOne>
            <ComponentTwo data={data}/>
        </ComponentOne>
      </ParentComponent>
    </div>
  )
}

function ParentComponent({children}){
    return(
        <> Parent Component
        {children}
        </>
    )
}
function ComponentOne({children}){
    return(
        <> 1
        {children}
        </>
    )
}
function ComponentTwo({data}){
    return(
        <> 2
        Welcome {data}
        </>
    )
}