import React, {Component, Fragment} from 'react';
// import './App.css';
import {generating} from './test2.ts';
import AppHeader from './components/AppHeader';
import Header from './components/Header.tsx';
import LoginForm from './components/SigninForm.tsx';

class App extends Component {
  test() {
    console.log(generating());
  }
  constructor (props) {
    super(props);
    this.state = {
      counter: 0,
      error: false,
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    const { counter } = this.state;
    if (counter%5===0) {
      return false;
    }
    return true;
  }
  componentDidCatch (error, info) {
    this.setState({
      error: true
    });
  }
  addCounter = () => {
    this.setState(
        ({ counter }) => ({
            counter: counter + 1
        })
    )
  };
  subtractCounter = () => {
    this.setState(
        ({ counter }) => ({
          counter: counter - 1
        })
    );
  };

  render() {
    if (this.state.error) return (<h1>에러발생</h1>)
    const {
      counter
    } = this.state;
    return (
        <Fragment>
          <Header/>
          <LoginForm/>
          <AppHeader
            counter={counter}
            addCounter={this.addCounter}
            subtractCounter={this.subtractCounter}
          >{counter}</AppHeader>
        </Fragment>
    );
  }
}

export default App;
