import React from "react";
import ReactDOM from "react-dom/client";

export const HelloWorld = () => {
  return React.createElement("p", {}, "Hello world");
};
export const KirreMama = (qs) => {
  return React.createElement("h1", {}, `kirre mama kemon asos  ${qs} `);
};
