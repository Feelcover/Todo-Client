import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ITodoReducer } from "../../types/types";
import { completeTodo, deleteTodo, editTodo } from "../../redux/actions";
import Item from "../Item/Item";
import "./styles.css";

const List = () => {
  const state = useSelector((state: ITodoReducer) => state.todoReducer);
  const dispatch = useDispatch();

  const removeTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const doneTodo = (id: string, done: boolean) => {
    dispatch(completeTodo(id, done));
  };

  const changeTodo = (id: string, done: boolean, title: string) => {
    dispatch(editTodo(id, done, title));
  };

  return (
    <TransitionGroup component="ul" className="list-group">
      {state.todos.map((todo) => (
        <CSSTransition timeout={800} classNames={"todo"} key={todo.id}>
          <Item
            todo={todo}
            removeTodo={removeTodo}
            doneTodo={doneTodo}
            changeTodo={changeTodo}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default List;
