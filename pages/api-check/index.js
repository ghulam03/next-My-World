import { useState } from "react";

export default function ApiCheck() {
  const [comment, setComment] = useState(" ");

  const addComment = async () => {
    const response = await fetch('/api/api-check', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }
  

  return (
    <>
      <h1>Add Comment here</h1>
      <p>your comment is{comment} </p>
      <div>
        <input
          type="text"
          placeholder="type comment "
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
            <button onClick={addComment}>Submit</button>
      </div>
<h1>your comment list</h1>
      <div>
        <p>comment list</p>
      </div>
    </>
  );
}
