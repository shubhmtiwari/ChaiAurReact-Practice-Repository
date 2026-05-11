function customRender(reactElement, container) {
  /*
    //Now we have the element retured from function and reference of the element inside our index.html
  //Now we only have to render it in our dom

  //For that we need to create an element
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  //We have the element created and just need to add it on the conatiner
  container.appendChild(domElement);
  */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a", //tells what type of our element is
  props: {
    //an object which tells what properties we have
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");
// now we have the refernce of our element, now we want to render it
// how react see the element that we are returning from our function, our how react see the elements after compiling the elements.

// Whatever element we have, react tries to make a tree with it first

customRender(reactElement, mainContainer);
