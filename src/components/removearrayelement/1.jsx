import React,{useState} from 'react'

export default function RemoveArrayElementExmple() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
    const [fruits,setFruits] = useState([
        { id: 1, name: "🍎 Apple" },
        { id: 2, name: "🍊 Orange" },
        { id: 3, name: "🍌 Banana" },
        { id: 4, name: "🍇 Grapes" },
    ]);

//    const deleteValues = (val) => {
//     setFruits(prevFruit => {
//         return prevFruit.filter(fruit => fruit !== val)
//     });
//    }

const deleteValues  = (id) => {
    setFruits(oldValues => {
        return oldValues.filter(fruit => fruit.id !== id);
    });
}
    
    return(
        <>
         <ul>
            {fruits.map((val) => {
                return(
                    <li key={val.id}>
                        <span>{val.name}</span>
                        <button onClick={() => deleteValues(val.id)}>Delete</button>
                    </li>
                )
            })}
         </ul>
        </>
    )
}

// function Example(){

//     const employees = [
//         {id: 1, name: 'Alice'},
//         {id: 1, name: 'Alice'},
//         {id: 2, name: 'Bobby Hadz'},
//         {id: 2, name: 'Bobby Hadz'},
//     ]

//     const [state,setState] = useState(employees);

//     const handleClick = () => {
//         const uniqueId = []
//         setState(currentState => {
//             return currentState.filter(element => {
//                 const isDuplicate = uniqueId.includes(element.id)
//                 if(!isDuplicate){
//                     uniqueId.push(element.id)
//                     return true;
//                 }
//                 return false;
//             })
//         });
//     }   
    
//     return(
//         <>
//          <button onClick={handleClick}>Remove duplicate objects</button>
//          {state.map((val,index) => {
//             return(
//                 <div key={index}>{val.name}</div>
//             )
//          })}
//         </>
//     )
// }

// function Example(){
//     const friends = ['vijay','vijay','ronak','vishal','rahul','bhavik']
//     const [state,setState] = useState(friends)

//     const btnRemoveDup= () => {
//         setState(prevState => [...new Set(prevState)])
//     }
    
//     return(
//         <>
//         <button onClick={btnRemoveDup}>Remove Duplicate</button>
//          {state.map((val,index) => {
//             return(
//                 <div key={index}>{val}</div>
//             )
//          })}
//         </>
//     )
// }

// function Example(){
//     const words = ['bobby', 'bobby', 'hadz', 'hadz', 'com']
//     const [state,setState] = useState(words);
//     const withoutDuplicates = [...new Set(words)];

//     console.log(withoutDuplicates)

//     const removeDuplicates= () => {
//         setState(prevState => [...new Set(prevState)])
//     }

//     return(
//         <>
//         <button onClick={removeDuplicates}>Remove duplicates</button>
//          {state.map((word,index) => {
//             return(
//                 <div key={index}>
//                     <h3>{word}</h3>
//                 </div>
//             )
//          })}
//         </>
//     )
// }

// function Example(){
//     const initialState = [
//         {id: 1, name: 'Alice', country: 'Austria'},
//         {id: 2, name: 'Bobby Hadz', country: 'Belgium'},
//         {id: 3, name: 'Carl', country: 'Canada'},
//         {id: 4, name: 'Nitesh', country: 'India'},
//         {id: 5, name: 'Mayur', country: 'Dubai'},
//     ]

//     const [employees,setEmployees] = useState(initialState);

//     const removeSecond = () => {
//         setEmployees(current => current.filter(employee => {
//             return(employee.name === 'Carl') && (employee.country  === 'Canada')
//         }),
//         );
//     };

//     return(
//         <>
//         <button onClick={removeSecond}>Remove second</button>
//          {employees.map(({id,name,country}) => {
//             return(
//                 <div key={id}>
//                     <h3>Name: {name}</h3>
//                     <p>Country: {country}</p>
//                 </div>
//             )
//          })}
//         </>
//     )
// }


// function Example(){
//     const [names, setNames] = useState(["Alice", "Bob"]);

//     const removePrimitiveFromArray= () => {
//         setNames((current) => {
//             current.filter((element) => {
//                 return element !== 'Bob';
//             })
//         })
//     }

   
//     const today = new Date();
//     const date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +  today.getDate();


//     return(
//         <>
//          <button onClick={removePrimitiveFromArray}>Remove string from state array</button>
//          {names.map((element,index) => {
//             return(
//                 <>
//                 <h2 key={index}>{element}</h2>
//                 {date}
//                 </>
//             )
//          })}
//         </>
//     )
// }