import React from "react";
import { signIn } from "next-auth/react";
import styles from "../../styles/auth/postSignout.module.css"
function PostSignup() {
  return (
    <><div className={styles.container}>
        
      <h1>Thanks for Joining Us</h1>
      <h2>Signin to continue enjoying...</h2>
      <button
        onClick={() =>
            // {signIn( "credentials",{ callbackUrl: 'http://localhost:3000' })}
            signIn()
        }
        // () => userSignin()
        >
        Sign in
      </button>
          </div>
    </>
  );
}

export default PostSignup;
