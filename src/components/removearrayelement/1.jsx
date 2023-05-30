import React,{useState} from 'react'

export default function RemoveArrayElementExmple() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
    const [fruits, setFruits] = useState([
        { id: 1, name: "🍎 Apple" },
        { id: 2, name: "🍊 Orange" },
        { id: 3, name: "🍌 Banana" },
        { id: 4, name: "🍇 Grapes" },
      ])

      const deleteByValue = (id) => {
        setFruits(oldValue => {
            return oldValue.filter(fruit => fruit.id !== id)
        })
      }
    return(
        <>
         {fruits.map((val) => {
            return(
                <div key={val.id}>{val.name} - <button onClick={() => deleteByValue(val.id)}>Delete</button></div>
            )
         })}
        </>
    )
}

// class Example extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             favourites: [
//                 { id: 1, label: 'baguettes' },
//                 { id: 2, label: 'bread' },
//                 { id: 3, label: 'potatoes' },
//                 { id: 4, label: 'rice' },
//                 { id: 5, label: 'pasta' },
//                 { id: 6, label: 'chicken' },
//                 { id: 7, label: 'beans' },
//                 { id: 8, label: 'apples' },
//                 { id: 9, label: 'oranges' },
//                 { id: 10, label: 'grapes' },
//                 { id: 11, label: 'biscuits' },
//             ],
//             color: "white",
//             rooms: 4
//         }
//     }

   
//     removeFavourite = (id) => {
//         const removeFav = this.state.favourites.slice();
//         removeFav.splice(id,1)
//         this.setState({
//             favourites:removeFav
//         })
//     }

//     render(){
//         return(
//             <>
//                 {this.state.favourites.map((item,i) => {
//                     return(
//                         <div key={item.id}>
//                             {item.label}
//                             <button onClick={this.removeFavourite.bind(this,i)}>&times;</button>
//                         </div>
//                     )
//                 })}
//                 {this.state.color} = {this.state.rooms}
//             </>
//         )
//     }
// }

// const initialList = [
//     {
//       id: 'a',
//       firstname: 'Robin',
//       lastname: 'Wieruch',
//       year: 1988,
//     },
//     {
//       id: 'b',
//       firstname: 'Dave',
//       lastname: 'Davidds',
//       year: 1990,
//     },
// ];

// function Example(){

//     const [list,setList] = useState(initialList)

//     const handleRemove= (id) => {
//         const newList = list.filter((val) => val.id !== id)
//         setList(newList)
//     }
//     return(
//         <>
//             <List list={list} onRemove={handleRemove}/>
//         </>
//     )
// }

// const List = ({list,onRemove}) => {
//     return(
//         <>
//             <ul>
//                 {list.map((item) => {
//                     return(
//                         <Item key={item.id} item={item} onRemove={onRemove}/>
//                     )
//                 })}
//             </ul>
//         </>
//     )
// }

// const Item = ({item,onRemove}) => {
//     return(
//         <>
//          <li>
//             <span>{item.id}</span>
//             <span>{item.firstname}</span>
//             <span>{item.lastname}</span>
//             <span>{item.year}</span>
//             <button type="button" onClick={() => onRemove(item.id)}>Remove</button>
//         </li>
//         </>
//     )
// }

// function Example(){
//     const [list,setList] = useState(initialList)

//     const handleRemove = (id) => {
//         const newList = list.filter((val) => val.id !== id)
//         setList(newList)
//     }

//     return(
//         <>
//             <List list={list} onRemove={handleRemove}/>
//         </>
//     )
// }

// const List = ({list,onRemove}) => {
//     return(
//         <>
//         <ul>
//          {list.map((item) => {
//             return(
//                 <Item item={item} onRemove={onRemove}/>
//             )
//          })}
//          </ul>
//         </>
//     )
// }

// const Item = ({item,onRemove}) => {
//     return(
//         <>
//          <li>
//             <span>{item.firstname}</span>
//             <span>{item.lastname}</span>
//             <span>{item.year}</span>
//             <button type="button" onClick={() => onRemove(item.id)}>&times;</button>
//          </li>
//         </>
//     )
// }

// function Example(){
//     const [fruits,setFruits] = useState([
//         { id: 1, name: "🍎 Apple" },
//         { id: 2, name: "🍊 Orange" },
//         { id: 3, name: "🍌 Banana" },
//         { id: 4, name: "🍇 Grapes" },
//     ]);

//    const deleteValues = (val) => {
//     setFruits(prevFruit => {
//         return prevFruit.filter(fruit => fruit !== val)
//     });
//    }

// const deleteValues  = (id) => {
//     setFruits(oldValues => {
//         return oldValues.filter(fruit => fruit.id !== id);
//     });
// }
    
//     return(
//         <>
//          <ul>
//             {fruits.map((val) => {
//                 return(
//                     <li key={val.id}>
//                         <span>{val.name}</span>
//                         <button onClick={() => deleteValues(val.id)}>Delete</button>
//                     </li>
//                 )
//             })}
//          </ul>
//         </>
//     )
// }

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