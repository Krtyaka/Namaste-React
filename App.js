import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1> Namaste React using JSX </h1>;

// React Functional Component
// Component Composition
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading"> Namaste React Functional Component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// REPLACES any existing code in the "root" element does not append.
root.render(<HeadingComponent />);
