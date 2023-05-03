import React,{useState,useEffect} from 'react'

export default function LiftingStateUpExample() {
  return (
    <>
      <Example/>
    </>
  )
}

// EXAMPLE 2
function Example(){

    const [todos,setTodos] = useState(['item1','item2','item3'])

    const btnRemove = () => {
        setTodos(current =>
          current.filter(employee => {
            // 👇️ remove object that has id equal to 2
            return employee.id !== 2;
          }),
        );
      };
    return(
        <>
        <ToDoCount todos={todos} />
        <TodoList todos={todos} btnRemove={btnRemove} />
        <AddTodo setTodos={setTodos} />
        </>
    )
}

function ToDoCount({todos}){
    return(
        <>
         Total Todos: {todos.length}
        </>
    )
}

function TodoList({todos,btnRemove}){

    return(
        <>
         <ul>
            {todos.map((todo) => {
                return(
                    <li key={todo}>{todo} <button onClick={btnRemove}>&times;</button></li>
                )
            })}
         </ul>
        </>
    )
}

function AddTodo({setTodos}){
    function handleSubmit(event){
        event.preventDefault();
        const todo = event.target.elements.todo.value;  
        setTodos(prevTodo => [...prevTodo,todo])
    }
    return(
        <>
         <form onSubmit={handleSubmit}>
            <input type="text" id="todo"/>
            <button type="submit">Submit</button>
         </form>
        </>
    )
}

// EXAMPLE 1
// function Example(){
//     return(
//         <>
//          <A/>
//         </>
//     )
// }

// class A extends React.Component{
//     constructor(props) {
//         super(props);
//         this.handleTextChange = this.handleTextChange.bind(this);
//         this.state = {text: ''};
//       }
      
//       handleTextChange(newText) {
//         this.setState({text: newText});
//       }
//     render(){
//         return(
//             <>
//               <B text={this.state.text} 
//              handleTextChange={this.handleTextChange}/>
//           <C text={this.state.text} />
//             </>
//         )
//     }
// }

// class B extends React.Component{
//     constructor(props) {
//         super(props);
//         this.handleTextChange = this.handleTextChange.bind(this);
//     }
      
//     handleTextChange(e){
//         this.props.handleTextChange(e.target.value)
//     }
//     render(){
//         return(
//             <>
//              <input value={this.props.text} onChange={this.handleTextChange}/>
//             </>
//         )
//     }
// }

// class C extends React.Component{
//     render(){
//         return(
//             <>
//              <h3>Output: {this.props.text}</h3>
//             </>
//         )
//     }
// }