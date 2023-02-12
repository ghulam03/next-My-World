import AnimalForm from "../../components/animal/AnimalForm";
import AnimalList from "../../components/animal/AnimalList";
export default function Animal(props) {
  console.log(props);
  // const animals = [
  //   {
  //     id:6456,
  //     name: "ghgj",
  //     age: 0,
  //     color: "gh",
  //   },
  //   { id: 43234,name: "ghggjgjhgj", age: 0, color: "gh" },
  // ];
  return (
    <>
      <AnimalForm />
      <AnimalList name={props} />

      <p>
        Sit pariatur aliquip nostrud aute do sunt. Commodo proident dolor fugiat
        officia occaecat fugiat. Adipisicing nulla aute irure aliqua commodo
        tempor fugiat reprehenderit officia esse amet cupidatat consequat qui.
        Esse velit qui irure excepteur mollit consectetur ullamco ea
        exercitation eiusmod incididunt mollit aliquip consequat. Qui ea enim
        fugiat eu.
      </p>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/animal", {
    method: "GET", 
    headers: {
      "Content-Type": "application/json",
    },
  });
  const animals = await res.json();

  return {
    props: {
      animals,
    },
  };
}
