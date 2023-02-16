import { addUser, deleteUser } from "../../store/userSlice";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../store/counterSlice";

import { useDispatch } from "react-redux";

export default function Plant() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button
        onClick={() =>
          dispatch(
            incrementByAmount(
              { num: 50, numt: 30 }
              // 50,30
            )
          )
        }
      >
        withPayload
      </button>
      <button
        onClick={() =>
          dispatch(
            addUser({
              id: 11,
              name: "adil-ad",
              email: "default@default-ad",
              password: "def-ad",
              age: 1010,
              country: "ad-india",
            })
          )
        }
      >
        AddUser
      </button>
      <button
        onClick={() =>
          dispatch(
            deleteUser()
            //   {
            //   id: 5,
            //   name: "de-adil",
            //   email: "de-default@default",
            //   password: "de-def",
            //   age: 10,
            //   country: "de-india",
            // }
          )
        }
      >
        DeleteUser
      </button>

      <h1> About Plant</h1>
      <p>
        Sit pariatur aliquip nostrud aute do sunt. Commodo proident dolor fugiat
        officia occaecat fugiat. Adipisicing nulla aute irure aliqua commodo
        tempor fugiat reprehenderit officia esse amet cupidatat consequat qui.
        Esse velit qui irure excepteur mollit consectetur ullamco ea
        exercitation eiusmod incididunt mollit aliquip consequat. Qui ea enim
        fugiat eu.
      </p>
      <h2>Benefits of Plant</h2>
      <p>
        Cillum eiusmod excepteur exercitation irure in est consectetur velit
        commodo in et ad ullamco. Ipsum adipisicing eu et pariatur magna ex
        velit. Adipisicing amet duis eiusmod excepteur. Ullamco labore sint qui
        pariatur esse laborum nisi est pariatur cillum. Non ad tempor nulla
        consequat amet incididunt aliquip est duis cillum officia elit. Fugiat
        sunt reprehenderit cupidatat est. Esse do non nostrud est et consectetur
        nisi laborum ea.
      </p>
    </>
  );
}
