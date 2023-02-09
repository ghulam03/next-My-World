import React,{ useState } from "react";

function CreateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const data={name,email,password} 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataa = fetch("api/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
        
    });
    console.log(data)
    // try {
    //   const user = await prisma.users.create({
    //     data: {
    //       email,
    //       password,
    //       name,
    //     },
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <>
      <p>CreateUser</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default CreateUser;
