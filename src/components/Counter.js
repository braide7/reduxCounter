// import { Component } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incremenentHandler = () =>{
    dispatch(counterActions.increment())
  }

  const increaseHandler = () =>{
    dispatch(counterActions.increase(5));
  }

  const decrementHandler = () =>{
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incremenentHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component{
  
//   incremenentHandler(){
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return(
//     <main className={classes.counter}>
//     <h1>Redux Counter</h1>
//     <div className={classes.value}>{this.props.counter}</div>
//     <div>
//       <button onClick={this.incremenentHandler.bind(this)}>Increment</button>
//       <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//     </div>
//     <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//   </main>
//     )
//   }
// }

// const mapStateToProps = state =>{
//   return{
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch =>{
//   return{
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
