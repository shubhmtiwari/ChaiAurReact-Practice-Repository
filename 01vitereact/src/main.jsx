import React from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}
//If the above code is getting converted to the below code, then we can say that the above code is getting compiled by react and the below code is what react see after compiling the above code
// const ReactElement = {
//   type: "a", //tells what type of our element is
//   props: {
//     //an object which tells what properties we have
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };
//the above code doesn't work becasue the above code was written for our customreact code and we had also written the customRender function to render the above code, but here we are using render method rom react and this render method expect some different kind of parameter;;

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Click me to visit google
  </a>
);

const userName = "Shubham Tiwari";

const reactElement = React.createElement(
  "a", //tells what type of our element is
  { href: "https://google.com", target: "_blank" }, //to pass the attributes for our element
  "Click me to go to google.com", // actual text
  userName, // evaluated expressions, where we inject value of variables
);

createRoot(document.getElementById("root")).render(
  // anotherElement,
  // <MyApp />,
  // MyApp() > this also works but not the recommended way
  // <ReactElement />, -> this doesn't work

  // reactElement,
  <App />,
  // reactElement,
);
