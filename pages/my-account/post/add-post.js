import PostForm from "../../../components/my-account/post/PostForm";
import { getSession } from "next-auth/react";
import { useState } from "react";
export default function AddPost() {
  const [isAuth, setisAuth] = useState(false);

  async function isAuthHandle() {
    const session = await getSession();
    if (session) {
      setisAuth(true);
    }
  }

  isAuthHandle();
  if (!isAuth) return <p>Login first</p>;

  return (
    <>
    <PostForm/>
    </>
  );
}
