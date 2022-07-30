import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state => state.counter))
  const dispatch = useDispatch()
  const toggleCounterHandler = () => { };

  const incrementCounterHandler = () => {
    dispatch({ type: 'increment' })
  }


  const decrementCounterHandler = () => {
    dispatch({ type: 'decrement' })
  }

  const incrementby5CounterHandler = () => {
    dispatch({ type: 'incrementby5' })
  }


  const decrementby5CounterHandler = () => {
    dispatch({ type: 'decrementby5' })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementCounterHandler}>increment</button>
        <button onClick={decrementCounterHandler}>decrement</button>
      </div>
      <div>
        <button onClick={incrementby5CounterHandler}>incrementby5</button>
        <button onClick={decrementby5CounterHandler}>decrementby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
