import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { conunterActions } from '../Store';

const Counter = () => {
  const counter = useSelector((state => state.counter.counter))
  const show = useSelector((state => state.counter.showCounter))

  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    dispatch(conunterActions.toogle())
  };

  const incrementCounterHandler = () => {
    dispatch(conunterActions.increase(1))
  }


  const decrementCounterHandler = () => {
    dispatch(conunterActions.decrease(1))
  }

  const incrementby5CounterHandler = () => {
    dispatch(conunterActions.increase(5))
  }


  const decrementby5CounterHandler = () => {
    dispatch(conunterActions.decrease(5))
  }

  const incrementby2CounterHandler = () => {
    dispatch(conunterActions.increase(2))
  }


  const decrementby2CounterHandler = () => {
    dispatch(conunterActions.decrease(2))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandler}>increment</button>
        <button onClick={decrementCounterHandler}>decrement</button>
      </div>
      <div>
        <button onClick={incrementby5CounterHandler}>incrementby5</button>
        <button onClick={decrementby5CounterHandler}>decrementby5</button>
      </div>
      <div>
        <button onClick={incrementby2CounterHandler}>incrementby2</button>
        <button onClick={decrementby2CounterHandler}>decrementby2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
