import { useDispatch, useSelector } from "react-redux";
import { decrementByValue, decrement, increment, incrementByValue } from "../redux/features/counter/counterSlice";

const Counter = () => {

    const { count } = useSelector((state)=> state.counter);
    const dispatch = useDispatch();


    return (
        <div>
            <button onClick={()=> dispatch(incrementByValue(5))} className="bg-green-500 py-2 px-4" >Increment by 5</button>
            <button onClick={()=> dispatch(increment())} className="bg-green-500 py-2 px-4" >Increment</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={()=> dispatch(decrement())} className="bg-red-500 py-2 px-4" >Decrement</button>
            <button onClick={()=> dispatch(decrementByValue(5))} className="bg-red-500 py-2 px-4" >Decrement by 5</button>
        </div>
    );
};

export default Counter;