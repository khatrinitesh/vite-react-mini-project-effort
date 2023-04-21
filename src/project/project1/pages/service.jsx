import React,{useState,useEffect,useRef, useReducer} from 'react';
import Banner from '../components/banner';

export default function Service() {

  const [user,setUser] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('');
   const [likings, setLikings] = useState("") 
  const [preferences, setPreferences] = useState( { 'cats': false, 'dogs': false, 'pigs': false } ) 

  function togglePreference(animal) { 
    preferences[animal] = !preferences[animal]; 
    // Update animal likings 
    let newLikings = ""; 
    for ( var animal in preferences ) { 
      
      if ( preferences[animal] ) { 
        
        newLikings += animal + " "; 
        
      } 
      
    } 
    setLikings(newLikings); 
  } 

  const fetchData = async () => {
    setLoading(true)
    try{
      const response = await fetch('https://dummyjson.com/products')
      if(!response.ok){
        throw new Error('sorry something went wrong');
      }
      const data = await response.json();
      setUser(data.products);
      setLoading(false);
    }
    catch(error) {
      setError(error)
      setLoading(false)
    }
  }

  const btnRemove = (id) => {
    const finalData = user.filter((val) => val.id !== id)
    setUser(finalData);
  }

  useEffect(() => {
    fetchData();
  },[])

  if(loading){
    return(
      <div>Loading...</div>
    )
  }
  if(error){
    return(
      <div>{error}</div>
    )
  }
  return (
    <div className='content'>
      <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum"/>
      <Example/>
      {/* <ExampleFive onText="You are a cats person" offText="You are not a cats person" togglePreference={togglePreference} animal="cats" /> 
      <ExampleFive onText="You like dogs" offText="You don't like dogs" togglePreference={togglePreference} animal="dogs" /> 
      <ExampleFive onText="Pigs make you happy" offText="Pigs don't make you happy" togglePreference={togglePreference} animal="pigs" />  */}
      <div className="row">
          {user.map((val,index) => {
            return(
              <div className='col-4 mb-3' key={index}>
                <div className='card h-100 p-3 d-flex justify-content-between'>
                  <h3 className='text-primary'>{val.title}</h3>
                  <p className='text-primary'>{val.description}</p>
                  <button onClick={() => btnRemove(val.id)}>Remove</button>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

// function ExampleOne(){
//   const employees = [
//     {id: 1, name: 'Alice', country: 'Canada'},
//     {id: 2, name: 'Bob', country: 'Belgium'},
//     {id: 3, name: 'Carl', country: 'Canada'},
//     {id: 4, name: 'Dean', country: 'Germany'},
//   ];

//   if('nitesh'.length === 6 && 10 > 5){
//     console.log('both are conditions are met');
//   }
//   else{
//     console.log('At least one condition is NOT met');
//   }

//   // const filtered = employees.filter(emp => {
//   //   return emp.country === 'Canada'
//   // });
//   // console.log(filtered);

//   // const filtered2 = employees.filter(emp => {
//   //   return emp.country === 'Canada' && emp.id === 3;
//   // })
//   // console.log(filtered);

//   const employee = employees.find(obj => {
//     return obj.country === 'Canada';
//   });
//   console.log(employee);

  
//   return(
//     <>
//     {employee && (
//       <div>
//         <h3>{employee.name}</h3>
//         <h3>{employee.country}</h3>
//       </div>
//     )}
//       {/* {employee.map((val) => {
//         const {id,name,country} = val;
//         return(
//           <div key={id}>
//             <h3>Name: {name}</h3>
//             <p>Country: {country}</p>
//           </div>
//         )
//       })} */}
//     </>
//   )
// }

// function ExampleTwo(){
//   // Array of all car objects
//   const carList = [
//     {
//       name: "BMW M6",
//       url:
//         "https://mediapool.bmwgroup.com/cache/P9/201411/P90169551/P90169551-the-new-bmw-m6-coup-exterior-12-2014-600px.jpg",
//       release_year: 2020
//     },
//     {
//       name: "VW Polo",
//       url:
//         "https://cdn.euroncap.com/media/30740/volkswagen-polo-359-235.jpg?mode=crop&width=359&height=235",
//       release_year: 2018
//     },
//     {
//       name: "Audi S6",
//       url:
//         "https://www.motortrend.com/uploads/sites/5/2020/03/6-2020-audi-s6.jpg?fit=around%7C875:492.1875",
//       release_year: 2020
//     },
//     {
//       name: "BMW M2",
//       url:
//         "https://imgd.aeplcdn.com/0x0/cw/ec/37092/BMW-M2-Exterior-141054.jpg?wm=0",
//       release_year: 2019
//     },
//     {
//       name: "Audi A3",
//       url: "https://cdn.motor1.com/images/mgl/BEooZ/s3/2021-audi-s3.jpg",
//       release_year: 2019
//     }
//   ];
//   // List of all cars satisfing all the filters
//   const [filteredList, setFilteredList] = useState(carList);
//   // Selected Brand name filter
//   const [selectedBrand, setSelectedBrand] = useState("");
//   // Selected Year filter
//   const [selectedYear, setSelectedYear] = useState();

//   const filterByBrand = (filteredData) => {
//     // Avoid filter for empty string
//     if (!selectedBrand) {
//       return filteredData;
//     }

//     const filteredCars = filteredData.filter(
//       (car) => car.name.split(" ").indexOf(selectedBrand) !== -1
//     );
//     return filteredCars;
//   };
//   const filterByYear = (filteredData) => {
//     // Avoid filter for null value
//     if (!selectedYear) {
//       return filteredData;
//     }

//     const filteredCars = filteredData.filter(
//       (car) => car.release_year === selectedYear
//     );
//     return filteredCars;
//   };

//   // Update seletedBrand state
//   const handleBrandChange = (event) => {
//     setSelectedBrand(event.target.value);
//   };

//   // Toggle seletedYear state
//   const handleYearChange = (event) => {
//     const inputYear = Number(event.target.id);
//     if (inputYear === selectedYear) {
//       setSelectedYear("");
//     } else {
//       setSelectedYear(inputYear);
//     }
//   };

//   useEffect(() => {
//     var filteredData = filterByBrand(carList);
//     filteredData = filterByYear(filteredData);
//     setFilteredList(filteredData);
//   }, [selectedBrand, selectedYear]);

//   return (
//     <div className="App">
//       <div className="brand-filter">
//         <div>Filter by Brand :</div>
//         <select
//           id="brand-input"
//           value={selectedBrand}
//           onChange={handleBrandChange}
//         >
//           <option value="">All</option>
//           <option value="BMW">BMW</option>
//           <option value="VW">VW</option>
//           <option value="Audi">Audi</option>
//         </select>
//       </div>
//       <div>Filter by Year</div>
//       <div id="year-options" onClick={handleYearChange}>
//         <div
//           className={selectedYear === 2018 ? "active-option" : "filter-option"}
//           id="2018"
//         >
//           2018
//         </div>
//         <div
//           className={selectedYear === 2019 ? "active-option" : "filter-option"}
//           id="2019"
//         >
//           2019
//         </div>
//         <div
//           className={selectedYear === 2020 ? "active-option" : "filter-option"}
//           id="2020"
//         >
//           2020
//         </div>
//       </div>

//       <div id="car-list">
//         {filteredList.map((item, index) => (
//           <div className="car-item" key={index}>
//             <div className="car-name">{`Name: ${item.name}`}</div>
//             <div className="car-year">{`Year: ${item.release_year}`}</div>
//             <img className="car-image" src={item.url} alt="car-img" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function ExampleThree(){
//   const people = [
//     {
//       name: 'James',
//       age: 31,
//     },
//     {
//       name: 'John',
//       age: 45,
//     },
//     {
//       name: 'Paul',
//       age: 65,
//     },
//     {
//       name: 'Ringo',
//       age: 49,
//     },
//     {
//       name: 'George',
//       age: 34,
//     }
//   ];
//   return(
//     <>
//     {people.filter((val) => val.age < 60).map(filteredPerson => {
//       return(
//         <div><h3>{filteredPerson.name}</h3></div>
//       )
//     })}
//     </>
//   )
// }

// function ExampleFour(){

//   const ref = useRef();


//   const btnHandle = () => {
//     ref.current.focus();
//   }

  
//   useEffect(() => {
//     console.log(
//       "The height of the div is: ", ref.current.offsetHeight
//     );
//   },[])
//   return(
//     <>
//     <input ref={ref} type="text"/>
//     <button onClick={btnHandle}>Click</button></>
//   )
// }

// function ExampleFive(props){

//   const [checked, setChecked] = useState(false); 
//   const checkedText = props.onText; 
//   const uncheckedText = props.offText; 
//   const togglePreference = props.togglePreference; 
//   const animal = props.animal; 

//   const handleChange = () => { 
    
//     setChecked(!checked); togglePreference(animal); 
    
//   }; 
//   return(
//     <div>
//       {checked ? checkedText : uncheckedText}
//     </div>
//   )
// }

// function ExampleSix(){
//   const users = [
//     {id: 1, name: 'John', status: 'active'},
//     {id: 2, name: 'Rusk', status: 'inactive'},
//     {id: 3, name: 'Erlic', status: 'active'},
//     {id: 4, name: 'Sara', status: 'active'},
//     {id: 5, name: 'Kat', status: 'inactive'}
//   ]

//   const filtered  = users.filter((val) => val.status === 'active');
//   const filtered2  = users.filter((val) => val.status === 'inactive');
//   return(
//     <>
//     <h3 className='border-bottom'>active</h3>
//      {filtered.map((val,index) => {
//       return(
//         <div key={index}><p>{index} - {val.name}</p></div>
//       )
//      })}
//      <hr/>
//      <h3 className='border-bottom'>inactive</h3>
//      {filtered2.map((val,index) => {
//       return(
//         <div key={index}><p>{index} - {val.name}</p></div>
//       )
//      })}
//     </>
//   )
// }

// function ExampleSeven(){

//   const initialState = {
//     count:0
//   }

//   function reducer(state,action){
//     switch(action.type){
//       case 'increment' :return{count:state.count+1};
//       case 'decrement':return {count:state.count-1};
//       default: throw new Error();
//     }
//   }
//   const [state,dispatch] = useReducer(reducer,initialState)

//   const btnDec =() => {
//     dispatch({type:'decrement'})
//   }
//   const btnInc =() => {
//     dispatch({type:'increment'})
//   }
//   return(
//     <>
//     Count: {state.count}
//       <button onClick={btnDec}>-</button>
//       <button onClick={btnInc}>+</button>
//     </>
//   )
// }

// Filtering numbers
// function ExampleEight(){
//   let numbers = [64, 84, 22, 32, 83, 65, 51, 26, 23, 56];

//     const [filteredNumbers,setFilteredNumbers] = useState(numbers);


//     const radioHandler = (e) => {
//       const value = e.target.value 
//       if(value === 'even'){
//         setFilteredNumbers(
//           numbers.filter(number => {
//             if(number % 2 === 0){
//               return true
//             }
//             else{
//               return false
//             }
//           })
//         )
//       }
//       else{
//         setFilteredNumbers(
//           numbers.filter(number => {
//             if(number % 2 != 0){
//               return true
//             }
//             else{
//               return false
//             }
//           })
//         )
//       }
//     }
    
//   return(
//     <>
//      <h2>Number filtering</h2>
//      <input type="radio" name="evenOrOdd" id="even" value="even" onChange={radioHandler}/>
//      <label htmlFor="even">Even</label>
//      <input type="radio" name="evenOrOdd" id="odd" value="odd"  onChange={radioHandler}/>
//     <label htmlFor="odd">Odd</label>
//     {filteredNumbers.map(number => {
//       return <li key={number}>{number}</li>
//     })}
//     </>
//   )
// }

// Searching a list of names
// function ExampleNine(){
//   let names = [
//     "Shea",
//     "Ewing",
//     "Yang",
//     "Mcintosh",
//     "Castillo",
//     "Cunningham",
//     "Johnston",
//     "Mckay",
//     "Roberson",
//     "Perez",
//     "Dudley",
//     "Wood",
//   ]

//   const [searchValue,setSearchValue] = useState("")

//   const handleSearch = (e) => {
//     setSearchValue(e.target.value)
//   }
//   return(
//     <>
//      <h2>Search filtering</h2>
//      <input type="text" value={searchValue} onChange={handleSearch}/>
//      <ul>
//      {names.filter(name => name.match(new RegExp(searchValue,"i"))).map(name => {
//       return <li key={name}>{name}</li>
//      })}
//      </ul>
//     </>
//   )
// }


// Filtering a dropdown list
// function ExampleTen(){
//   let skills = [
//     "Angular",
//     "CSS",
//     "Graphic Design",
//     "Ember",
//     "HTML",
//     "Information Architecture",
//     "JavaScript",
//     "Mechanical Engineering",
//     "Meteor",
//     "NodeJS",
//     "Plumbing",
//     "Python",
//     "Rails",
//     "React",
//     "Kitchen Repair",
//     "Ruby",
//     "UI Design",
//     "User Experience",
//   ]
//   const [selectedSkill, setSelectedSkill] = useState("")
//   const [dropdownSearchValue, setDropdownSearchValue] = useState("")
//   const [editMode, setEditMode] = useState(false)
//   const dropdownRef = useRef()

//   useEffect(() => {
//     const checkIfClickedOutside = e => {
//       // If the menu is open and the clicked target is not within the menu,
//       // then close the menu
//       if (
//         editMode &&
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target)
//       ) {
//         setEditMode(false)
//       }
//     }
//     document.addEventListener("mousedown", checkIfClickedOutside)
//     return () => {
//       // Cleanup the event listener
//       document.removeEventListener("mousedown", checkIfClickedOutside)
//     }
//   }, [editMode])

//   const skillSelectionHandler = skill => {
//     setSelectedSkill(skill)
//     setDropdownSearchValue("")
//     setEditMode(false)
//   }

//   const filteredSkills = skills.filter(skill =>
//     skill.match(new RegExp(dropdownSearchValue, "i"))
//   )

//   return(
//     <>
//      <h2>Dropdown filtering</h2>
//       {editMode ? (
//         // display the dropdown when the input us focused
//         <div ref={dropdownRef} className="dropdown-wrapper">
//           <input
//             className="dropdown-input"
//             name="dropdown-input"
//             autoFocus
//             onChange={e => setDropdownSearchValue(e.target.value)}
//             value={dropdownSearchValue}
//           />
//           <div className="dropdown-list">
//             <ul>
//               {filteredSkills.map(skill => {
//                 return (
//                   <li key={skill} onClick={() => skillSelectionHandler(skill)}>
//                     {skill}{" "}
//                   </li>
//                 )
//               })}
//               {filteredSkills.length === 0 && (
//                 <li className="no-result">No results found</li>
//               )}
//             </ul>
//           </div>
//         </div>
//       ) : (
//         <input
//           // Grey out the text when "Select Primary skill" input hint is shown
//           className={`dropdown-search ${
//             !(dropdownSearchValue || selectedSkill) && "default"
//           }`}
//           onFocus={() => setEditMode(true)}
//           // Display the selected skill or "Select Primary skill" input hint
//           value={selectedSkill || "Select Primary skill"}
//         />
//       )}
//     </>
//   )
// }


// function ExampleEleven(){

//   const planetList = [
//     { id: "01", name: "Mercury", size: "2440", unit: "km" },
//     { id: "02", name: "Venus", size: "6052", unit: "km" },
//     { id: "03", name: "Earth", size: "6371", unit: "km" },
//     { id: "04", name: "Mars", size: "3390", unit: "km" },
//     { id: "05", name: "Jupiter", size: "69911", unit: "km" },
//     { id: "06", name: "Saturn", size: "58232", unit: "km" },
//     { id: "07", name: "Uranus", size: "25362", unit: "km" },
//     { id: "08", name: "Neptune", size: "24622", unit: "km" },
//   ];

//   const [filteredList,setFilteredList] = useState(planetList);
//   const [searchQuery,setSearchQuery] = useState('');

//   // search value
//   const handleSearch = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     const searchList = planetList.filter((item) => {
//       return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//     });
//     setFilteredList(searchList);
//   }

//   // filter change 
//   const onFilterChange =(e) => {
//     const selectedList = Number(e.target.value);
//     const filteredList = planetList.filter((item) => {
//       return Number(item.size) > selectedList;
//     })
//     setFilteredList(filteredList);
//   }
//   return(
//     <>
//       <h2>Search Filter Array of Objects</h2>
//       <div className="list-wrapper">
//         <div className="filter-container">
//           <input type='text' value={searchQuery} onChange={handleSearch} placeholder='Search'/>
//               <div>
//                 <select name="size" onChange={onFilterChange}>
//                   <option value="">Filter by size</option>
//                   <option value="2000">Greater Than 2000km</option>
//                   <option value="6000">Greater Than 6000km</option>
//                   <option value="10000">Greater Than 10000km</option>
//                   <option value="25000">Greater Than 25000km</option>
//                 </select>
//               </div>
//             </div>
//             {filteredList.map((val,index) => {
//               return(
//                 <div className='card' key={index}>
//                   <p className='num_text'>{val.id}</p>
//                   <div>
//                     <p className='title'>{val.name}</p>
//                     <p className='description'>{val.size} {val.unit}</p>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//     </>
//   )
// }

// function ExampleTwelve(){
//   const people = [
//     { name: "Tim", age: 20, role: "admin" },
//     { name: "Matt", age: 25, role: "user" },
//     { name: "Alex", age: 19, role: "user" }
//   ];

//   const filteredData = people.filter((item) => {
//     return item.age > 20 && item.role === 'user'
//   })
//   return filteredData.map((val) => (
//     <div key={val.name}>{val.name}</div>
//   ))
// }

// function ExampleThirteen(){
//   const arr = [10, 3, 7, 2, 9, 15, 2, 4];

//   const r1 = arr.filter((arr) => arr > 5)
//   return(
//     <>
//     {r1} <br/>
//     </>
//   )
// }

// function Example(){
//   const array = [ 23, 45, 67, 89, 12 ]

//   const largetNum = array.filter((val) => {
//     return val > 60
//   })
//   return(
//     <>
//     <button className="btn btn-primary">Primary</button>
//     <button className="btn btn-success">success</button>
//     <button className="btn btn-warning">warning</button>
//     <button className="btn btn-danger">danger</button>
//     <button className="btn btn-default">default</button>
//     <ul className='list-unstyled'>
//       {largetNum.map((val) => {
//         return(
//           <li>{val}</li>
//         )
//       })}
//       </ul>
//       </>
//   )
// }

// function Example(){
//   const array = [ 23, 45, 67, 89, 12 ]
//   return(
//     <>
//      {array.filter((val) => val > 80).map((val) => {
//       return(
//         <li>{val}</li>
//       )
//      })}
//     </>
//   )
// }

function Example(){
  const tasks = [
    {
      taskId : 1,
      taskName : 'Clean the bathroom',
      taskStatus: 'Complete'
    },
    {
      taskId : 2,
      taskName : 'Learn filtering data in React',
      taskStatus: 'To do'
    },
    {
      taskId : 3,
      taskName : 'Fix the bug on React project',
      taskStatus: 'To do'
    },
    {
      taskId : 4,
      taskName : 'Fix the car',
      taskStatus: 'Complete'
    }
  ]
  return(
    <>
     <ul className='list-unstyed w-100 bg-primary text-white p-5'>
      {tasks.filter((val) => val.taskStatus === 'To do').map((val) => {
        return(
          <li key={val.taskName}>{val.taskId} <br/>{val.taskName} <br/>{val.taskStatus}</li>
        )
      })}
     </ul>
    </>
  )
}