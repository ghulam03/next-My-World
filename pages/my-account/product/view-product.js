import { useSelector } from "react-redux";
import { useState } from "react";

export default function ViewProduct() {
//  const id=useSelector((state)=>state.user.id)
  const email=useSelector((state)=>state.user.email)
  console.log(email,"user-email in my-account view prod")
  // const [pproducts, setpproducts] = useState([])
//stackoverflow
// const url="api/my-account/product/get-product"
// function fetchData(url
//   ,email
//   ) {
//   return fetch(url
//    , {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ 
//         email,
//       // id 
//     }),}
//     ).then(response => response.json());
// }

// Promise.all([
//   fetchData("api/my-account/product/get-product"),
//   fetchData("api/my-account/product/get-product")
// ]).then(data => console.log(data),"prod view");



  //
// const data=
//   fetch("/api/my-account/product/get-product", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ 
//       email,
//     // id 
//   }),
//   })
//   const dataa=data[0].json()
//   console.log(dataa,"view prod data")


  
  // .then((response)=> response.json())
  // .then((products)=>{
  //   // setpproducts(products)
  //   console.log("myaccount view-product", products);
  // })
  // .catch((error)=>{
  //   console.log("error my-act prod view",error )
  // })
  // //
  // console.log(pproducts,"view-prod my-acccount")
  // useEffect(() => {
    // const response = await 
  //   fetch("/api/my-account/product/get-product", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email }),
  //   }).
    // ;
  //   then((response)=>{
  //     response.json();
  //   }).then((products)=>{
  //     setproducts(products)
  //     console.log("myaccount product data", products);
  //   })
    // const products = await response.json();
    // setproducts(products)
    // console.log("myaccount product data", products);
    
  
  //   return () => {
  //     console.log("ret ue for view-product my-account")
  //   }
  // }, )
  
  // const [email, setemail] = useState("no user");
  //   const [user, setuser] = useState({});
  //   const [isShow, setisShow] = useState(false);
  //   const [isSVB, setisSVB] = useState(true)
  // async function random() {
  //   const emaill = await getEmailId();
    // console.log(emaill);
  //   setemail(emaill);
  // }
  // random();
  // async function handleClick() {
  //   console.log("click work");

  //   const response = await fetch("/api/auth/get-product", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email }),
  //   });
  //   const data = await response.json();
  //   console.log(data, "prod");
    // setuser({ ...data });
    // setisShow(true);
  // }
  // function handleDivClick(){
  //     setisSVB(false)

  // }
  return (
    <>
    <p>prod</p>
      {/* <button onClick={handleClick}>Show Product</button> */}
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
// {
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
// }

//     return (
//         <>
//         <p>product details</p>
//             <p>product</p>
//         </>
//     );
// }
