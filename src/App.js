import React, { Component } from "react";
import { createRenderer } from "fela";
import { RendererProvider, createComponent } from "react-fela";

const renderer = createRenderer();

const CustomProgress = createComponent(
  {
    "::-moz-progress-bar": {
      backgroundColor: "red"
    }
  },
  "progress"
);
const OtherComponent = createComponent({ fontWeight: "bold" }, "div");

class App extends Component {
  render() {
    return (
      <RendererProvider renderer={renderer}>
        <div>
          <CustomProgress />
          <OtherComponent>Other Component</OtherComponent>
        </div>
      </RendererProvider>
    );
  }
}

export default App;
