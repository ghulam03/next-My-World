import React from "react";

function AnimalList(props) {
    console.log(props)
    console.log(props.name)
  return (
    <>
      <h1>AnimalList are here</h1>
      
      {props.name.map((animal) => (
        < div key={animal.id}> 
        <p>{animal.name}</p> 
        <p>{animal.age}</p>
        <p>{animal.color}</p>
            
        </div> ))}
      
      
    </>
  );
}

export default AnimalList;
