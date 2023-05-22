import { useDispatch } from "react-redux";
import { hideAlert } from "../../redux/actions";
import { IAlertProps } from "../../types/types";
import "./styles.css";

const Alert = ({ props }: IAlertProps) => {
  const dispatch = useDispatch();
  const handlerAlertClose = () => {
    dispatch(hideAlert());
  };
  return (
    <div className={`alert alert-wrapper alert-${props.alertStatus}`}>
      {props.alertText}
      <button className="btn-close alert-btn" onClick={handlerAlertClose} />
    </div>
  );
};

export default Alert;
