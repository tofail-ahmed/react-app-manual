import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorld, KirreMama } from "./hello";

// const App = () => {

//   return React.createElement(
//     "h1",
//     { style: { color: "green" } },
//     "Hello, its root rendering",
//     helloWorld(),

//     kirreMama(),
//   );
// };

const App = () => {
  const customStyle = {
    color: "green",
    fontWeight: "bold",
    fontSize: "18px",
  };

  return (
    <React.Fragment>
      <div style={customStyle}>This is a fokira React App</div>
     <HelloWorld/>
     <KirreMama qs="heelo"/>
    
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
