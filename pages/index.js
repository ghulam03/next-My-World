import styles from "../styles/home.module.css";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <main className={styles.home}>
          <h1> Our Products</h1>
        </main>
        <div className={styles.rowOne}>
          <div onClick={() => router.push("/product")}>
            <h3>All Product</h3>
          </div>
          <div onClick={() => router.push("/cloth")}>
            <h3>All Cloth</h3>
          </div>
          <div onClick={() => router.push("/post")}>
            <h3>All Post</h3>
          </div>
        </div>
        <div className={styles.rowTwo}>
          <div onClick={() => router.push("/animal")}>
            <h3>Animal</h3>
          </div>
          <div onClick={() => router.push("/plant")}>
            <h3>Plant</h3>
          </div>
          <div onClick={() => router.push("/bird")}>
            <h3>Bird</h3>
          </div>
        </div>

        <div className={styles.rowThree}>
          <div onClick={() => router.push("/demo-app")}>
            <h3>Demo App</h3>
          </div>
        </div>
      </div>
    </>
  );
}
