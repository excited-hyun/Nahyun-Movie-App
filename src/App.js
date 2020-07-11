import React from 'react';

class App extends React.Component {
  constructor (props){
    super(props);
    console.log('hello');
  } //제일 먼저 실행되는 생명주기 함수
  state = {
    count:0
  };

  add = () => {
    this.setState(current => ({
       count : this.state.count + 1
      }));
  };

  minus = () => {
    this.setState(current => ({
       count : this.state.count -1
      }));
  };

  componentDidMount(){
    console.log('component rendered');
  } //생명주기 함수

  componentDidUpdate(){
    console.log('I just updated');
  } //화면이 업데이트 되면 실행

  componentWillUnmount(){
    console.log('GoodBye. cruel world');
  } //컴포넌트가 화면에서 떠날 때 실행

  render() {
    console.log("I'm rendering");
    return(
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick = {this.add}>Add</button>
        <button onClick = {this.minus}>Minus</button>
      </div>
    );
  } //setState함수가 실행되면 자동으로 실행되는 생명주기 함수
}

export default App;
