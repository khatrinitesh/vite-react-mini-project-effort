import React, { useState, useEffect, useRef } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import './style.scss';

export default function CrudExample() {
  return (
    <>
       <Example/>
    </>
  )
}

function Example(){
  const [list, setList] = React.useState([]);

  const handleAdd = () => {
    const items = list; 
    setList([...items,`item-${items.length}`])
  }

  const handleRemove= () => {T
    const items = list; 
    if(items.length > 0){
      const lastIndex = items.length - 1;
      setList(items.filter((item,index) => index !== lastIndex))
    }
  }
  return(
    <>
     <div>List: {list.length} total items</div>
     <button onClick={handleAdd}>+</button>
     <button onClick={handleRemove}>-</button>
     {list.map((item,index) => {
      return(
        <li key={index}>
          {item}
        </li>
      )
     })}
    </>
  )
}

// function Example(){
//     const [modalOpen, setModalOpen] = useState(false);
//     const [rows, setRows] = useState([
//     {
//       page: "Home",
//       description: "This is the main page of the website",
//       status: "live",
//     },
//     {
//       page: "About Us",
//       description: "This page has details about the company",
//       status: "draft",
//     },
//     {
//       page: "Pricing",
//       description: "Prices for different subscriptions",
//       status: "error",
//     },
//   ]);
//   const [rowToEdit, setRowToEdit] = useState(null);

//   const handleDeleteRow = (targetIndex) => {
//     setRows(rows.filter((_, idx) => idx !== targetIndex));
//   };

//   const handleEditRow = (idx) => {
//     setRowToEdit(idx);
//     setModalOpen(true);
//   };

//   const handleSubmit = (newRow) => {
//     rowToEdit === null
//       ? setRows([...rows, newRow])
//       : setRows(
//           rows.map((currRow, idx) => {
//             if (idx !== rowToEdit) return currRow;

//             return newRow;
//           })
//         );
//   };
//     return(
//         <>
//          <CustomTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
//         <button onClick={() => setModalOpen(true)} className="btn">
//             Add
//         </button>
//         {modalOpen && (
//             <Modal
//             closeModal={() => {
//                 setModalOpen(false);
//                 setRowToEdit(null);
//             }}
//             onSubmit={handleSubmit}
//             defaultValue={rowToEdit !== null && rows[rowToEdit]}
//             />
//         )}
//         </>
//     )
// }

// function CustomTable({rows,deleteRow,editRow}){
    
//     return(
//         <>
//             <div className="table-wrapper">
//                 <table className="table">
//                     <thead>
//                     <tr>
//                         <th>Page</th>
//                         <th className="expand">Description</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {rows.map((row, idx) => {
//                         const statusText =
//                         row.status.charAt(0).toUpperCase() + row.status.slice(1);

//                         return (
//                         <tr key={idx}>
//                             <td>{row.page}</td>
//                             <td className="expand">{row.description}</td>
//                             <td>
//                             <span className={`label label-${row.status}`}>
//                                 {statusText}
//                             </span>
//                             </td>
//                             <td className="fit">
//                             <span className="actions">
//                                 <BsFillTrashFill
//                                 className="delete-btn"
//                                 onClick={() => deleteRow(idx)}
//                                 />
//                                 <BsFillPencilFill
//                                 className="edit-btn"
//                                 onClick={() => editRow(idx)}
//                                 />
//                             </span>
//                             </td>
//                         </tr>
//                         );
//                     })}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     )
// }

// function Modal({closeModal,onSubmit,defaultValue}){
//     const [formState, setFormState] = useState(
//         defaultValue || {
//           page: "",
//           description: "",
//           status: "live",
//         }
//       );
//       const [errors, setErrors] = useState("");
    
//       const validateForm = () => {
//         if (formState.page && formState.description && formState.status) {
//           setErrors("");
//           return true;
//         } else {
//           let errorFields = [];
//           for (const [key, value] of Object.entries(formState)) {
//             if (!value) {
//               errorFields.push(key);
//             }
//           }
//           setErrors(errorFields.join(", "));
//           return false;
//         }
//       };
    
//       const handleChange = (e) => {
//         setFormState({ ...formState, [e.target.name]: e.target.value });
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
    
//         if (!validateForm()) return;
    
//         onSubmit(formState);
    
//         closeModal();
//       };
//     return(
//         <div
//         className="modal-container"
//         onClick={(e) => {
//           if (e.target.className === "modal-container") closeModal();
//         }}
//       >
//         <div className="modal">
//           <form>
//             <div className="form-group">
//               <label htmlFor="page">Page</label>
//               <input name="page" onChange={handleChange} value={formState.page} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="description">Description</label>
//               <textarea
//                 name="description"
//                 onChange={handleChange}
//                 value={formState.description}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="status">Status</label>
//               <select
//                 name="status"
//                 onChange={handleChange}
//                 value={formState.status}
//               >
//                 <option value="live">Live</option>
//                 <option value="draft">Draft</option>
//                 <option value="error">Error</option>
//               </select>
//             </div>
//             {errors && <div className="error">{`Please include: ${errors}`}</div>}
//             <button type="submit" className="btn" onClick={handleSubmit}>
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>)
// }