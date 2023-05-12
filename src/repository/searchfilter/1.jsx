import React,{useState,useEffect} from 'react'
import './style.scss';

export default function SearchFilterExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name", "numericCode"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
      fetch(
          "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json"
      )
          .then((res) => res.json())
          .then(
              (result) => {
                  setIsLoaded(true);
                  setItems(result);
              },
              (error) => {
                  setIsLoaded(true);
                  setError(error);
              }
          );
  }, []);

  const data = Object.values(items);

  function search(items) {
      return items.filter((item) => {
          if (item.region == filterParam) {
              return searchParam.some((newItem) => {
                  return (
                      item[newItem]
                          .toString()
                          .toLowerCase()
                          .indexOf(q.toLowerCase()) > -1
                  );
              });
          } else if (filterParam == "All") {
              return searchParam.some((newItem) => {
                  return (
                      item[newItem]
                          .toString()
                          .toLowerCase()
                          .indexOf(q.toLowerCase()) > -1
                  );
              });
          }
      });
  }

  if (error) {
      return (
          <p>
              {error.message}, if you get this error, the free API I used
              might have stopped working, but I created a simple example that
              demonstrate how this works,{" "}
              <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
                  {" "}
                  check it out{" "}
              </a>{" "}
          </p>
      );
  } 
  else if (!isLoaded) {
      return <>loading...</>;
  } 
  else {
      return (
          <div className="wrapper">
              <div className="search-wrapper">
                  <label htmlFor="search-form">
                      <input
                          type="search"
                          name="search-form"
                          id="search-form"
                          className="search-input"
                          placeholder="Search for..."
                          value={q}
                          onChange={(e) => setQ(e.target.value)}
                      />
                      <span className="sr-only">Search countries here</span>
                  </label>

                  <div className="select">
                      <select
                          onChange={(e) => {
                              setFilterParam(e.target.value);
                          }}
                          className="custom-select"
                          aria-label="Filter Countries By Region"
                      >
                          <option value="All">Filter By Region</option>
                          <option value="Africa">Africa</option>
                          <option value="Americas">America</option>
                          <option value="Asia">Asia</option>
                          <option value="Europe">Europe</option>
                          <option value="Oceania">Oceania</option>
                      </select>
                      <span className="focus"></span>
                  </div>
              </div>
              <ul className="card-grid">
                  {search(data).map((item) => (
                      <li>
                          <article className="card" key={item.alpha3Code}>
                              <div className="card-image">
                                  <img  
                                      src={item.flag.large}
                                      alt={item.name}
                                  />
                              </div>
                              <div className="card-content">
                                  <h2 className="card-name">{item.name}</h2>
                                  <ol className="card-list">
                                      <li>
                                          population:{" "}
                                          <span>{item.population}</span>
                                      </li>
                                      <li>
                                          Region: <span>{item.region}</span>
                                      </li>
                                      <li>
                                          Capital: <span>{item.capital}</span>
                                      </li>
                                  </ol>
                              </div>
                          </article>
                      </li>
                  ))}
              </ul>
          </div>
      );
  }
}
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