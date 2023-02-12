import React from 'react'
import styles from "./BlogCard.module.css"
function BlogCard(props) {
  console.log(props)
  return (
    <>
    <div className={styles.container}>
      <h3>Title is:{props.title}</h3>
      <h3>Description is :{props.desc}</h3>  <h3>Written By:{props.author}</h3>
      
      </div>
      </>
  )
}

export default BlogCard