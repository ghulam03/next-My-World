import Link from "next/link";
import styles from "../styles/home.module.css";
import useStoree from "../utils/store";

export default function Index() {
  const bears = useStoree((state) => state.bears);

  return (
    <>
    <main  className={styles.container}>
      
      <Link href="/blog">
        <h1>Blog App</h1>
      </Link>
      <h1>Home </h1>
      
      
    </main>
    <h3>the content of counter app</h3>
      <h3> bear no is {bears}</h3>
      <p>
        Laboris consectetur proident et non reprehenderit cupidatat
        reprehenderit culpa dolore dolor culpa. Cillum proident sint enim Lorem
        cillum adipisicing consequat et in consequat adipisicing magna. Non
        cupidatat ullamco dolor aliqua ad sint aliquip. Deserunt commodo ea
        irure ullamco duis ullamco aute labore qui mollit do Lorem nisi.
        Deserunt ea non eiusmod eu mollit et. Proident sint deserunt ex proident
        qui quis laboris adipisicing cupidatat cupidatat aliquip ea consequat.
        Elit consequat cupidatat do nostrud laboris magna eu dolor nostrud
        tempor.
      </p>
    </>
  );
}
