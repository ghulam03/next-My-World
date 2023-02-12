import AnimalForm from "../../../components/my-account/AnimalForm";
import { getSession } from "next-auth/react";
import { useState } from "react";
export default function AddAnimal() {
  const [isAuth, setisAuth] = useState(false);

  async function isAuthHandle() {
    const session = await getSession();
    if (session) {
      setisAuth(true);
    }
  }

  isAuthHandle();
  if (!isAuth) return <p>Login first</p>

  return (
    <>
      <AnimalForm />
    </>
  );
}
