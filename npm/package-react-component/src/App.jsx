/**
 * @file
 * App.jsx
 *
 * This file solely exists for development testing and is not used in the
 * actual npm package.
 */

import { Component1 } from "./lib";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Component1 className="c1 c2 c3">My component children</Component1>
      </header>
    </div>
  );
}

export default App;
