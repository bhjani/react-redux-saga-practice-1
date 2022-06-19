import { useSelector, useDispatch } from "react-redux";
import * as ACTIONS from "../store/actions/conter-actions";

function Counter() {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  const handleIncreament = () => {
    dispatch({ type: ACTIONS.INCREAMENT });
  };

  const handleDecreament = () => {
    dispatch({ type: ACTIONS.DECREAMNENT });
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncreament}>Count+</button>
      <button onClick={handleDecreament}>Count-</button>
    </>
  );
}

export default Counter;
