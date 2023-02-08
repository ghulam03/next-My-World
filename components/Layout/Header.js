import React from 'react'
import styles from "./Header.module.css"
function Header( ) {
  return (
    <>
    <nav className={styles.header}>
        <h2>
            Plants
        </h2>
        <h2>
            Animals
        </h2>
        <h2>Birds</h2>
    </nav>
    </>
  )
}

export default Header