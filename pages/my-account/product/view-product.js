import { useState } from "react";
import getEmailId from "../../../utils/getEmId";

export default function ViewProduct() {
  const [email, setemail] = useState("no user");
  //   const [user, setuser] = useState({});
  //   const [isShow, setisShow] = useState(false);
  //   const [isSVB, setisSVB] = useState(true)
  async function random() {
    const emaill = await getEmailId();
    // console.log(emaill);
    setemail(emaill);
  }
  random();
  async function handleClick() {
    console.log("click work");

    const response = await fetch("/api/auth/get-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    console.log(data, "prod");
    // setuser({ ...data });
    // setisShow(true);
  }
  // function handleDivClick(){
  //     setisSVB(false)

  // }
  return (
    <>
      <button onClick={handleClick}>Show Product</button>
      {/* {props.products.map((p)=>{
            return (
                <>
                 <ProductCard name={p.name}  pcode={p.pcode} rating={p.rating} desc={p.desc} category={p.category}/>
                </>
            )
        })} */}
    </>
  );
}

//   return (
//     <>
{
  /*             
              <h2 className={styles.email}>Email Id:{email}</h2>
              <div onClick={handleDivClick}>
                {isSVB&&
                
              <button onClick={handleClick}>Tap to See Details</button>
                }
                
              </div>
              {isShow&&
              <div className={styles.container}>
                  <h3>Name:{user.name}</h3>
                  <h3>Password:{user.password}</h3>
                  <h3>Age:{user.age}</h3>
                  <h3>Country:{user.country}</h3>
              </div>
            }
            </>
          ); */
}

//     return (
//         <>
//         <p>product details</p>
//             <p>product</p>
//         </>
//     );
// }
