import React from 'react'

export default function StateExample() {
  return (
    <>
      {/* <Employee Id={1} Name="nitesh" Location="Mumbai" Salary={70000} BasicSalary={80000} SpecialAllowance={11000} HRA={55000} /> */}
      <Example/>
    </>
  )
}

const EmployeeContext= React.createContext({
  data:'',
  changeEmpInfo:() => {},
});

class Example extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data:{
        Id:101
      },
      changeEmpInfo:this.updateEmployeeDetails
    }
  }

 
  render(){
    return(
      <>
        <h2>Welcome to App Component</h2>
        <p>
          <label>Employee Id : <b>{this.state.Id}</b></label>
        </p>
        <EmployeeContext.Provider value={this.state}>
          <Employee/>
        </EmployeeContext.Provider>

      </>
    )
  }
}

class Employee extends React.Component{
  static ContextType = EmployeeContext;

  updateEmployeeDetails = () => {
    this.setState({ data:{Id:102} });
  };
  
  render(){
    return(
      <>
      <h2>Welcome to Employee Component...</h2>
      <p>
        <label>Employee Id : <b>{this.context.data.Id}</b></label>
      </p>
      <p>
        <button onClick={this.context.changeEmployeeInfo}>Change</button>
      </p>
      </>
    )
  }
}

// class Employee extends React.Component{

//   constructor(props){
//     super(props)
//   }
//   render(){
//     return(
//       <> 
//         <h1>Employee Component...</h1>
//         <p>
//           <label>Id : <b>{this.props.Id}</b></label>
//         </p>
//         <p>
//           <label>Name : <b>{this.props.Name}</b></label>
//         </p>
//         <p>
//           <label>Location : <b>{this.props.Location}</b></label>
//         </p>
//         <p>
//           <label>Total Salary : <b>{this.props.Salary}</b></label>
//         </p>
//         <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance}/>
//       </>
//     )
//   }
// }

// class Salary extends React.Component{
//   render(){
//     return(
//       <>
//       <h1>Salary Details...</h1>
//       <p>
//           <label>Basic Salary : <b>{this.props.BasicSalary}</b></label>
//       </p>
//       <p>
//           <label>HRA : <b>{this.props.HRA}</b></label>
//       </p>
//       <p>
//           <label>Special Allowance : <b>{this.props.SpecialAllowance}</b></label>
//       </p>

//       </>
//     )
//   }
// }

// class CounterCharacters extends React.Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       message:'',
//       count:10
//     }
//   }

//   onMsgChange(text){
//     this.setState({
//       message:'message has' + text.length + 'number of characters'
//     })
//   }


//   render(){
//     return(
//       <>
//        <h2>Welcome to Count Characters Component...</h2>
//        <p>
//        <label>Enter Message :</label>
//        <input type="text" onChange={(e) => this.onMsgChange(e.target.value)}/>
//        </p>
//       </>
//     )
//   }
// }

// class Employee extends React.Component{
//   state = {
//     count:0
//   }

//   addEmployee = () => {
//     this.setState({
//       count:this.state.count + 1
//     })
//   }
//   render(){
//     return(
//       <>
//        {this.state.count}
//        <button onClick={this.addEmployee}>Add Employee</button>
//       </>
//     )
//   }
// }


// class Employee extends React.Component{
//     addEmployee = () => {
//         alert('clicked on addEmployee method');
//     }
//     render(){
//         return(
//             <>
//              <h2>Employee Component...</h2>
//              <button onClick={this.addEmployee}>Add Employee</button>
//             </>
//         )
//     }
// }