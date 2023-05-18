import React from 'react'
import styles from "./Form.module.css"

const Form = () => {
  return (
    <form className='mb-3'>
        <div className='form-group mb-3'>
            <label className='form-label' htmlFor="">Введите название задачи</label>
            <input type="text" className='form-control' />
        </div>
        <button className='btn btn-success'>Создать</button>
    </form>
  )
}

export default Form