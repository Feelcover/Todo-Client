import { useDispatch } from "react-redux";
import { hideAlert } from "../../redux/actions";
import { IAlertProps } from "../../types/types";
import styles from "./Alert.module.css";

const Alert = ({ props }: IAlertProps) => {
  const dispatch = useDispatch();
  const handlerAlertClose = () => {
    dispatch(hideAlert());
  };
  return (
    <div className={`${styles.alertWrapper} alert-${props.alertStatus}`}>
      {props.alertText}
      <button
        className={`${styles.alertBtn} btn-close`}
        onClick={handlerAlertClose}
      />
    </div>
  );
};

export default Alert;
