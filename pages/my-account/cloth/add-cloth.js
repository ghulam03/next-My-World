import ClothForm from "../../../components/my-account/cloth/ClothForm";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function AddCloth() {
  
    const router=useRouter()
  const [isAuth, setisAuth] = useState(false);

  // async function isAuthHandle() {
  //   const session = await getSession();
  //   if (session) {
  //     setisAuth(true);
  //   }
  // }

  // isAuthHandle();
  // if (!isAuth) {
    
  //   router.push("http://localhost:3000")
  // }

  return (
    <>
      <ClothForm />
    </>
  );
}
