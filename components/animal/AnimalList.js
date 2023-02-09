import React from "react";
import style from "./AnimalList.module.css"
import { useRouter } from "next/router";
function AnimalList(props) {

  const router=useRouter();
  
    console.log(props)
    console.log(props.name.animals)
    const deleteHandler= async (id)=>{
      fetch(`/api/animal/${id}`,{
        method:'DELETE'
      })
      
      router.push('/animal')
    }
    // const updateHandler= async (id)=>{
    //   fetch(`/api/animal/${id}`,{
    //     method:'PUT'
    //   })
      
    //   router.push('/animal')

    // }
   
  
    return (
    <>
      <h1>AnimalList are here</h1>
      
      {props.name.animals.map((animal) => (
        < div key={animal.id} className={style.container}> 
        <p>{animal.name}</p> 
        <p>{animal.age}</p>
        <p>{animal.color}</p>
        <button onClick={()=>deleteHandler(animal.name)}>Delete</button>
        {/* <button onClick={()=>updateHandler(animal.name)}>Update Animal</button> */}
            
        </div> ))}
      
      
    </>
  );
}

export default AnimalList;
