# 🔢 Counter Application

A simple yet elegant Counter Application built with **React 19** and **Vite**. This project demonstrates the fundamental concepts of React state management using the `useState` hook.

---

## 📸 Features

- ➕ **Increment** - Increase the counter by 1
- ➖ **Decrement** - Decrease the counter by 1
- 🔄 **Reset** - Reset the counter to 0
- ⚡ **Fast Refresh** - Instant updates with Vite's HMR (Hot Module Replacement)

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | ^19.2.0 | UI Library |
| Vite | ^7.2.4 | Build Tool & Dev Server |
| ESLint | ^9.39.1 | Code Linting |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd counter-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

---

## 📁 Project Structure

```
counter-app/
├── public/              # Static assets
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

---

## 📝 Code Explanation

### `App.jsx` - Main Component

```jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Counter Application</h1>
    <p> Count: {count}</p>
    <button onClick={() => setCount(count + 1)} style ={{color:"green", padding:"10px", margin:"10px"}}>➕ Increment</button>
    <button onClick={() => setCount(count - 1)} style ={{color:"red", padding:"10px", margin:"10px"}}>➖ Decrement</button>
    <button onClick={() => setCount(0)} style ={{color:"blue", padding:"10px", margin:"10px"}}>🔄 Reset</button>
    </>
  )
}

export default App
```

### Key Concepts Used

#### 1. **`useState` Hook**
```jsx
const [count, setCount] = useState(0)
```
- `useState` is a React Hook that lets you add state to functional components
- `count` - the current state value (initialized to `0`)
- `setCount` - a function to update the state value
- When `setCount` is called, React re-renders the component with the new value

#### 2. **Event Handling with `onClick`**
```jsx
onClick={() => setCount(count + 1)}
```
- Arrow functions are used as event handlers
- Each button has its own click handler:
  - **Increment**: `setCount(count + 1)` - adds 1 to current count
  - **Decrement**: `setCount(count - 1)` - subtracts 1 from current count
  - **Reset**: `setCount(0)` - sets count back to 0

#### 3. **JSX Fragments**
```jsx
<>
  ...
</>
```
- Empty tags `<>...</>` are React Fragments
- They allow grouping multiple elements without adding extra nodes to the DOM

#### 4. **Inline Styling**
```jsx
style={{color:"green", padding:"10px", margin:"10px"}}
```
- Inline styles in React use camelCase properties
- Styles are passed as JavaScript objects

---

## 🧪 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts development server with hot reload |
| `npm run build` | Builds the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## 📚 Learning Objectives

This project helps you understand:

1. **React Functional Components** - How to create and export components
2. **State Management** - Using `useState` hook to manage component state
3. **Event Handling** - Responding to user interactions (button clicks)
4. **JSX Syntax** - Writing HTML-like code in JavaScript
5. **Inline Styles** - Applying styles directly to elements in React
6. **Vite Build Tool** - Modern, fast development environment for React

---

## 🔧 Potential Improvements

Here are some ideas to extend this project:

- [ ] Add minimum/maximum limits to the counter
- [ ] Add step increment (e.g., +5, +10)
- [ ] Add animation effects on count change
- [ ] Persist count in localStorage
- [ ] Add dark/light theme toggle
- [ ] Add keyboard shortcuts (↑ for increment, ↓ for decrement)

---

## 📄 License

This project is open source and available for learning purposes.

---

## 🙋‍♂️ Author

**Divyanshu Tyagi**

---

*Happy Coding! 🎉*
