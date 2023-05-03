import React,{createContext,useContext, useEffect, useState} from 'react';
import styled, { css } from "styled-components";

export default function ContextExample() {
  return (
    <>
      {/* <MenuContextHook data={data}/> */}
      <MenuContext data={data}/>
    </>
  )
}

export const data = [
    {
        id: 1,
        title: "Message 1",
      },
      {
        id: 2,
        title: "Message 2",
      },
      {
        id: 3,
        title: "Message 3",
      },
      {
        id: 4,
        title: "Message 4",
      },
]


const MenuContextHook = ({data}) => {
    const { clicked, setClicked, points, setPoints } = useContextMenu();

  return (
    <div>
      {data.map((item) => (
        <div
          onContextMenu={(e) => {
            e.preventDefault();
            setClicked(true);
            setPoints({
              x: e.pageX,
              y: e.pageY,
            });
          
          }}
        >
          <Menu key={item.id} title={item.title} />
        </div>
      ))}

      {clicked && (
        <ContextMenu top={points.y} left={points.x}>
          <ul>
            <li>Edit</li>
            <li>Copy</li>
            <li>Delete</li>
          </ul>
        </ContextMenu>
      )}
    </div>
  );
}


const MenuContext = ({data}) => {
    const [clicked, setClicked] = useState(false);
    const [points, setPoints] = useState({
      x: 0,
      y: 0,
    });
  
    useEffect(() => {
      const handleClick = () => setClicked(false);
      window.addEventListener("click", handleClick);
      return () => {
        window.removeEventListener("click", handleClick);
      };
    }, []);
    return (
      <div>
        {data.map((item) => (
          <div
            onContextMenu={(e) => {
              e.preventDefault();
              setClicked(true);
              setPoints({
                x: e.pageX,
                y: e.pageY,
              });
            }}
          >
            <Menu id={item.id} title={item.title} />
          </div>
        ))}
        {clicked && (
          <ContextMenu top={points.y} left={points.x}>
            <ul>
              <li>Edit</li>
              <li>Copy</li>
              <li>Delete</li>
            </ul>
          </ContextMenu>
        )}
      </div>
    );

}

const Menu = ({title,id}) => {
    return(
        <>
         <MenuContextContainer key={id}>{title}</MenuContextContainer>
        </>
    )
}

const useContextMenu = () => {
    const [clicked, setClicked] = useState(false);
    const [points, setPoints] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handleClick = () => setClicked(false);
        document.addEventListener("click", handleClick);
        return () => {
        document.removeEventListener("click", handleClick);
        };
    }, []);

    return {
        clicked,
        setClicked,
        points,
        setPoints,
    };
}

export const MenuContextContainer = styled.div`
  border: 1px solid #ffffff2d;
  border-radius: 4px;
  padding: 18px;
  margin: 5px 0;
  box-sizing: border-box;
`;

export const ContextMenu = styled.div`
  position: absolute;
  width: 200px;
  background-color: #383838;
  border-radius: 5px;
  box-sizing: border-box;
  ${({ top, left }) => css`
    top: ${top}px;
    left: ${left}px;
  `}

  ul {
    box-sizing: border-box;
    padding: 10px;
    margin: 0;
    list-style: none;
  }
  ul li {
    padding: 18px 12px;
  }
  /* hover */
  ul li:hover {
    cursor: pointer;
    background-color: #000000;
  }
`;




// export const MainContext = createContext();
// function Example(){

//     const data = {
//         parentValue:'Parent body',
//         childValue:'Child body',
//         userValue:'happy happy'
//     }
//     return(
//         <MainContext.Provider value={data}>
//             <Parent/>
//         </MainContext.Provider>
//     )
// }

// function Parent(){
//     const data = useContext(MainContext)
//     return(
//         <div>
//         {data.parentValue}
//         <hr/>
//         <Child/>
//         </div>
//     )
// }

// function Child(){
//     const data = useContext(MainContext)
//     return(
//         <div>
//             <span>{data.childValue}</span>
//             <hr/>
//             <Happy/>
//         </div>
//     )
// }

// function Happy(){
//     const data = useContext(MainContext)
//     return(
//         <>
//         <strong>{data.userValue}</strong>
//         </>
//     )
// }

// const UserContext = createContext();
// function Example() {
//   const userName = "John Smith";
//   const userEmp = 11
//   return (
//     <UserContext.Provider value={[userName,userEmp]}>
//       <Layout>
//         Main content
//       </Layout>
//     </UserContext.Provider>
//   );
// }
// function Layout({ children }) {
//     return (
//       <div>
//         <Header />
//         <main>
//           {children}
//         </main>
//         <ExampleResult/>
//       </div>
//     );
//   }
  
//   function Header() {
//     return (
//       <header>
//         <UserInfo />
//         <ExampleResult/>
//       </header>
//     );
//   }
  
//   function UserInfo() {
//     const userName = useContext(UserContext);
//     return <span>{userName}</span>;
//   }

//   function ExampleResult(){
//     const userEmp = useContext(UserContext)
//     return (
//         <>
//          <span>{userEmp}</span>
//          <hr/>
//         </>
//     )
//   }