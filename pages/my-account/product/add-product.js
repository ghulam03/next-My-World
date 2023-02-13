import ProductForm from "../../../components/my-account/product/ProductForm";
import { getSession } from "next-auth/react";
import { useState } from "react";
export default function AddProduct() {
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
      <ProductForm />
    </>
  );
}
