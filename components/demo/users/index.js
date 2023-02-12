import { getSession, useSession } from "next-auth/react"

import Link from "next/link";
import { useState } from "react";

export default  function Users() {
    const [isAuth, setisAuth] = useState(false)

 async function handle(){
    const session = await getSession()
    if(session){
        setisAuth(true)
    }}
    
    handle();
    if(isAuth){
        return <div> user pressent</div>
    }
    if(!isAuth){
        return <div> user not pressent</div>
    }

}
    // console.log(session)}

// if(session){
//     return <div> user found </div>
// }}
    
 




//   const { data:session,status } = useSession({
//     required: false,
//     //  onUnauthenticated() {
//     //     return <div> noikl user</div>
//     // }
//       // The user is not authenticated, handle it here.
//      }
//   )
//   if(status==="authenticated"){
//     // return "no user found"
//     return (
//         <><p>  user found</p>
//         <p>{data}</p>
//         </>
//         )}
//   if (status === "loading") {
//     return "Loading or not authenticated..."
//   }
//   return <div>no useyur</div>
// }
   
//   return "User is logged in"}


    
//     return (
//         <>
//         <p> no user</p>
//         <Link href="users/user-list">
//            <h2>user info
//             </h2> 
//         </Link>
//         {/* <Link href="users/create-user">
//            <h2>create User
//             </h2> 
//         </Link> */}
//         </>
//     );
// }