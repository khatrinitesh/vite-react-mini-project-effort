import React,{useState,useEffect} from 'react'
import './style.scss';

export default function SearchFilterExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){


  const [arrData, setArrData] = useState([
    {
      "id":1,
      "name":"Ram",
      "rollNo":2,
      "phoneNo":"765656565"
    },
    {
      "id":2,
      "name":"Sham",
      "rollNo":3,
      "phoneNo":"78676767676",

    },
    {
      "id":3,
      "name":"Pari",
      "rollNo":4,
      "phoneNo":"65656656565"
    },
    {
    "id":5,
    "name":"Nikita",
    "rollNo":5,
    "phoneNo":"6565445454"
    },
    {
      "id":1,
      "name":"Ram",
      "rollNo":2,
      "phoneNo":"765656565"
    },
    {
      "id":2,
      "name":"Sham",
      "rollNo":3,
      "phoneNo":"78676767676",

    },
    {
      "id":3,
      "name":"Pari",
      "rollNo":4,
      "phoneNo":"65656656565"
    },
    {
    "id":5,
    "name":"Nikita",
    "rollNo":5,
    "phoneNo":"6565445454"
    },
    {
      "id":1,
      "name":"Ram",
      "rollNo":2,
      "phoneNo":"765656565"
    },
    {
      "id":2,
      "name":"Sham",
      "rollNo":3,
      "phoneNo":"78676767676",

    },
    {
      "id":3,
      "name":"Pari",
      "rollNo":4,
      "phoneNo":"65656656565"
    },
    {
    "id":5,
    "name":"Nikita",
    "rollNo":5,
    "phoneNo":"6565445454"
    }
   ]);

   function onChangeHandle(e){ 
    console.log("e.target.value", e.target.value);
    if(e.target.value == '') {
      window.location.reload(true)
      const tempArr = arrData;
      setArrData(tempArr)
      return
    }
    const searchResult =  arrData.filter(item => item.name.toLowerCase().startsWith(e.target.value.toLowerCase()) || item.phoneNo.toLowerCase().startsWith(e.target.value.toLowerCase()))
    setArrData(searchResult);
  }



  return(
    <>
     <input type="text" onChange={onChangeHandle} style={{marginTop:"50px"}}/>
     <table style={{border:"1px solid #000", marginLeft:"20px"}}>
      <thead>
           <tr style={{border:"1px solid #000"}}>
             <th>Name</th>
             <th>Phone No</th>
             <th>Roll No</th>
           </tr>
           </thead>
           <tbody>
           {arrData.map((item) => {
            return(
              <tr>
               <td style={{border:"1px solid #000"}}>{item.name}</td>
              <td style={{border:"1px solid #000"}}>{item.phoneNo}</td>
              <td style={{border:"1px solid #000"}}>{item.rollNo}</td>
              </tr>
            )
           })}
           </tbody>
    </table>
    </>
  )
}

// const people = [
//     {
//       "guid": "f3e129ca-6618-5b94-a98c-829230a4ed74",
//       "name": "Timothy Fitzgerald",
//       "age": 39,
//       "address": "1962 Upire Heights",
//       "gender": "Male"
//     },
//     {
//       "guid": "3ba68bd9-b352-50dc-864f-388fc630e581",
//       "name": "Lloyd Frank",
//       "age": 35,
//       "address": "1350 Usguf Park",
//       "gender": "Male"
//     },
//     {
//       "guid": "0c87a8e8-244f-5c09-960e-9c33775304a2",
//       "name": "Hilda Moody",
//       "age": 41,
//       "address": "645 Gupi Way",
//       "gender": "Female"
//     },
//     {
//       "guid": "a75de4d4-716d-5ec0-a7f5-92ed318056f5",
//       "name": "Hattie Cook",
//       "age": 41,
//       "address": "1233 Awtul Parkway",
//       "gender": "Male"
//     },
//     {
//       "guid": "0dcd0e0d-a42f-5d99-924d-e8ac50ae808f",
//       "name": "Martha Steele",
//       "age": 41,
//       "address": "648 Jozkep Highway",
//       "gender": "Male"
//     },
//     {
//       "guid": "2212f0f2-dd95-55ee-a730-5d3021320d05",
//       "name": "Roger Norman",
//       "age": 65,
//       "address": "1702 Jefu Parkway",
//       "gender": "Male"
//     },
//     {
//       "guid": "5e087fea-9f7e-5190-a708-ef000e0006c8",
//       "name": "Dennis Cunningham",
//       "age": 30,
//       "address": "1514 Ufeco Highway",
//       "gender": "Female"
//     },
//     {
//       "guid": "4b280f81-391f-5239-99f2-83aa99c3d451",
//       "name": "Jared Barrett",
//       "age": 45,
//       "address": "1834 Kuzma Circle",
//       "gender": "Female"
//     },
//     {
//       "guid": "b4aa53fb-b19e-53bc-9bba-b02173cc9557",
//       "name": "Corey Shaw",
//       "age": 64,
//       "address": "1438 Tozjo Point",
//       "gender": "Female"
//     },
//     {
//       "guid": "00e13d5f-c2dc-5175-bdf1-823201902014",
//       "name": "Mayme Montgomery",
//       "age": 41,
//       "address": "1843 Rejzap Way",
//       "gender": "Male"
//     },
//     {
//       "guid": "2e05b200-f9d4-5a9e-a8eb-0ac0733c67b6",
//       "name": "Albert Rose",
//       "age": 42,
//       "address": "1423 Sius Highway",
//       "gender": "Male"
//     },
//     {
//       "guid": "81b73f59-3e91-582c-b519-ae738797237a",
//       "name": "Keith Todd",
//       "age": 64,
//       "address": "330 Rozo Junction",
//       "gender": "Male"
//     },
//     {
//       "guid": "f3217f03-8a74-56c9-8927-1ce69140186f",
//       "name": "Matthew Colon",
//       "age": 57,
//       "address": "136 Taat Highway",
//       "gender": "Male"
//     },
//     {
//       "guid": "1ef27dda-b804-5bc9-9c84-3685f9f445fd",
//       "name": "Rodney Gordon",
//       "age": 21,
//       "address": "1748 Reodo Ridge",
//       "gender": "Male"
//     },
//     {
//       "guid": "79958b7d-2c2c-5e64-a74c-8f311868c046",
//       "name": "Kevin Wade",
//       "age": 45,
//       "address": "832 Vaob Pike",
//       "gender": "Female"
//     },
//     {
//       "guid": "84695e6c-1cf3-5efc-b922-9226d2d82db1",
//       "name": "Maude Fernandez",
//       "age": 37,
//       "address": "1484 Udfuf Court",
//       "gender": "Female"
//     },
//     {
//       "guid": "ea043510-bdb6-5b8b-baff-5b764ec3a42e",
//       "name": "Lizzie Baldwin",
//       "age": 49,
//       "address": "1827 Fowu Loop",
//       "gender": "Male"
//     },
//     {
//       "guid": "2d63a7f6-e80e-5b96-8ddc-0386bdd23951",
//       "name": "Chris Walters",
//       "age": 55,
//       "address": "1559 Rohur View",
//       "gender": "Female"
//     },
//     {
//       "guid": "ddf6edcb-aeb6-58af-8c61-e1dccc7a0367",
//       "name": "Ricky Harrison",
//       "age": 42,
//       "address": "617 Alme Court",
//       "gender": "Female"
//     },
//     {
//       "guid": "97791fa6-039c-598a-9ce7-283785e383c1",
//       "name": "Irene Thornton",
//       "age": 53,
//       "address": "505 Bazu Place",
//       "gender": "Female"
//     },
//     {
//       "guid": "dfee1c44-9d0d-57ca-aa91-4e06c5c1413e",
//       "name": "Alta Watkins",
//       "age": 62,
//       "address": "1897 Jouhu Circle",
//       "gender": "Male"
//     },
//     {
//       "guid": "db3d6217-8ebb-564b-99a9-dde23afd1993",
//       "name": "Christopher Graham",
//       "age": 21,
//       "address": "372 Omoedu Glen",
//       "gender": "Female"
//     },
//     {
//       "guid": "874b32fd-dc7e-5b13-8a78-142d0b16e56a",
//       "name": "Leo Wilkins",
//       "age": 64,
//       "address": "1266 Ociba Path",
//       "gender": "Male"
//     },
//     {
//       "guid": "6a2cf602-8916-502d-92c7-91674c830714",
//       "name": "Estelle Wilson",
//       "age": 28,
//       "address": "898 Pekre Key",
//       "gender": "Male"
//     },
//     {
//       "guid": "2dbf1576-984e-50bf-b48c-26973934479b",
//       "name": "Lawrence Welch",
//       "age": 47,
//       "address": "187 Rigis Highway",
//       "gender": "Male"
//     },
//     {
//       "guid": "5ca63166-72b5-5673-b37c-6bda6c9072ce",
//       "name": "Daisy Gray",
//       "age": 61,
//       "address": "546 Tema Drive",
//       "gender": "Male"
//     },
//     {
//       "guid": "1011b6f2-1834-5075-a94e-3974b0be4ee8",
//       "name": "Cynthia Stevens",
//       "age": 60,
//       "address": "917 Jeke Extension",
//       "gender": "Male"
//     },
//     {
//       "guid": "4adba7e3-ef14-510d-a30b-59de3510a198",
//       "name": "Clarence Robinson",
//       "age": 56,
//       "address": "1405 Cuar Heights",
//       "gender": "Male"
//     },
//     {
//       "guid": "15b67c4e-977d-52a9-8b25-9c1d1cf67ab2",
//       "name": "Luis Bass",
//       "age": 65,
//       "address": "1512 Baruf Point",
//       "gender": "Female"
//     },
//     {
//       "guid": "0c2d9afe-c719-551e-97c5-85b24b93269f",
//       "name": "Victoria Allison",
//       "age": 38,
//       "address": "315 Izieso Junction",
//       "gender": "Male"
//     },
//     {
//       "guid": "c767190d-70fd-5b7c-8643-c8aa08869957",
//       "name": "Lucille Payne",
//       "age": 64,
//       "address": "36 Vuson Path",
//       "gender": "Female"
//     },
//     {
//       "guid": "7f23ee05-e6eb-5ebf-b97c-07e92c09ed72",
//       "name": "Isaac Valdez",
//       "age": 48,
//       "address": "1089 Uwlir Square",
//       "gender": "Male"
//     },
//     {
//       "guid": "07873a22-746a-5121-a0da-e0bf0f1c0c4d",
//       "name": "Bertie Stevenson",
//       "age": 57,
//       "address": "1893 Gudmov Drive",
//       "gender": "Male"
//     },
//     {
//       "guid": "1e2e41f4-4005-5d8f-b86e-fe559f599f0a",
//       "name": "Cynthia Terry",
//       "age": 61,
//       "address": "1728 Vatni Road",
//       "gender": "Female"
//     },
//     {
//       "guid": "d6f510aa-acd2-5c8b-9c2a-8325d1857e92",
//       "name": "Melvin Carr",
//       "age": 20,
//       "address": "759 Cikret Drive",
//       "gender": "Male"
//     },
//     {
//       "guid": "50f0ea6f-1b43-5bd3-92c7-003eb8dbdeca",
//       "name": "Christopher Mann",
//       "age": 44,
//       "address": "664 Giuco Circle",
//       "gender": "Male"
//     },
//     {
//       "guid": "7cbfceac-c56d-519b-b766-ed228869195d",
//       "name": "Alice Martinez",
//       "age": 49,
//       "address": "231 Jenki Square",
//       "gender": "Male"
//     },
//     {
//       "guid": "43f18459-665e-5333-ab92-0833de6667aa",
//       "name": "Joel Gross",
//       "age": 47,
//       "address": "144 Maad Extension",
//       "gender": "Male"
//     },
//     {
//       "guid": "058f4980-8493-54a2-878b-d907fbc8ee1b",
//       "name": "Lily Mann",
//       "age": 38,
//       "address": "995 Avupod Drive",
//       "gender": "Female"
//     },
//     {
//       "guid": "4ebd4e7b-eca4-5b5a-b218-d7a837887da7",
//       "name": "Norman Evans",
//       "age": 62,
//       "address": "331 Ufeta Ridge",
//       "gender": "Male"
//     },
//     {
//       "guid": "ae27f48f-82bf-5e24-b5e6-4c16ec33a8ab",
//       "name": "Ryan Phillips",
//       "age": 60,
//       "address": "1145 Siza Junction",
//       "gender": "Female"
//     },
//     {
//       "guid": "30413160-7c81-543d-bd13-3934ab203fc3",
//       "name": "Floyd Vega",
//       "age": 38,
//       "address": "1576 Miscap Junction",
//       "gender": "Female"
//     },
//     {
//       "guid": "d23fe59b-6ff8-5b1c-8602-4d9fc5a2f54d",
//       "name": "Roger Floyd",
//       "age": 64,
//       "address": "76 Butwe Road",
//       "gender": "Female"
//     },
//     {
//       "guid": "7e1ba770-a71a-58fa-b8fd-ae1117a5e7c1",
//       "name": "Garrett Bennett",
//       "age": 31,
//       "address": "845 Veka Park",
//       "gender": "Female"
//     },
//     {
//       "guid": "d2daa670-ca07-5245-940f-d00d208143c5",
//       "name": "Norman Willis",
//       "age": 45,
//       "address": "1946 Ekiev Avenue",
//       "gender": "Female"
//     },
//     {
//       "guid": "ada1187a-55c3-5b2e-b9d1-b3a0607c47bb",
//       "name": "Mattie Yates",
//       "age": 55,
//       "address": "40 Pohog Extension",
//       "gender": "Male"
//     },
//     {
//       "guid": "b48dd9ea-f254-5016-b7ef-3ea926fac333",
//       "name": "Adele Delgado",
//       "age": 23,
//       "address": "1052 Radce Lane",
//       "gender": "Male"
//     },
//     {
//       "guid": "6fc0e854-6589-523a-8852-5c1ea93de95d",
//       "name": "Lydia Sutton",
//       "age": 44,
//       "address": "222 Useji Turnpike",
//       "gender": "Male"
//     },
//     {
//       "guid": "c824d4ed-1277-5c71-8edc-b903c6e6a615",
//       "name": "Leon Lewis",
//       "age": 54,
//       "address": "1540 Balnu Center",
//       "gender": "Female"
//     },
//     {
//       "guid": "a6385563-4896-58c0-857f-9cd42dd4578a",
//       "name": "Georgia Watkins",
//       "age": 49,
//       "address": "1071 Pitef Point",
//       "gender": "Female"
//     }
//   ]

//   const arraySearch = (array, keyword) => {
//     const searchTerm = keyword.toLowerCase()
//     return array.filter(value => {
//         return value.name.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
//         value.address.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
//         value.gender.toLowerCase().match(new RegExp(searchTerm, 'g'))
//     })
// }
// function Example(){

//     const [population, setPopulation] = useState(people)
//     const [count, setCount] = useState(people.length)

//     const handleOnChange = async (e) => {
//         let value = e.target.value;
//         if (value.length > 2) {
//         let search = await arraySearch(population, value);
//             setPopulation(search)
//             setCount(search.length)
//         } 
//         else {
//             setPopulation(people)
//             setCount(people.length)
//         }
//     }

//     return(
//         <>
//         <h2>data is {count}</h2>
//          <div className="App">
//                 <div>Count: {count}
//                 <input type="text" name="search" id="search" placeholder="Search Filter" onChange={handleOnChange}/>
//             </div>
            
//             <div name="container">
//                 {population.map(person => (
//                 <div className='card' key={person.guid}>
//                     <p>Name: {person.name}</p>
//                     <p>Age: {person.age}</p>
//                     <p>Gender: {person.gender}</p>
//                     <p>Address: {person.address}</p>
//                 </div>
//                 ))}
//             </div>
//         </div>
//         </>
//     )
// }

// function Example() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);
//   const [q, setQ] = useState("");
//   const [searchParam] = useState(["capital", "name", "numericCode"]);
//   const [filterParam, setFilterParam] = useState(["All"]);

//   useEffect(() => {
//       fetch(
//           "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json"
//       )
//           .then((res) => res.json())
//           .then(
//               (result) => {
//                   setIsLoaded(true);
//                   setItems(result);
//               },
//               (error) => {
//                   setIsLoaded(true);
//                   setError(error);
//               }
//           );
//   }, []);

//   const data = Object.values(items);

//   function search(items) {
//       return items.filter((item) => {
//           if (item.region == filterParam) {
//               return searchParam.some((newItem) => {
//                   return (
//                       item[newItem]
//                           .toString()
//                           .toLowerCase()
//                           .indexOf(q.toLowerCase()) > -1
//                   );
//               });
//           } else if (filterParam == "All") {
//               return searchParam.some((newItem) => {
//                   return (
//                       item[newItem]
//                           .toString()
//                           .toLowerCase()
//                           .indexOf(q.toLowerCase()) > -1
//                   );
//               });
//           }
//       });
//   }

//   if (error) {
//       return (
//           <p>
//               {error.message}, if you get this error, the free API I used
//               might have stopped working, but I created a simple example that
//               demonstrate how this works,{" "}
//               <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
//                   {" "}
//                   check it out{" "}
//               </a>{" "}
//           </p>
//       );
//   } 
//   else if (!isLoaded) {
//       return <>loading...</>;
//   } 
//   else {
//       return (
//           <div className="wrapper">
//               <div className="search-wrapper">
//                   <label htmlFor="search-form">
//                       <input
//                           type="search"
//                           name="search-form"
//                           id="search-form"
//                           className="search-input"
//                           placeholder="Search for..."
//                           value={q}
//                           onChange={(e) => setQ(e.target.value)}
//                       />
//                       <span className="sr-only">Search countries here</span>
//                   </label>

//                   <div className="select">
//                       <select
//                           onChange={(e) => {
//                               setFilterParam(e.target.value);
//                           }}
//                           className="custom-select"
//                           aria-label="Filter Countries By Region"
//                       >
//                           <option value="All">Filter By Region</option>
//                           <option value="Africa">Africa</option>
//                           <option value="Americas">America</option>
//                           <option value="Asia">Asia</option>
//                           <option value="Europe">Europe</option>
//                           <option value="Oceania">Oceania</option>
//                       </select>
//                       <span className="focus"></span>
//                   </div>
//               </div>
//               <ul className="card-grid">
//                   {search(data).map((item) => (
//                       <li>
//                           <article className="card" key={item.alpha3Code}>
//                               <div className="card-image">
//                                   <img  
//                                       src={item.flag.large}
//                                       alt={item.name}
//                                   />
//                               </div>
//                               <div className="card-content">
//                                   <h2 className="card-name">{item.name}</h2>
//                                   <ol className="card-list">
//                                       <li>
//                                           population:{" "}
//                                           <span>{item.population}</span>
//                                       </li>
//                                       <li>
//                                           Region: <span>{item.region}</span>
//                                       </li>
//                                       <li>
//                                           Capital: <span>{item.capital}</span>
//                                       </li>
//                                   </ol>
//                               </div>
//                           </article>
//                       </li>
//                   ))}
//               </ul>
//           </div>
//       );
//   }
// }
// function Example(){
//         const [error, setError] = useState(null);
//         const [isLoaded, setIsLoaded] = useState(false);
//         const [items, setItems] = useState([]);


//         useEffect(() => {
//           fetch("https://jsonplaceholder.typicode.com/users")
//               .then((res) => res.json())
//               .then(
//                   (result) => {
//                       setIsLoaded(true);
//                       setItems(result);
//                   },
//                   // Note: it's important to handle errors here
//                   // instead of a catch() block so that we don't swallow
//                   // exceptions from actual bugs in components.
//                   (error) => {
//                       setIsLoaded(true);
//                       setError(error);
//                   }
//               );
//       }, []);

//  if(error){
//   return(
//     <>{error.message}</>
//   )
//  } else if(!isLoaded){
//   return(
//     <>
//     Loading...</>
//   )
//  }
//  else{
//   return(
//     <>
//     <div className="wrapper">
//           <ul className="card-grid">
//               {items.map((item) => (
//                   <li>
//                       <article className="card" key={item.callingCodes}>
//                           <div className="card-content">
//                               <h2 className="card-name">{item.name}</h2>
//                               <ol className="card-list">
//                                   <li>
//                                   email:{" "}
//                                       <span>{item.email}</span>
//                                   </li>
//                                   <li>
//                                   website: <span>{item.website}</span>
//                                   </li>
//                                   <li>
//                                   Address: <span>{item.address.street}</span>
//                                   </li>
//                                   <li>
//                                   geo: <span>{item.address.geo.lat}</span>
//                                   </li>
//                               </ol>
//                           </div>
//                       </article>
//                   </li>
//               ))}
//           </ul>
//       </div>
//     </>
//   )
//  }
// }

// function Example(){
//     const [searching, setSearching] =  useState('')

//     const DataJson = [{
//         "id": 1,
//         "first_name": "Valentino",
//         "last_name": "Kleiser",
//         "email": "vkleiser0@earthlink.net",
//         "gender": "Non-binary"
//       }, {
//         "id": 2,
//         "first_name": "Burke",
//         "last_name": "Beller",
//         "email": "bbeller1@linkedin.com",
//         "gender": "Bigender"
//       }, {
//         "id": 3,
//         "first_name": "Humbert",
//         "last_name": "Ronci",
//         "email": "hronci2@addthis.com",
//         "gender": "Genderqueer"
//       }, {
//         "id": 4,
//         "first_name": "Kessiah",
//         "last_name": "Eslie",
//         "email": "keslie3@edublogs.org",
//         "gender": "Non-binary"
//       }, {
//         "id": 5,
//         "first_name": "Hillary",
//         "last_name": "Merrydew",
//         "email": "hmerrydew4@examiner.com",
//         "gender": "Male"
//       }, {
//         "id": 6,
//         "first_name": "Elinore",
//         "last_name": "Bricksey",
//         "email": "ebricksey5@toplist.cz",
//         "gender": "Genderqueer"
//       }, {
//         "id": 7,
//         "first_name": "Marybeth",
//         "last_name": "Lanchbery",
//         "email": "mlanchbery6@upenn.edu",
//         "gender": "Genderfluid"
//       }, {
//         "id": 8,
//         "first_name": "Kippar",
//         "last_name": "Guerreiro",
//         "email": "kguerreiro7@marketwatch.com",
//         "gender": "Bigender"
//       }, {
//         "id": 9,
//         "first_name": "Clay",
//         "last_name": "Greenard",
//         "email": "cgreenard8@mac.com",
//         "gender": "Agender"
//       }, {
//         "id": 10,
//         "first_name": "Mair",
//         "last_name": "Ridewood",
//         "email": "mridewood9@comcast.net",
//         "gender": "Non-binary"
//       }]
      
      
//     return(
//         <>
//         <input type='text' value={searching} onChange={(e) => setSearching(e.target.value)}/>
//         <ul>
//         {DataJson.filter((val) => {
//             if(searching === ''){
//                 return val
//             }
//             else if(val.first_name.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
//                 return val
//             }
//         }).map((val,id) => {
//             return(
//                 <li key={id}>
//                     <p>{val.first_name}</p>
//                     <p>{val.last_name}</p>
//                     <p>{val.email}</p>
//                     <p>{val.gender}</p>
//                 </li>
//             )
//         })}
//         </ul>
//         </>
//     )
// }