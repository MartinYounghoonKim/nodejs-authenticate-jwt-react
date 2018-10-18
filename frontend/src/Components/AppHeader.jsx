import React, { Component } from 'react';
import ButtonComponent from './Button';

class AppHeader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      addState: {
        text: '더하기',
        count: 0
      },
      subtractState: {
        text: '빼기',
        count: 0,
      }
    };
    console.log('컴포넌트가 새로 만들어질 때 호출');
  }
  static defaultProps = {
    test: 'default Props Test'
  };
  componentDidMount () {
    // API 연동 등을 해당 훅에서 실행
    console.log('componentDidMount 훅 실행');
  }
  componentDidUpdate () {
    // render 함수 이후에 발생
    console.log('componentDidUpdate 훅 실행');
  }
  addCounter = () => {
    const { count } = this.state.addState;

    this.setState({
      addState: {
        ...this.state.addState,
        count: count + 1
      }
    });
    this.props.addCounter();
  };
  subtractCounter = () => {
    const { count } = this.state.subtractState;
    this.setState({
      subtractState: {
        ...this.state.subtractState,
        count: count + 1
      }
    });
    this.props.subtractCounter();
  };
  render() {
    const style = {
      fontSize: '12px',
      color: 'white',
      backgroundColor: 'red'
    };
    const {
      test,
      children
    } = this.props;
    const {
      addState,
      subtractState,
      counter,
    } = this.state;
    if (this.props.counter > 10) {
      throw (new Error('asdf'));
    }
    return (
        <header className="App-header">
          {children}
          {/* 주석 쓰기 */}
          {counter}<br/>
          {addState.text} 가 클릭된 횟수 :{addState.count}<br/>
          {subtractState.text} 가 클릭된 횟수 : {subtractState.count}
          <div style={style}>
            {false ? <div>true</div> : <div>false</div>}
          </div>
          {test}
          <ButtonComponent
            text={addState.text}
            clickEvent={this.addCounter}
          />
          <ButtonComponent
            text={subtractState.text}
            clickEvent={this.subtractCounter}
          />
        </header>
    )
  }
}

export default AppHeader;