import React,{ createContext, useContext, useState }  from 'react'
import { v1 as uuidv1 } from "uuid";

const ItemContext = createContext({
    items:[],
    addItem:() => {},
    deleteItem:() => {}
})

const initialState = [
    {
        name: "Red Beans",
        amount: 23,
        id: uuidv1()
      },
      {
        name: "Nuts for Bunnies",
        amount: 33,
        id: uuidv1()
      },
      {
        name: "Chopped Tomatoes",
        amount: 2,
        id: uuidv1()
      }
]

function ItemProvider(props) {
    const [items,setItems] = useState(initialState);

    const addItem = (item) => setItems((items) => [...items,item]);

    const deleteItem = (id) => {
        setItems((items) => items.filter((item) => item.id !== id))
    }

    const value = {
        items,
        addItem,
        deleteItem
    }
  return (
    <div>
        <ItemContext.Provider value={value}>
            {props.children}
        </ItemContext.Provider> 
    </div>
  )
}

const AddItem = () => {
    const [name,setName] = useState("")
    const [amt,setAmt] = useState("")

    const {addItem} = useContext(ItemContext)

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateAmt = (e) => {
        setAmt(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addItem({
            name:name,
            amt:amt,
            id:uuidv1()
        })
    }
    return(
        <>
         <form onSubmit={submitHandler}>
            <input type='text' name={name} value={name} onChange={updateName} placeholder='add a new item'/>
            <input type='text' name={amt} value={amt} onChange={updateAmt} placeholder='Amt'/>
            <button>Submit</button>
         </form>
        </>
    )
}

const Item = ({name,amt,id}) => {
    const {deleteItem} = useContext(ItemContext)

    return(
        <>
         <h3>{name}</h3>
         <p>{amt}</p>
         <button onClick={() => deleteItem(id)}>&times;</button>
        </>
    )
}

const ItemList = () => {
    const {items} = useContext(ItemContext)
    return(
        <>
         {items.map((val) => {
            return(
                <Item key={val.id} id={val.id} name={val.name} amt={val.amt}/>
            )
         })}
        </>
    )
}


export default function CustomApp(){
    return(
        <>
        <ItemProvider>
            <ItemList/>
            <AddItem/>
        </ItemProvider>
        </>
    )
}