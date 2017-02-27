/**
 * Created by kimmy on 26/02/2017.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {CounterActions} from './action';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  click(){
    // this.props.router.push('/api');
    console.log('cliekdfdfddsdfdsss', this.props);
    this.props.testClick();
  }

  render() {
    return (
      <div>
        <h1> hello redux </h1>
        <h2> Counter:{this.props.counter} </h2>
        <button onClick={()=>{this.click()}} > Click me</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testClick: () => dispatch(CounterActions("Add"))
  };
};

const mapStateToProps = (state) => {
  return state.counterApp;
};

const CounterApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default CounterApp;