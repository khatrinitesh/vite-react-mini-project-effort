import { tabsClasses } from '@mui/material';
import React,{createContext,useContext, useEffect, useState} from 'react';
import context from 'react-bootstrap/esm/AccordionContext';
// import styled, { css } from "styled-components";

import "bootstrap/dist/css/bootstrap.css";

export default function ContextExample() {
  return (
    <>
      {/* <MenuContextHook data={data}/> */}
      {/* <MenuContext data={data}/> */}
      <Example/>
    </>
  )
}

function Example(){
  return(
    <>
      <ResultContext/>
    </>
  )
}

function ResultContext(){
  return(
    <>
    <Tabs>
      <Tab index={0} label="Tab 1"/>
      <Tab index={1} label="Tab 2"/>
      <TabContent index={0}>Content for Tab 1</TabContent>
      <TabContent index={1}>Content for Tab 2</TabContent>
    </Tabs></>
  )
}

const TabsContext = createContext();

const Tabs = ({children}) => {
  const [activeTab,setActiveTab] = useState(0)
  return(
    <>
    <TabsContext.Provider value={{activeTab,setActiveTab}}>
      {children}
    </TabsContext.Provider>
    </>
  )
}

// FIRST CHILD COMPONENT
const Tab = ({index,label}) => {
  const {activeTab,setActiveTab} = useContext(TabsContext);

  return(
    <>
      <button className={activeTab === index ? "active btn btn-primary" : "inactive btn btn-primary"} onClick={() => setActiveTab(index)}>{label}</button>
    </>
  )
}

// SECOND CHILD COMPONENT
const TabContent = ({index,children}) => {
  const {activeTab} = useContext(TabsContext);

  return activeTab === index ? <div>{children}</div> : null;
}

// const employeeContext=React.createContext();

// function CustomApp(){

//   const [employee,setEmployee]=useState({
//     Id:101,
//     Name:'Pragim',
//     Type:'Contract',             
//     Location:'Bangalore',
//     Salary:12345, 
//     EmploymentType:'Contract'
//   });
//   return(
//     <>
//       <h2>Welcome to App Component...</h2>
//       <p>
//         <label>Employee Salary : <b>{employee.Salary}</b></label>
//       </p>
//       <employeeContext.Provider value={{data:employee,updateEmployee:setEmployee}}>
//           <Employee></Employee>
//       </employeeContext.Provider>   
//     </>
//   )
// }

// function Employee(){
//   let context=useContext(employeeContext);

//   function changeEmploymentType(){
//     context.updateEmployee({...context.data,EmploymentType:'Permanent'});
//   }
//   return(
//     <div>
//       <h2>Welcome to Employee Component...</h2>
//       <p>
//         <label>Employee ID : <b>{context.data.Id}</b></label>
//       </p>
//       <p>
//         <label>Employee Name : <b>{context.data.Name}</b></label>
//       </p>  
//       <p>
//         <label>Employee Salary : <b>{context.data.Salary}</b></label>
//       </p>    
//       <employeeContext.Consumer>
//         {value=>value.data.EmploymentType==='Permanent'?
//               <Permanent></Permanent>:<Contract></Contract>}
//       </employeeContext.Consumer>
//       <button onClick={changeEmploymentType}>Make Permanent</button>
//       <Salary></Salary>
//     </div>
//   )
// }

// function Salary(){
//   let context=useContext(employeeContext);

//   function updateSalary(){
//     context.updateEmployee({...context.data,Salary:15000});
//   }
//   return(
//     <div>
//       <h2>Welcome to Salary Component...</h2>
//       <p>
//         <label>Employee ID : <b>{context.data.Id}</b></label>
//       </p>
//       <p>
//         <label>Employee Salary : <b>{context.data.Salary}</b></label>
//       </p>
//       <button onClick={updateSalary}>Update</button>
//     </div>
//   );
// }

// function Permanent(){
//   return (
//     <div>
//       <h2>Permanent Component Contents...</h2>
//     </div>
//   );
// }

// function Contract(){
//   return(
//     <div>
//       <h2>Contract Component Contents...</h2>
//     </div>
//   )
// }

// // const EmployeeContext = createContext();

// // function EmpResult(){
// //   const [employee,setEmployee] = useState({
// //     Id:101,
// //     Name:'Nitesh',
// //     Location:'Mumbai',
// //     Salary:12345
// //   });

// //   return(
// //     <>
// //       <h2>Welcome to App Component...</h2>
// //       <EmployeeContext.Provider value={employee}>
// //         <Employee/>
// //       </EmployeeContext.Provider>
// //     </>
// //   )
// // }

// // function Employee(){

// //   let context = useContext(EmployeeContext);
// //   return(
// //     <>
// //      <h2>Welcome to Employee Component...</h2>
// //       <p>
// //         <label>Employee ID : <b>{context.Id}</b></label>
// //       </p>
// //       <p>
// //         <label>Employee Name : <b>{context.Name}</b></label>
// //       </p>
// //       <Location/>
// //       <Salary/>
// //     </>
// //   )
// // }

// // function Salary(){
// //   let context = useContext(EmployeeContext);

// //   return(
// //     <>
// //       <h2>Welcome to Salary Component...</h2>
// //       <p>
// //         <label>Employee ID : <b>{context.Id}</b></label>
// //       </p>
// //       <p>
// //         <label>Employee Salary : <b>{context.Salary}</b></label>
// //       </p>
// //     </>
// //   )
// // }

// // function Location(){
// //   let context = useContext(EmployeeContext)
// //   return(
// //     <>
// //      <h2>Welcome to Location Component...</h2>
// //      <p>
// //       <label>Employee Location: <b>{context.Id}</b></label>
// //      </p>
// //      <p>
// //       <label>Employee Location: <b>{context.Location}</b></label>
// //      </p>
// //     </>
// //   )
// // }



// // export const data = [
// //     {
// //         id: 1,
// //         title: "Message 1",
// //       },
// //       {
// //         id: 2,
// //         title: "Message 2",
// //       },
// //       {
// //         id: 3,
// //         title: "Message 3",
// //       },
// //       {
// //         id: 4,
// //         title: "Message 4",
// //       },
// // ]


// // const MenuContextHook = ({data}) => {
// //     const { clicked, setClicked, points, setPoints } = useContextMenu();

// //   return (
// //     <div>
// //       {data.map((item) => (
// //         <div
// //           onContextMenu={(e) => {
// //             e.preventDefault();
// //             setClicked(true);
// //             setPoints({
// //               x: e.pageX,
// //               y: e.pageY,
// //             });
          
// //           }}
// //         >
// //           <Menu key={item.id} title={item.title} />
// //         </div>
// //       ))}

// //       {clicked && (
// //         <ContextMenu top={points.y} left={points.x}>
// //           <ul>
// //             <li>Edit</li>
// //             <li>Copy</li>
// //             <li>Delete</li>
// //           </ul>
// //         </ContextMenu>
// //       )}
// //     </div>
// //   );
// // }


// // const MenuContext = ({data}) => {
// //     const [clicked, setClicked] = useState(false);
// //     const [points, setPoints] = useState({
// //       x: 0,
// //       y: 0,
// //     });
  
// //     useEffect(() => {
// //       const handleClick = () => setClicked(false);
// //       window.addEventListener("click", handleClick);
// //       return () => {
// //         window.removeEventListener("click", handleClick);
// //       };
// //     }, []);
// //     return (
// //       <div>
// //         {data.map((item) => (
// //           <div
// //             onContextMenu={(e) => {
// //               e.preventDefault();
// //               setClicked(true);
// //               setPoints({
// //                 x: e.pageX,
// //                 y: e.pageY,
// //               });
// //             }}
// //           >
// //             <Menu id={item.id} title={item.title} />
// //           </div>
// //         ))}
// //         {clicked && (
// //           <ContextMenu top={points.y} left={points.x}>
// //             <ul>
// //               <li>Edit</li>
// //               <li>Copy</li>
// //               <li>Delete</li>
// //             </ul>
// //           </ContextMenu>
// //         )}
// //       </div>
// //     );

// // }

// // const Menu = ({title,id}) => {
// //     return(
// //         <>
// //          <MenuContextContainer key={id}>{title}</MenuContextContainer>
// //         </>
// //     )
// // }

// // const useContextMenu = () => {
// //     const [clicked, setClicked] = useState(false);
// //     const [points, setPoints] = useState({
// //         x: 0,
// //         y: 0,
// //     });

// //     useEffect(() => {
// //         const handleClick = () => setClicked(false);
// //         document.addEventListener("click", handleClick);
// //         return () => {
// //         document.removeEventListener("click", handleClick);
// //         };
// //     }, []);

// //     return {
// //         clicked,
// //         setClicked,
// //         points,
// //         setPoints,
// //     };
// // }

// // export const MenuContextContainer = styled.div`
// //   border: 1px solid #ffffff2d;
// //   border-radius: 4px;
// //   padding: 18px;
// //   margin: 5px 0;
// //   box-sizing: border-box;
// // `;

// // export const ContextMenu = styled.div`
// //   position: absolute;
// //   width: 200px;
// //   background-color: #383838;
// //   border-radius: 5px;
// //   box-sizing: border-box;
// //   ${({ top, left }) => css`
// //     top: ${top}px;
// //     left: ${left}px;
// //   `}

// //   ul {
// //     box-sizing: border-box;
// //     padding: 10px;
// //     margin: 0;
// //     list-style: none;
// //   }
// //   ul li {
// //     padding: 18px 12px;
// //   }
// //   /* hover */
// //   ul li:hover {
// //     cursor: pointer;
// //     background-color: #000000;
// //   }
// // `;




// // export const MainContext = createContext();
// // function Example(){

// //     const data = {
// //         parentValue:'Parent body',
// //         childValue:'Child body',
// //         userValue:'happy happy'
// //     }
// //     return(
// //         <MainContext.Provider value={data}>
// //             <Parent/>
// //         </MainContext.Provider>
// //     )
// // }

// // function Parent(){
// //     const data = useContext(MainContext)
// //     return(
// //         <div>
// //         {data.parentValue}
// //         <hr/>
// //         <Child/>
// //         </div>
// //     )
// // }

// // function Child(){
// //     const data = useContext(MainContext)
// //     return(
// //         <div>
// //             <span>{data.childValue}</span>
// //             <hr/>
// //             <Happy/>
// //         </div>
// //     )
// // }

// // function Happy(){
// //     const data = useContext(MainContext)
// //     return(
// //         <>
// //         <strong>{data.userValue}</strong>
// //         </>
// //     )
// // }

// // const UserContext = createContext();
// // function Example() {
// //   const userName = "John Smith";
// //   const userEmp = 11
// //   return (
// //     <UserContext.Provider value={[userName,userEmp]}>
// //       <Layout>
// //         Main content
// //       </Layout>
// //     </UserContext.Provider>
// //   );
// // }
// // function Layout({ children }) {
// //     return (
// //       <div>
// //         <Header />
// //         <main>
// //           {children}
// //         </main>
// //         <ExampleResult/>
// //       </div>
// //     );
// //   }
  
// //   function Header() {
// //     return (
// //       <header>
// //         <UserInfo />
// //         <ExampleResult/>
// //       </header>
// //     );
// //   }
  
// //   function UserInfo() {
// //     const userName = useContext(UserContext);
// //     return <span>{userName}</span>;
// //   }

// //   function ExampleResult(){
// //     const userEmp = useContext(UserContext)
// //     return (
// //         <>
// //          <span>{userEmp}</span>
// //          <hr/>
// //         </>
// //     )
// //   }