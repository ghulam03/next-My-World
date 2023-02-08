import useStoree from "../utils/store";
export default function Index() {
  const bears = useStoree((state) => state.bears);

  return (
    <>
      <h1>home </h1>
      <p> bear no is {bears}</p>
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
