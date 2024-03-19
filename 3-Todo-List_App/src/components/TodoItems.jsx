
// import React, { useState } from 'react'

// const TodoItems = () => {
//     const [inputValue , setInputValue] = useState('');
//     const [listData, setlistData] = useState([]);



//     const addTodoList = (e)=> {
//             // console.log(inputValue)
//             setInputValue('')

//             setlistData([...listData,inputValue])
//             // console.log(listData);



// // 2nd method to declare setlistData
//             // setlistData((listData) => {
//             //     const updatedData = [...listData, inputValue]
//             //     // console.log(updatedData);
//             //     return updatedData;
//             // })

//             // console.log(listData);



//     } 

//     const removeList = (i) => {
//         const updatedData = listData.filter((data,id) => {
//             return i !== id
//         })
//         setlistData(updatedData)
//     }

//     const removeListAll = () => {
//       setlistData([])
//     }
//   return (
//     <>
//     <div className=" container ">
//         <h1 className="header">Todo List App</h1>

//             <div className="inputData">
//             <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  placeholder='Enter Data'/>
//             <button type="button" className="btn btn-outline-info Addbutton" onClick={addTodoList}>Add Todo</button>    

//             <p className='item-header'>Here is Your Data :{")"}</p>
//             {listData != [] && listData.map((data, i) => {
//               return (
//                 <div key={i} className='listmaindiv'>
//                 <div className='listData'>
//                     {data}
//                 </div>
//                 <button type="button" className="btn btn-outline-danger deletebutton" onClick={() => removeList(i)}>Remove</button>
//                 </div>
//               )    
//                 })}

//                 {listData.length >= 1 && 
//                 <button type="button" className="btn btn-danger deletebuttonAll" onClick={removeListAll}>Remove All</button>
//                 }
//             </div>
          
//     </div>
//     </>
//   )
// }

// export default TodoItems


















import React, { useState } from 'react'

const TodoItems = () => {
    const [inputValue , setInputValue] = useState('');
    const [listData, setlistData] = useState([]);



    const addTodoList = ()=> {
           
            setInputValue('')       
            setlistData([...listData,inputValue])
    } 

    const removeList = (i) => {
           let remove = listData.filter((data, num) => {
            return i !== num
           }) 
          setlistData(remove)
    }

    const removeListAll = () => {
     setlistData([])
    }
  return (
    <>
    <div className=" container ">
        <h1 className="header">Todo List App</h1>

            <div className="inputData">
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  placeholder='Enter Data'/>
            <button type="button" className="btn btn-outline-info Addbutton" onClick={addTodoList}>Add Todo</button>    

            <p className='item-header'>Here is Your Data :{")"}</p>
            {listData != [] && listData.map((data, i) => {
              return (
                <div key={i} className='listmaindiv'>
                <div className='listData'>
                    {data}
                </div>
                <button type="button" className="btn btn-outline-danger deletebutton" onClick={() => removeList(i)}>Remove</button>
                </div>
              )    
                })}

                {listData.length >= 1 && 
                <button type="button" className="btn btn-danger deletebuttonAll" onClick={removeListAll}>Remove All</button>
                }
            </div>
          
    </div>
    </>
  )
}

export default TodoItems
