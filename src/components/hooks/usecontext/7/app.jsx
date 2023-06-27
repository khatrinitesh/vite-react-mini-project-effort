
import React,{useState,createContext,useContext} from 'react';
import { v1 as uuidv1 } from "uuid";

const ItemsContext =createContext({
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

function ItemsProvider(props){

    const [items,setItems] = useState(initialState);

    const addItem = (item) => setItems((items) => [...items,item])

    const deleteItem = (id) => {
        setItems((items) => items.filter((item) => item.id !== id))
    }
    const value = {
     items,
     addItem,
     deleteItem
    }
    return(
        <ItemsContext.Provider value={value}>
            {props.children}
        </ItemsContext.Provider>
    )
}

const AddItem = () => {
    const [name,setName] = useState('nitesh')
    const [amt,setAmt] = useState(0)

    const {addItem} = useContext(ItemsContext)

    const updateName = (e) => {
        setName(e.target.value)
    }
    const updateAge = (e) => {
        setAmt(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({
            name:name,
            amt:amt,
            id:uuidv1()
        })
    }

    return(
        <>
         <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={updateName} name={name}/>
            <input type='text' value={amt} onChange={updateAge} name={amt}/>
            <button>Submit</button>
         </form>
        </>
    )
}

const Item = ({name,amt,id}) => {

    const {deleteItem} = useContext(ItemsContext)
    return(
        <div>
            <h3>{name}</h3>
            <p>{amt}</p>
            <button onClick={() => deleteItem(id)}>delete</button>
        </div>
    )
}

const ItemsList = () => {
    const {items} = useContext(ItemsContext)
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

export default function CustomApp() {
  return (
    <div>
      <ItemsProvider>
        <ItemsList/>
        <AddItem/>
      </ItemsProvider>
    </div>
  )
}
