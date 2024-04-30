import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../app/features/counter/counterSlice";

const Counter = () => {
 //* Reading The data From the "store"

 const count = useSelector((state) => state.counter.value);
 //* Changing the data by sending "actions" to the store .
 const dispatch = useDispatch();
 return (
  <div>
   <h1>{count}</h1>
   <button onClick={() => dispatch(increment())}>+</button>
   <button onClick={() => dispatch(decrement())}>-</button>
  </div>
 );
};
export default Counter;
