import Chai from "./chai.jsx";

function App() {
  const userName = "chai aur react";

  return (
    // <div>
    //   <h1>Chai Aur React| Shubham Tiwari</h1>
    //   <li>
    //     1. Learnt how to use react with framework and without framework using
    //     bundlers like vite
    //   </li>
    //   <li>
    //     2. React Core Library and the attachment we get with library like
    //     react-dom and react-native etc.
    //   </li>
    //   <li>
    //     3. Two ways to create react projects - first using npx create-react-app
    //     command and another using vite
    //   </li>
    //   <li>4. Learnt why we prefer using vite over create-react-app</li>
    //   <li>
    //     5. How to understand the files inside our react project, understood the
    //     package.json file, and different scripts
    //   </li>
    //   <li>
    //     6. Most importantly learnt to clean up the code after creating the react
    //     project.
    //   </li>
    // </div>
    <>
      <Chai />
      <h1>Hello from {userName}</h1>
      <li>
        1. We created our own react element and build custom render method with
        a basic approach and a modular approach.
      </li>

      <li>
        2. We learned about how JSX is automatically transpiled into
        React.createElement() calls.
      </li>

      <li>
        3. We jumped into the react source code and learned how to understand
        it.
      </li>
    </>
  );
}

export default App;
