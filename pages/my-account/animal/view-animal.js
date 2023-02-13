import { useState } from "react";

export default function ViewAnimal() {
    const [animals, setanimal] = useState({})
      function handleClick() {
    
        fetch("/api/my-account/view-animal", {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setanimal({...data})
            console.log("Success:", data,);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
          
      }
      console.log(animals,"hj")
    
    
    return (
        <>
           <button onClick={handleClick}>tap to see
            </button> 
            <p>animal list</p>
            {/* {animals&& "yes"} */}
        </>
    );
}


