import React from 'react';
import { dataItems ,recipesItems,peopleItems,employeesItems} from '../datarray/datacontent';

export default function DataOne() {
  const arr = ['a', 'b', 'c']; 
  return (
    <div>
      {employeesItems.map((val) => {
        return(
          <div key={val.id}>
            <h3>{val.name}</h3>
            {val.tasks.map((val,index) => {
              return(
                <div key={index}>{val}</div>
              )
            })}
          </div>
        )
      })}
      {peopleItems.map((val) => {
        return(
          <div key={val.id}>
            <h3>{val.name}</h3>
            {val.pets.map((i,index  ) => {
              return(
                <div key={index}>
                  {i}
                </div>
              )
            })}
          </div>
        )
      })}
      {recipesItems.map((recipe) => {
        return(
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.imageUrl}/>
            {recipe.dishTypes.map((c,index) => {
              return(
                <p key={index}>{c}</p>
              )
            })}
          </div>
        )
      })}
      {arr.map((val) => {
        return(
          <div>{val}</div>
        )
      })}
      {dataItems.map((item,index) => {
        return(
          <div key={index}>
            <h1>{item.title}</h1>
            {item.content.map((c,i) => {
              return(
                <>
                 <img src={c.imageUrl}/>
                 <p>{c.description}</p>
                </>
              )
            })}
            <hr />
          </div>
        )
      })}
    </div>
  )
}
