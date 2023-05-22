import React from 'react'
import { useDispatch } from 'react-redux'
import { IAlertProps } from '../../types/types'
import styles from "./Alert.module.css"

const Alert = ({props}:IAlertProps) => {
    const dispatch = useDispatch();
    const handlerAlert = () => {
        
    }
  return (
    <div className={`${styles.alertWrapper} alert-${props.alertStatus}`}> 
        {props.alertText}
        <button className={`${styles.alertBtn} btn-close`}/>
    </div>
  )
}

export default Alert