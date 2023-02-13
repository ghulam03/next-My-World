import Link from "next/link";
import { getSession } from "next-auth/react";
import styles from "../../styles/my-account.module.css"
import { useState } from "react";

export default function Index() {
    const [email, setemail] = useState("test@test")
    
    async function isAuthHandle() {
        const session = await getSession();
        console.log(session,"session")
        console.log(session.user.email,"session")
        if (session) {
          setemail(session.user.email);
        }
      }
    
      isAuthHandle();
  return (
    <>
      <h1>my email is:  {email}</h1>
      <div className={styles.container}>
        <div>
            
      <h1>Blog</h1>
    <Link href="/my-account/blog/add-blog">
      <h2>Add Blog</h2>
        
    </Link>
        <h2>View All Blog</h2>
        </div>
        <div>
        <h1>Animal</h1>
    <Link href="/my-account/animal/add-animal">
      <h2>Add Animal</h2>
        
    </Link>
    <Link href="/my-account/animal/view-animal">
      <h2>View All Animal</h2>
        
    </Link>
    
        </div>
      </div>
    </>
  );
}
