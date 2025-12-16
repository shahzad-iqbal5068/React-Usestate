// here is the First undesrstinding of how React works internally
// this is the simplest state management and rendering mechanism then i
//  Implemented full flex array methdo thats was actullay in react

// let state = 0;
// function render() {
//   console.log("Render called with state:", state);
// }
// render();

// function setstate(newState) {
//   state = newState;
//   render();
// }

// setstate(1);

// setstate(2);
// setstate(3);

// Full implementation of useState and rendering mechanism

// ===== mini useState =====
let states = [];
let index = 0;

function useState(initialValue) {
  const currentIndex = index;

  if (states[currentIndex] === undefined) {
    states[currentIndex] = initialValue;
  }

  function setState(newValue) {
    states[currentIndex] = newValue;
    render();
  }

  index++;
  return [states[currentIndex], setState];
}

function render() {
  index = 0;
  App();
}

// ===== App =====
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  console.log("Count:", count);
  console.log("Text:", text);

  const app = document.getElementById("app");
  document.getElementById("inc").onclick = () => setCount(count + 1);
  document.getElementById("change").onclick = () =>
    setText(text === "Hello" ? "Bye" : "Hello");
  app.innerHTML = `
          <p>Count: ${count}</p>
          <p>Text: ${text}</p>
        `;
}

// initial render
render();
