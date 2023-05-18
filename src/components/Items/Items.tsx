import React from 'react'
import Item from '../Item/Item'
import styles from "./Items.module.css";


const Items = () => {
  return (
    <div>
        <h2 className='pt-3'>Новые задачи</h2>
        <ul className={styles.list}>
        <Item/>
        </ul>
    </div>
  )
}

export default Items