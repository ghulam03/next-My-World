import styles from "../../../styles/my-account/profile/editProfile.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function EditProfile() {
  const id = useSelector((state) => state.user.id);
  const sname = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  const spassword = useSelector((state) => state.user.password);
  const sage = useSelector((state) => state.user.age);
  const scountry = useSelector((state) => state.user.country);

  const [name, setname] = useState(sname);
  const [age, setage] = useState(sage);
  const [country, setcountry] = useState(scountry);
  const [password, setpassword] = useState(spassword);
  function handleEdit(e) {
    e.preventDefault();

    fetch("/api/my-account/user/edit-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ age, country, name, password,email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("user edited profile data", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <div className={styles.container}>
        <form className={styles.formcontainer} onSubmit={handleEdit}>
          <label>User ID</label>
          <input type="text" disabled value={id}></input>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          ></input>

          <label>Email</label>
          <input
            type="text"
            value={email}
            disabled
            //   onChange={(e) => setemail(e.target.value)}
          ></input>
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          ></input>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setage(e.target.value)}
          ></input>
          <label>Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setcountry(e.target.value)}
          ></input>
          <button> Edit</button>
        </form>
      </div>
    </>
  );
}
