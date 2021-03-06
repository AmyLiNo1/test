import React, { Component, createContext } from "react";
// context传值
const testContext = createContext();
const TestProvider = testContext.Provider;
const TestConsumer = testContext.Consumer;
const testVal = {
  name: "lining",
  age: 18,
  sayName() {
    console.log(`my name is ${this.name},  I am ${this.age} years old`);
  }
};
function Child(value) {
  return (
    <div onClick={() => value.sayName()}>{`my name is ${value.name},  I am ${
      value.age
    } years old`}</div>
  );
}
export default class Passvalue extends Component {
  render() {
    return (
      <div>
        <TestProvider value={testVal}>
          <TestConsumer>
            <Child />
          </TestConsumer>
        </TestProvider>
      </div>
    );
  }
}
