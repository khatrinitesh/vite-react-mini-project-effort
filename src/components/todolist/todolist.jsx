import axios from 'axios';
import React,{useState,useEffect} from 'react'

export default function ToDoList() {

    const [todo,setTodo] = useState([]);
    const [todosPerPage,setTodosPerPage] = useState(10);
    const [currentPage,setCurrentPage] = useState(1);

    const numofTotalpages = Math.ceil(todo.length / todosPerPage)
    const pages = [...Array(numofTotalpages + 1).keys()].slice(1);
    console.log(pages);

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage

    const visibleTodos = todo.slice(indexOfFirstTodo,indexOfLastTodo);

    const prevPageHandler = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    const nextPageHandler = () => {
        if(currentPage !== numofTotalpages) setCurrentPage(currentPage + 1)
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res) => setTodo(res.data));
    },[])
  return (
    <div>
        <select onChange={(e) => setTodosPerPage(e.target.value)}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
        </select>
        {visibleTodos.map((todo) => {
            return(
                <p key={todo.id}>{todo.title}</p>
            )
        })}
      {todo.map((val) => {
        return(
            <p key={val.id}>{val.title}</p>
        )
      })}
      <h1>{numofTotalpages}</h1>
      <span onClick={prevPageHandler}>prev</span>
      <span className={`${currentPage === pages} ? "active" : ""`} onClick={() => setCurrentPage(page)}>{pages.map(page => <span>{`${page}`}</span>)}</span>
      <span onClick={nextPageHandler}>next</span>
    </div>
  )
}

// function Example(){
//     return(
//         <></>
//     )
// }
