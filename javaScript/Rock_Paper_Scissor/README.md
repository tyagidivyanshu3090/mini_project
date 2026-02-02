# 🪨 Rock, Paper, Scissors Game

This project is a simple interactive game implemented in JavaScript where a user plays "Rock, Paper, Scissors" against the computer. The game runs in the browser console.

## 📝 What I Have Done

I have built a console-based game that:
1.  **Takes User Input**: Uses the `prompt()` function to ask the user to choose between Rock, Paper, or Scissors.
2.  **Generates Computer Choice**: Uses JavaScript's math functions to randomly select a move for the computer.
3.  **Determines the Winner**: Implements the game logic using `if-else` statements to compare the user's choice vs. the computer's choice:
    *   Rock breaks Scissors.
    *   Paper wraps Rock.
    *   Scissors cuts Paper.
4.  **Handles Ties**: Checks if both players chose the same option.
5.  **Replay Feature**: Allows the game to restart automatically if the user wants to play again, using a recursive function call.

## 💡 JavaScript Special Functions & Concepts Used

Here are the key JavaScript functions and features used in this specific project:

### 1. `prompt()`
*   **What it does:** Displays a dialog box that prompts the visitor for input.
*   **Usage in this project:** It is used to get the "Rock", "Paper", or "Scissors" choice from the user and to ask if they want to play again.

### 2. `Math.random()`
*   **What it does:** Returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
*   **Usage in this project:** It provides the randomness needed to let the computer make an unpredictable choice.

### 3. `Math.floor()`
*   **What it does:** Rounds a number *down* to the next largest integer.
*   **Usage in this project:** Combined with `Math.random()`, it converts the decimal random number into a clean integer (1, 2, or 3) to represent Rock, Paper, or Scissors.

### 4. `toLowerCase()`
*   **What it does:** Converts a string value to lowercase letters.
*   **Usage in this project:** It ensures the game works correctly even if the user types "ROCK" or "RoCk" instead of "rock". It makes the input case-insensitive.

### 5. Recursion (Function calling itself)
*   **What it does:** A programming concept where a function calls itself to solve a problem or repeat a task.
*   **Usage in this project:** The `rockPaperScissorsGame()` function calls itself at the end if the user types "yes". This creates a loop allowing the game to restart without reloading the page.

## 🚀 How to Run
1.  Open `index.html` in your web browser.
2.  Open the **Browser Developer Tools** (usually by right-clicking and selecting "Inspect", then going to the "Console" tab).
3.  The game will start automatically and ask for your input!
