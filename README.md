# React-Usestate
In This repository i will tried to learn how react usestate hook works behind the scene.

---

## 🚀 How React’s `useState` works behind the scenes (simplified)

Most developers use `useState`, but I wanted to understand **what actually happens under the hood**.

So I recreated a **minimal `useState` implementation in vanilla JavaScript** to learn the core idea — without React.

### 🧠 Key concepts

* State is stored **outside** the component
* Hooks are tracked by **call order**, not names
* On every update, the component **re-runs**
* `useState` is essentially **closures + an array + an index**

---

### 🔹 Minimal `useState` implementation (vanilla JS)

```js
let states = [];
let index = 0;

function useState(initialValue) {
  const currentIndex = index;

  if (states[currentIndex] === undefined) {
    states[currentIndex] = initialValue;
  }

  function setState(newValue) {
    states[currentIndex] = newValue;
    render(); // trigger re-render
  }

  index++;
  return [states[currentIndex], setState];
}
```

---

### 🔹 Rendering logic (simulating React re-render)

```js
function render() {
  index = 0; // reset hook pointer
  App();
}
```

---

### 🔹 Component using the custom hook

```js
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  document.getElementById("app").innerHTML = `
    <p>Count: ${count}</p>
    <p>Text: ${text}</p>
  `;

  document.getElementById("inc").onclick = () =>
    setCount(count + 1);

  document.getElementById("change").onclick = () =>
    setText(text === "Hello" ? "Bye" : "Hello");
}
```

---

### 🔹 Why this matters

This small experiment helped me clearly understand:

✔ Why hooks must be called in the same order
✔ How React remembers state between renders
✔ Why hooks break inside loops or conditions
✔ What “re-render” really means

Understanding **how things work internally** makes using frameworks much easier and safer.

---

### 📌 Final thought

Frameworks are powerful, but rebuilding small parts of them is one of the best ways to **level up as a developer**.

If you’re learning React, I highly recommend trying this exercise.

---

#JavaScript #ReactJS #FrontendDevelopment #WebDevelopment #LearningInPublic

---


